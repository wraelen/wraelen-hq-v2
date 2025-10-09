// src/components/LeadsDataTable.tsx
'use client';

import { useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
  type ColumnFiltersState,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
  CheckCircle2,
  Home,
  Phone,
  Mail,
  DollarSign,
  Loader2,
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

export type LeadRow = {
  id: string;
  // Agent info
  realtor_first_name: string | null;
  realtor_last_name: string | null;
  realtor_phone: string | null;
  realtor_email: string | null;
  email_validated: boolean;
  
  // Lead info
  call_notes: string | null;
  status: string;
  
  // Property info
  property_address: string;
  property_city: string;
  property_state: string;
  property_zip: string;
  property_type: string;
  bedrooms: number | null;
  bathrooms: number | null;
  square_feet: number | null;
  listing_price: number | null;
  equity: number | null;
  remaining_balance: number | null;
  open_loans: number | null;
  property_image_url: string | null;
  
  // Timestamps
  created_at: Date;
  updated_at: Date;
};

interface LeadsDataTableProps {
  data: LeadRow[];
  onUpdateEmail?: (leadId: string, email: string) => Promise<void>;
  onUpdateNotes?: (leadId: string, notes: string) => Promise<void>;
  onCallLead?: (leadId: string) => void;
  onViewDetails?: (leadId: string) => void;
}

export function LeadsDataTable({
  data = [],
  onUpdateEmail,
  onUpdateNotes,
  onCallLead,
  onViewDetails,
}: LeadsDataTableProps) {
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'created_at', desc: true }
  ]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  
  const [editingEmail, setEditingEmail] = useState<string | null>(null);
  const [editingNotes, setEditingNotes] = useState<string | null>(null);
  const [tempEmail, setTempEmail] = useState('');
  const [tempNotes, setTempNotes] = useState('');
  const [savingEmail, setSavingEmail] = useState(false);
  const [savingNotes, setSavingNotes] = useState(false);

  const formatCurrency = (value: number | null) => {
    if (!value) return '-';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number | null) => {
    if (!value) return '-';
    return new Intl.NumberFormat('en-US').format(value);
  };

  const getPropertyTypeDisplay = (type: string) => {
    const typeMap: Record<string, string> = {
      single_family: 'Single Family',
      multi_family: 'Multi Family',
      condo: 'Condo',
      townhouse: 'Townhouse',
      land: 'Land',
      commercial: 'Commercial',
      other: 'Other',
    };
    return typeMap[type] || type;
  };

  const handleEmailSave = async (leadId: string) => {
    if (!onUpdateEmail || !tempEmail) return;
    
    setSavingEmail(true);
    try {
      await onUpdateEmail(leadId, tempEmail);
      setEditingEmail(null);
      setTempEmail('');
    } catch (error) {
      console.error('Failed to update email:', error);
      // Don't clear the form on error so user can try again
    } finally {
      setSavingEmail(false);
    }
  };

  const handleNotesSave = async (leadId: string) => {
    if (!onUpdateNotes) return;
    
    setSavingNotes(true);
    try {
      await onUpdateNotes(leadId, tempNotes);
      setEditingNotes(null);
      setTempNotes('');
    } catch (error) {
      console.error('Failed to update notes:', error);
      // Don't clear the form on error so user can try again
    } finally {
      setSavingNotes(false);
    }
  };

  const columns: ColumnDef<LeadRow>[] = [
    {
      accessorKey: 'realtor_name',
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="hover:bg-transparent p-0"
        >
          Agent Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => {
        const firstName = row.original.realtor_first_name || '';
        const lastName = row.original.realtor_last_name || '';
        const fullName = `${firstName} ${lastName}`.trim();
        
        return (
          <div className="font-medium">
            {fullName || <span className="text-muted-foreground italic">No agent</span>}
          </div>
        );
      },
    },
    {
      accessorKey: 'realtor_phone',
      header: 'Agent Phone',
      cell: ({ row }) => {
        const phone = row.original.realtor_phone;
        return phone ? (
          <a
            href={`tel:${phone}`}
            className="text-[#00A0E9] hover:underline flex items-center gap-1"
          >
            <Phone className="h-3 w-3" />
            {phone}
          </a>
        ) : (
          <span className="text-muted-foreground">-</span>
        );
      },
    },
    {
      accessorKey: 'realtor_email',
      header: 'Agent Email',
      cell: ({ row }) => {
        const leadId = row.original.id;
        const email = row.original.realtor_email;
        const validated = row.original.email_validated;
        const isEditing = editingEmail === leadId;

        if (isEditing) {
          return (
            <div className="flex items-center gap-2">
              <Input
                type="email"
                value={tempEmail}
                onChange={(e) => setTempEmail(e.target.value)}
                placeholder="agent@email.com"
                className="h-8 w-48"
                autoFocus
                disabled={savingEmail}
              />
              <Button
                size="sm"
                onClick={() => handleEmailSave(leadId)}
                disabled={!tempEmail || savingEmail}
              >
                {savingEmail ? (
                  <>
                    <Loader2 className="h-3 w-3 animate-spin mr-1" />
                    Validating...
                  </>
                ) : (
                  'Save'
                )}
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => {
                  setEditingEmail(null);
                  setTempEmail('');
                }}
                disabled={savingEmail}
              >
                Cancel
              </Button>
            </div>
          );
        }

        return (
          <div className="flex items-center gap-2">
            {email ? (
              <>
                <a
                  href={`mailto:${email}`}
                  className="text-[#00A0E9] hover:underline flex items-center gap-1"
                >
                  <Mail className="h-3 w-3" />
                  {email}
                </a>
                {validated && (
                  <CheckCircle2 className="h-4 w-4 text-green-500" title="Validated" />
                )}
              </>
            ) : (
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  setEditingEmail(leadId);
                  setTempEmail('');
                }}
              >
                + Add Email
              </Button>
            )}
          </div>
        );
      },
    },
    {
      accessorKey: 'call_notes',
      header: 'Notes',
      cell: ({ row }) => {
        const leadId = row.original.id;
        const notes = row.original.call_notes;
        const isEditing = editingNotes === leadId;

        if (isEditing) {
          return (
            <div className="flex items-center gap-2">
              <Input
                type="text"
                value={tempNotes}
                onChange={(e) => setTempNotes(e.target.value)}
                placeholder="Call wrap-up notes..."
                className="h-8 w-64"
                autoFocus
                disabled={savingNotes}
              />
              <Button
                size="sm"
                onClick={() => handleNotesSave(leadId)}
                disabled={savingNotes}
              >
                {savingNotes ? (
                  <>
                    <Loader2 className="h-3 w-3 animate-spin mr-1" />
                    Saving...
                  </>
                ) : (
                  'Save'
                )}
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => {
                  setEditingNotes(null);
                  setTempNotes('');
                }}
                disabled={savingNotes}
              >
                Cancel
              </Button>
            </div>
          );
        }

        return (
          <div
            className="max-w-xs truncate cursor-pointer hover:text-[#00A0E9]"
            onClick={() => {
              setEditingNotes(leadId);
              setTempNotes(notes || '');
            }}
            title={notes || 'Click to add notes'}
          >
            {notes || (
              <span className="text-muted-foreground italic">Add notes...</span>
            )}
          </div>
        );
      },
    },
    {
      accessorKey: 'property_address',
      header: 'Property',
      cell: ({ row }) => {
        const imageUrl = row.original.property_image_url;
        const address = row.original.property_address;
        const city = row.original.property_city;
        const state = row.original.property_state;
        const zip = row.original.property_zip;

        // Generate Google Street View static image if no property image
        const streetViewUrl = imageUrl || 
          `https://maps.googleapis.com/maps/api/streetview?size=100x100&location=${encodeURIComponent(
            `${address}, ${city}, ${state} ${zip}`
          )}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_KEY'}`;

        return (
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 rounded-md overflow-hidden bg-muted flex-shrink-0">
              {streetViewUrl && process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ? (
                <img
                  src={streetViewUrl}
                  alt={address}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center">
                  <Home className="h-6 w-6 text-muted-foreground" />
                </div>
              )}
            </div>
            <div className="min-w-0">
              <p className="font-medium truncate">{address}</p>
              <p className="text-sm text-muted-foreground truncate">
                {city}, {state} {zip}
              </p>
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: 'property_type',
      header: 'Type',
      cell: ({ row }) => (
        <Badge variant="outline">
          {getPropertyTypeDisplay(row.original.property_type)}
        </Badge>
      ),
    },
    {
      accessorKey: 'beds_baths',
      header: 'Beds/Baths',
      cell: ({ row }) => {
        const beds = row.original.bedrooms;
        const baths = row.original.bathrooms;
        return (
          <div className="text-sm">
            {beds || '-'} / {baths || '-'}
          </div>
        );
      },
    },
    {
      accessorKey: 'square_feet',
      header: 'Sq Ft',
      cell: ({ row }) => (
        <div className="text-sm">{formatNumber(row.original.square_feet)}</div>
      ),
    },
    {
      accessorKey: 'listing_price',
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="hover:bg-transparent p-0"
        >
          List Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="font-medium">{formatCurrency(row.original.listing_price)}</div>
      ),
    },
    {
      accessorKey: 'equity',
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="hover:bg-transparent p-0"
        >
          Equity
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="font-medium text-green-600">
          {formatCurrency(row.original.equity)}
        </div>
      ),
    },
    {
      accessorKey: 'remaining_balance',
      header: 'Balance',
      cell: ({ row }) => (
        <div className="text-sm">{formatCurrency(row.original.remaining_balance)}</div>
      ),
    },
    {
      accessorKey: 'open_loans',
      header: 'Loans',
      cell: ({ row }) => (
        <div className="text-sm">{row.original.open_loans || '-'}</div>
      ),
    },
    {
      accessorKey: 'created_at',
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="hover:bg-transparent p-0"
        >
          Created
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="text-sm text-muted-foreground">
          {formatDistanceToNow(new Date(row.original.created_at), { addSuffix: true })}
        </div>
      ),
    },
    {
      accessorKey: 'updated_at',
      header: 'Updated',
      cell: ({ row }) => (
        <div className="text-sm text-muted-foreground">
          {formatDistanceToNow(new Date(row.original.updated_at), { addSuffix: true })}
        </div>
      ),
    },
    {
      id: 'actions',
      cell: ({ row }) => {
        const lead = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              {onCallLead && lead.realtor_phone && (
                <DropdownMenuItem onClick={() => onCallLead(lead.id)}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call Agent
                </DropdownMenuItem>
              )}
              {onViewDetails && (
                <DropdownMenuItem onClick={() => onViewDetails(lead.id)}>
                  View Details
                </DropdownMenuItem>
              )}
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(lead.property_address)}
              >
                Copy Address
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const table = useReactTable({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
    initialState: {
      pagination: {
        pageSize: 25,
      },
    },
  });

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search leads..."
            value={globalFilter ?? ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="pl-9"
          />
        </div>
        <Badge variant="secondary">
          {table.getFilteredRowModel().rows.length} leads
        </Badge>
      </div>

      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No leads found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Page {table.getState().pagination.pageIndex + 1} of{' '}
          {table.getPageCount()}
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronsLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}