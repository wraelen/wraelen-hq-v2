// src/components/ui/LeadsDataTable.tsx - Added manual listing price entry
'use client';

import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { formatDistanceToNow } from 'date-fns';
import {
  ArrowUpDown,
  Calculator as CalcIcon,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  DollarSign,
  Home,
  Loader2,
  Mail,
  MoreHorizontal,
  Phone,
  Search,
  User,
} from 'lucide-react';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export type LeadRow = {
  id: string;
  realtor_first_name: string | null;
  realtor_last_name: string | null;
  realtor_phone: string | null;
  realtor_email: string | null;
  email_validated: boolean;
  call_notes: string | null;
  status: string;
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
  days_on_market: number | null;
  created_at: Date;
  updated_at: Date;
};

interface LeadsDataTableProps {
  data: LeadRow[];
  onUpdateAgent?: (leadId: string, firstName: string, lastName: string, phone: string) => Promise<void>;
  onUpdateEmail?: (leadId: string, email: string) => Promise<void>;
  onUpdateNotes?: (leadId: string, notes: string) => Promise<void>;
  onUpdateListingPrice?: (leadId: string, price: number) => Promise<void>;
  onCallLead?: (leadId: string) => void;
  onViewDetails?: (leadId: string) => void;
  onOpenCalculator?: (leadId: string) => void;
}

export function LeadsDataTable({
  data = [],
  onUpdateAgent,
  onUpdateEmail,
  onUpdateNotes,
  onUpdateListingPrice,
  onCallLead,
  onViewDetails,
  onOpenCalculator,
}: LeadsDataTableProps) {
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'created_at', desc: true }
  ]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  
  const [editingAgent, setEditingAgent] = useState<string | null>(null);
  const [editingEmail, setEditingEmail] = useState<string | null>(null);
  const [editingNotes, setEditingNotes] = useState<string | null>(null);
  const [editingPrice, setEditingPrice] = useState<string | null>(null);
  
  const [tempFirstName, setTempFirstName] = useState('');
  const [tempLastName, setTempLastName] = useState('');
  const [tempPhone, setTempPhone] = useState('');
  const [tempEmail, setTempEmail] = useState('');
  const [tempNotes, setTempNotes] = useState('');
  const [tempPrice, setTempPrice] = useState('');
  
  const [savingAgent, setSavingAgent] = useState(false);
  const [savingEmail, setSavingEmail] = useState(false);
  const [savingNotes, setSavingNotes] = useState(false);
  const [savingPrice, setSavingPrice] = useState(false);

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

  const handleAgentSave = async (leadId: string) => {
    if (!onUpdateAgent || !tempFirstName || !tempPhone) return;
    
    setSavingAgent(true);
    try {
      await onUpdateAgent(leadId, tempFirstName, tempLastName, tempPhone);
      setEditingAgent(null);
      setTempFirstName('');
      setTempLastName('');
      setTempPhone('');
    } catch (error) {
      console.error('Failed to update agent:', error);
    } finally {
      setSavingAgent(false);
    }
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
    } finally {
      setSavingNotes(false);
    }
  };

  const handlePriceSave = async (leadId: string) => {
    if (!onUpdateListingPrice || !tempPrice) return;
    
    setSavingPrice(true);
    try {
      // Convert to number and multiply by 1000
      const numericPrice = parseFloat(tempPrice.replace(/[^0-9.]/g, ''));
      if (isNaN(numericPrice)) {
        throw new Error('Invalid price');
      }
      
      const finalPrice = numericPrice * 1000;
      await onUpdateListingPrice(leadId, finalPrice);
      setEditingPrice(null);
      setTempPrice('');
    } catch (error) {
      console.error('Failed to update price:', error);
    } finally {
      setSavingPrice(false);
    }
  };

  const columns: ColumnDef<LeadRow>[] = [
    {
      accessorKey: 'property_address',
      header: 'Property',
      cell: ({ row }) => {
        const imageUrl = row.original.property_image_url;
        const address = row.original.property_address;
        const city = row.original.property_city;
        const state = row.original.property_state;
        const zip = row.original.property_zip;

        const streetViewUrl = imageUrl || 
          `https://maps.googleapis.com/maps/api/streetview?size=100x100&location=${encodeURIComponent(
            `${address}, ${city}, ${state} ${zip}`
          )}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}`;

        return (
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 rounded-md overflow-hidden bg-muted flex-shrink-0">
              {(imageUrl || process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) ? (
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
      accessorKey: 'agent_info',
      header: 'Agent Info',
      cell: ({ row }) => {
        const leadId = row.original.id;
        const firstName = row.original.realtor_first_name;
        const lastName = row.original.realtor_last_name;
        const phone = row.original.realtor_phone;
        const isEditing = editingAgent === leadId;

        if (isEditing) {
          return (
            <div className="space-y-2">
              <div className="flex gap-2">
                <Input
                  placeholder="First name"
                  value={tempFirstName}
                  onChange={(e) => setTempFirstName(e.target.value)}
                  className="h-8"
                  autoFocus
                  disabled={savingAgent}
                />
                <Input
                  placeholder="Last name"
                  value={tempLastName}
                  onChange={(e) => setTempLastName(e.target.value)}
                  className="h-8"
                  disabled={savingAgent}
                />
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Phone (555-1234)"
                  value={tempPhone}
                  onChange={(e) => setTempPhone(e.target.value)}
                  className="h-8"
                  disabled={savingAgent}
                />
                <Button
                  size="sm"
                  onClick={() => handleAgentSave(leadId)}
                  disabled={!tempFirstName || !tempPhone || savingAgent}
                >
                  {savingAgent ? <Loader2 className="h-3 w-3 animate-spin" /> : 'Save'}
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    setEditingAgent(null);
                    setTempFirstName('');
                    setTempLastName('');
                    setTempPhone('');
                  }}
                  disabled={savingAgent}
                >
                  Cancel
                </Button>
              </div>
            </div>
          );
        }

        const fullName = `${firstName || ''} ${lastName || ''}`.trim();
        
        return (
          <div className="space-y-1">
            {fullName ? (
              <>
                <div className="font-medium flex items-center gap-1">
                  <User className="h-3 w-3" />
                  {fullName}
                </div>
                {phone && (
                  <a
                    href={`tel:${phone}`}
                    className="text-sm text-[#00A0E9] hover:underline flex items-center gap-1"
                  >
                    <Phone className="h-3 w-3" />
                    {phone}
                  </a>
                )}
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    setEditingAgent(leadId);
                    setTempFirstName(firstName || '');
                    setTempLastName(lastName || '');
                    setTempPhone(phone || '');
                  }}
                  className="h-6 text-xs"
                >
                  Edit
                </Button>
              </>
            ) : (
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  setEditingAgent(leadId);
                  setTempFirstName('');
                  setTempLastName('');
                  setTempPhone('');
                }}
              >
                + Add Agent Info
              </Button>
            )}
          </div>
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
      cell: ({ row }) => {
        const leadId = row.original.id;
        const price = row.original.listing_price;
        const isEditing = editingPrice === leadId;

        if (isEditing) {
          return (
            <div className="flex items-center gap-2">
              <div className="relative">
                <DollarSign className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  value={tempPrice}
                  onChange={(e) => setTempPrice(e.target.value)}
                  placeholder="300 (= $300k)"
                  className="h-8 w-32 pl-7"
                  autoFocus
                  disabled={savingPrice}
                />
              </div>
              <span className="text-xs text-muted-foreground">× 1k</span>
              <Button
                size="sm"
                onClick={() => handlePriceSave(leadId)}
                disabled={!tempPrice || savingPrice}
              >
                {savingPrice ? (
                  <Loader2 className="h-3 w-3 animate-spin" />
                ) : (
                  'Save'
                )}
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => {
                  setEditingPrice(null);
                  setTempPrice('');
                }}
                disabled={savingPrice}
              >
                Cancel
              </Button>
            </div>
          );
        }

        return (
          <div 
            className="font-medium cursor-pointer hover:text-[#00A0E9]"
            onClick={() => {
              setEditingPrice(leadId);
              setTempPrice(price ? String(price / 1000) : '');
            }}
            title="Click to edit"
          >
            {price ? (
              formatCurrency(price)
            ) : (
              <span className="text-muted-foreground italic">+ Add price</span>
            )}
          </div>
        );
      },
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
      header: 'Loan Balance',
      cell: ({ row }) => {
        const balance = row.original.remaining_balance;
        return (
          <div className="text-sm">
            {balance && balance > 0 ? (
              <span className="text-orange-600">{formatCurrency(balance)}</span>
            ) : (
              <Badge className="bg-green-500/10 text-green-500">Paid Off ✓</Badge>
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
                placeholder="Call notes..."
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
              {onOpenCalculator && (
                <DropdownMenuItem onClick={() => onOpenCalculator(lead.id)}>
                  <CalcIcon className="mr-2 h-4 w-4" />
                  Open Calculator
                </DropdownMenuItem>
              )}
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
    globalFilterFn: (row, columnId, filterValue) => {
      const searchValue = filterValue.toLowerCase();
      const agentName = `${row.original.realtor_first_name || ''} ${row.original.realtor_last_name || ''}`.toLowerCase();
      const address = row.original.property_address.toLowerCase();
      
      return agentName.includes(searchValue) || address.includes(searchValue);
    },
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

  const paidOffCount = data.filter(l => !l.remaining_balance || l.remaining_balance === 0).length;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 flex-wrap">
        <div className="relative flex-1 min-w-[200px] max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by agent name or address..."
            value={globalFilter ?? ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="pl-9"
          />
        </div>
        
        <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
          Total: {table.getFilteredRowModel().rows.length}
        </Badge>
        
        <Badge 
          variant="outline" 
          className="cursor-pointer hover:bg-green-500/10 text-green-600 border-green-600"
        >
          💰 Paid Off: {paidOffCount}
        </Badge>
      </div>

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