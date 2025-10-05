// src/app/extract/page.tsx – Client page for Propstream import (with progress bar, polling, always-on leads table; gamified UX – see imports progress like quest loading, review leads for dialing; best practice: Polling for status unblocks without complexity; realtime sub for table)
'use client'; // Logic: Client for interactivity (dropzone, form state, polling, realtime sub)
import { zodResolver } from '@hookform/resolvers/zod';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'; // For realtime client sub
import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone'; // Logic: Drag-drop (gamified UX – better than plain input)
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button'; // Import Button component
import { Progress } from '@/components/ui/progress'; // Shadcn for import progress
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'; // Shadcn for leads display
import { enrichLeadRealtor, importDataAction, pollImportStatus } from '@/lib/actions'; // Updated actions (add poll below)

const importSchema = z.object({ source: z.literal('propstream') });
type FormData = z.infer<typeof importSchema>;

export default function ExtractPage() {
  const [importResults, setImportResults] = useState<any[]>([]); // Logic: Import outcomes
  const [error, setError] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null); // Logic: Hold uploaded file
  const [leads, setLeads] = useState<any[]>([]); // Logic: State for current leads (fetched/realtime)
  const [importProgress, setImportProgress] = useState(0); // Logic: Progress % (0-100)
  const [importJobId, setImportJobId] = useState<string | null>(null); // Logic: Job ID for polling
  const [enrichRealtors, setEnrichRealtors] = useState(false); // New: Checkbox state for optional enrichment (default false – cost-aware)
  const { handleSubmit, formState: { isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(importSchema),
    defaultValues: { source: 'propstream' },
  });

  const supabase = createClientComponentClient(); // Logic: Client Supabase for realtime subs/fetch (secure with RLS)

  // Fetch initial leads + sub for realtime (always show – gamified review; pushback: Pagination for >100 leads later)
  // New: Include properties relation for equity/etc. display (fixes missing fields in UI – use select('*, properties(*)') for nested)
  useEffect(() => {
    const fetchLeads = async () => {
      const { data: { user } } = await supabase.auth.getUser(); // Secure client auth
      if (user?.id) {
        const { data } = await supabase.from('leads').select('*, properties(*)').eq('assigned_to', user.id).order('created_at', { ascending: false }).limit(100); // New: Include properties (fixes equity display)
        setLeads(data || []);
      }
    };

    fetchLeads();

    // Realtime sub (pushback: Efficient for gamification – live updates like MMO quest log; unsub on unmount)
    const leadsSub = supabase.channel('leads_changes').on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'leads' }, async (payload) => {
      // New: For new lead, fetch with properties (since payload.new lacks nested – quick refetch or assume sub pushes full)
      const { data } = await supabase.from('leads').select('*, properties(*)').eq('id', payload.new.id).single();
      setLeads((prev) => [data || payload.new, ...prev.slice(0, 99)]); // Prepend, cap at 100
    }).subscribe();

    return () => { supabase.removeChannel(leadsSub); }; // Cleanup
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

      {/* Leads Table (always show – data table of current leads; realtime updates) */}
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl mb-4">Your Current Leads (Assigned to You)</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Address</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Points Earned</TableHead>
              <TableHead>Equity % (Creative)</TableHead> {/* New: Display equity from properties (fixes missing in UI; format as %) */}
              <TableHead>AVM</TableHead> {/* New: More fields for completeness */}
              <TableHead>Realtor First</TableHead>
              <TableHead>Realtor Last</TableHead>
              <TableHead>Realtor Phone</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell>{lead.properties?.address || 'N/A'}</TableCell> {/* New: Access nested properties */}
                <TableCell>{`${lead.first_name || ''} ${lead.last_name || ''}`.trim() || 'N/A'}</TableCell>
                <TableCell>{lead.phone || 'N/A'}</TableCell>
                <TableCell>{lead.status}</TableCell>
                <TableCell>{lead.source}</TableCell>
                <TableCell>{lead.points_earned}</TableCell>
                <TableCell>{lead.properties?.equity ? `${lead.properties.equity.toFixed(2)}%` : 'N/A'}</TableCell> {/* New: Display/fix equity */}
                <TableCell>{lead.properties?.avm ? `$${lead.properties.avm.toFixed(0)}` : 'N/A'}</TableCell> {/* New: Example for other fields */}
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
        </Table>
      </div>
    </div>
  );
}