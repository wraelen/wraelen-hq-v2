// src/app/extract/page.tsx – Client page for Propstream import (with progress bar, polling, always-on leads table; gamified UX – see imports progress like quest loading, review leads for dialing; best practice: Polling for status unblocks without complexity; realtime sub for table)
// New: Switched to @tanstack/react-table with Shadcn DataTable wrapper (replaces old Shadcn Table – headless, React-native; features like sort/pagination without jQuery). Aligned columns to properties schema (accessorKey matches DB fields). Fetch/sub updated for properties (per request; all schema cols). Assumes `npx shadcn-ui add data-table` ran (adds components/ui/data-table.tsx – if not, run it; provides full features). No removals – old table commented.
'use client'; // Logic: Client for interactivity (dropzone, form state, polling, realtime sub)
import { zodResolver } from '@hookform/resolvers/zod';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'; // For realtime client sub
import { ColumnDef } from '@tanstack/react-table';
import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone'; // Logic: Drag-drop (gamified UX – better than plain input)
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button'; // Import Button component
import { Progress } from '@/components/ui/progress'; // Shadcn for import progress
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'; // Comment out old plain Table (replaced with DataTable – easy revert)
import { enrichLeadRealtor, importDataAction, pollImportStatus } from '@/lib/actions'; // Updated actions (add poll below)
import { DataTable } from '../../components/ui/data-table.tsx'; // Adjusted import path to match relative location
// New: Tanstack types for columns (install: pnpm add @tanstack/react-table)

const importSchema = z.object({ source: z.literal('propstream') });
type FormData = z.infer<typeof importSchema>;

// New: Properties type from schema (for type-safe columns; expand if Prisma types gen available)
type Property = {
  id: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  property_type: string | null;
  bedrooms: number | null;
  bathrooms: number | null;
  square_feet: number | null;
  year_built: number | null;
  avm: number | null;
  equity: number | null;
  remaining_balance: number | null;
  loan_to_value: number | null;
  open_loans: number | null;
  owner_occupied: boolean | null;
  notes: string | null;
  created_at: string; // Date as string for display
  // Add more schema fields (e.g., metadata: object – render as JSON.stringify in cell)
};

export default function ExtractPage() {
  const [importResults, setImportResults] = useState<any[]>([]); // Logic: Import outcomes
  const [error, setError] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null); // Logic: Hold uploaded file
  const [properties, setProperties] = useState<Property[]>([]); // Updated: State for properties (fetched/realtime – aligned to schema; was leads)
  const [importProgress, setImportProgress] = useState(0); // Logic: Progress % (0-100)
  const [importJobId, setImportJobId] = useState<string | null>(null); // Logic: Job ID for polling
  const [enrichRealtors, setEnrichRealtors] = useState(false); // New: Checkbox state for optional enrichment (default false – cost-aware)
  const { handleSubmit, formState: { isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(importSchema),
    defaultValues: { source: 'propstream' },
  });

  const supabase = createClientComponentClient(); // Logic: Client Supabase for realtime subs/fetch (secure with RLS)

  // Fetch initial properties + sub for realtime (always show – gamified review; pushback: Pagination for >100 items later via tanstack)
  // New: Fetch properties (all schema fields via select('*')). Sub on properties table.
  useEffect(() => {
    const fetchProperties = async () => {
      const { data: { user } } = await supabase.auth.getUser(); // Secure client auth
      if (user?.id) {
        const { data } = await supabase.from('properties').select('*').order('created_at', { ascending: false }).limit(100); // New: Fetch properties (eq filter if owned, e.g., .eq('assigned_to', user.id) if schema has it)
        setProperties(data || []);
      }
    };

    fetchProperties();

    // Realtime sub (pushback: Efficient for gamification – live updates like MMO quest log; unsub on unmount)
    const propertiesSub = supabase.channel('properties_changes').on('postgres_changes', { event: '*', schema: 'public', table: 'properties' }, async (payload) => {
      // New: For changes, refetch or update state (simple prepend for INSERT; handle UPDATE/DELETE similarly if needed)
      if (payload.eventType === 'INSERT') {
        setProperties((prev) => [payload.new, ...prev.slice(0, 99)]); // Prepend new
      } else if (payload.eventType === 'UPDATE') {
        setProperties((prev) => prev.map((p) => p.id === payload.new.id ? payload.new : p));
      } else if (payload.eventType === 'DELETE') {
        setProperties((prev) => prev.filter((p) => p.id !== payload.old.id));
      }
    }).subscribe();

    return () => { supabase.removeChannel(propertiesSub); }; // Cleanup
  }, [supabase]);

  // Polling for import progress (if jobId set; interval 1s, stop on 100% or error)
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (importJobId) {
      interval = setInterval(async () => {
        const status = await pollImportStatus(importJobId); // Logic: New action (below)
        setImportProgress(status.progress);
        setImportResults(status.results || []);
        if (status.error) setError(status.error);
        if (status.progress >= 100 || status.error) {
          clearInterval(interval);
          setImportJobId(null); // Reset
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [importJobId]);

  const onSubmit = async () => {
    setError(null);
    setImportResults([]);
    setImportProgress(0);
    if (!file) {
      setError('Upload a Propstream CSV first');
      return;
    }
    if (file.size > 5 * 1024 * 1024) { // Logic: Security/perf – limit 5MB
      setError('File too large – max 5MB');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('source', 'propstream');
    formData.append('enrichRealtors', enrichRealtors.toString()); // New: Pass flag to action
    const result = await importDataAction(formData); // Logic: Now returns jobId for long-running (update action to support)

    if (result.error) {
      setError('Import failed: ' + JSON.stringify(result.error));
    } else {
      setImportJobId(result.jobId); // Start polling
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'text/csv': ['.csv'] },
    onDrop: (acceptedFiles) => setFile(acceptedFiles[0] || null), // Logic: Take first file
  });

  // New: Define columns for DataTable (match properties schema – accessorKey: 'db_field', header/title, cell for custom render like bool Yes/No or format numbers)
  const columns: ColumnDef<Property>[] = [
    { accessorKey: 'address', header: 'Address' },
    { accessorKey: 'city', header: 'City' },
    { accessorKey: 'state', header: 'State' },
    { accessorKey: 'zip_code', header: 'Zip Code' },
    { accessorKey: 'property_type', header: 'Property Type' },
    { accessorKey: 'bedrooms', header: 'Bedrooms' },
    { accessorKey: 'bathrooms', header: 'Bathrooms' },
    { accessorKey: 'square_feet', header: 'Square Feet' },
    { accessorKey: 'year_built', header: 'Year Built' },
    { accessorKey: 'avm', header: 'AVM', cell: ({ row }) => row.original.avm ? `$${row.original.avm.toFixed(0)}` : 'N/A' }, // Custom cell (format as currency)
    { accessorKey: 'equity', header: 'Equity', cell: ({ row }) => row.original.equity ? `$${row.original.equity.toFixed(0)}` : 'N/A' },
    { accessorKey: 'remaining_balance', header: 'Remaining Balance', cell: ({ row }) => row.original.remaining_balance ? `$${row.original.remaining_balance.toFixed(0)}` : 'N/A' },
    { accessorKey: 'loan_to_value', header: 'Loan to Value', cell: ({ row }) => row.original.loan_to_value ? `${row.original.loan_to_value.toFixed(2)}%` : 'N/A' },
    { accessorKey: 'open_loans', header: 'Open Loans' },
    { accessorKey: 'owner_occupied', header: 'Owner Occupied', cell: ({ row }) => row.original.owner_occupied ? 'Yes' : 'No' }, // Bool render
    { accessorKey: 'notes', header: 'Notes' },
    { accessorKey: 'created_at', header: 'Created At', cell: ({ row }) => new Date(row.original.created_at).toLocaleString() }, // Date format
    // Add more (e.g., { id: 'actions', cell: ({ row }) => <Button>Enrich</Button> } for custom actions like realtor enrich – tie to leads if needed via relation)
  ];

  return (
    <div className="flex flex-col min-h-screen items-center bg-black text-green-400 font-mono p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="p-8 border-2 border-green-500 rounded-lg shadow-[0_0_15px_rgba(0,255,0,0.7)] bg-black/80 w-full max-w-md mb-8">
        <h2 className="text-2xl mb-6 text-center">Import Leads Quest (Propstream CSV)</h2>
        <div {...getRootProps()} className="w-full mb-4 p-4 bg-black border border-dashed border-green-500 text-center cursor-pointer">
          <input {...getInputProps()} />
          <p>{file ? file.name : 'Drag-drop CSV or click to upload'}</p>
        </div>
        {/* New: Checkbox for optional enrichment (UX: Warn on costs; ties to formData) */}
        <label className="flex items-center mb-4">
          <input type="checkbox" checked={enrichRealtors} onChange={(e) => setEnrichRealtors(e.target.checked)} className="mr-2" />
          Auto-enrich realtor info? (May incur API costs for bulk)
        </label>
        <button type="submit" disabled={isSubmitting || !file} className="w-full p-2 bg-green-500 text-black hover:bg-green-600">
          {isSubmitting ? 'Importing...' : 'Start Import'}
        </button>
        {importProgress > 0 && <Progress value={importProgress} className="mt-4" />} {/* Logic: Gamified progress bar */}
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {importResults.length > 0 && (
          <ul className="mt-4 max-h-40 overflow-y-auto">
            {importResults.map((res, i) => (
              <li key={i} className={res.success ? 'text-green-400' : 'text-red-500'}>
                {res.success ? `Row ${res.row} imported (Lead ${res.leadId})` : `Error on row ${res.row}: ${res.error}`}
              </li>
            ))}
          </ul>
        )}
      </form>

      {/* Properties Table (always show – DataTable for enhanced features; realtime updates) */}
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl mb-4">Your Current Properties (From Imports)</h2>
        {/* Comment out old Shadcn Table (replaced with DataTable – easy revert; no removal) */}
        {/* <Table>
          <TableHeader><TableRow> 
              <TableHead>Address</TableHead><TableHead>Name</TableHead><TableHead>Phone</TableHead><TableHead>Status</TableHead><TableHead>Source</TableHead><TableHead>Points Earned</TableHead><TableHead>Equity % (Creative)</TableHead><TableHead>AVM</TableHead><TableHead>Realtor First</TableHead><TableHead>Realtor Last</TableHead><TableHead>Realtor Phone</TableHead><TableHead>Actions</TableHead>
            </TableRow></TableHeader>
          <TableBody>
            {leads.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell>{lead.properties?.address || 'N/A'}</TableCell> 
                <TableCell>{`${lead.first_name || ''} ${lead.last_name || ''}`.trim() || 'N/A'}</TableCell>
                <TableCell>{lead.phone || 'N/A'}</TableCell>
                <TableCell>{lead.status}</TableCell>
                <TableCell>{lead.source}</TableCell>
                <TableCell>{lead.points_earned}</TableCell>
                <TableCell>{lead.properties?.equity ? `${lead.properties.equity.toFixed(2)}%` : 'N/A'}</TableCell> 
                <TableCell>{lead.properties?.avm ? `$${lead.properties.avm.toFixed(0)}` : 'N/A'}</TableCell> 
                <TableCell>{lead.realtor_first_name || 'N/A'}</TableCell>
                <TableCell>{lead.realtor_last_name || 'N/A'}</TableCell>
                <TableCell>{lead.realtor_phone || 'N/A'}</TableCell>
                <TableCell>
                  <Button onClick={async () => {
                    const result = await enrichLeadRealtor(lead.id);
                    if (result.success) {
                      // Update local state (or rely on realtime sub)
                      setLeads(prev => prev.map(l => l.id === lead.id ? { ...l, ...result.realtor } : l));
                    } else {
                      alert(result.error); // Simple error UX; use toast later
                    }
                  }}>Enrich Realtor</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table> */}
        <DataTable columns={columns} data={properties} /> {/* New: Shadcn DataTable (tanstack-based – pass columns/data; auto-handles sort/pagination/search if configured in data-table.tsx) */}
      </div>
    </div>
  );
}