// src/app/leads/[id]/page.tsx - Comprehensive Lead Details Page
'use client';

import { 
  ArrowLeft, 
  Calculator as CalcIcon, 
  Home, 
  Mail, 
  MapPin, 
  Phone, 
  User 
} from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalculatorModal } from '@/components/ui/CalculatorModal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { LeadRow } from '@/components/ui/LeadsDataTable';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { getLeadsForTable, saveCalculationAction } from '@/lib/actions';

export default function LeadDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const leadId = params.id as string;
  
  const [lead, setLead] = useState<LeadRow | null>(null);
  const [loading, setLoading] = useState(true);
  const [calculatorOpen, setCalculatorOpen] = useState(false);

  useEffect(() => {
    loadLead();
  }, [leadId]);

  const loadLead = async () => {
    setLoading(true);
    try {
      const leads = await getLeadsForTable();
      const foundLead = leads.find(l => l.id === leadId);
      setLead(foundLead || null);
    } catch (error) {
      console.error('Error loading lead:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveCalculation = async (data: any) => {
    try {
      await saveCalculationAction(leadId, data);
      setCalculatorOpen(false);
    } catch (error) {
      console.error('Failed to save calculation:', error);
    }
  };

  const formatCurrency = (value: number | null) => {
    if (!value) return 'N/A';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-muted-foreground">Loading lead details...</div>
      </div>
    );
  }

  if (!lead) {
    return (
      <div className="space-y-4">
        <Button variant="outline" onClick={() => router.push('/leads')}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Leads
        </Button>
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">Lead not found</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const fullAddress = `${lead.property_address}, ${lead.property_city}, ${lead.property_state} ${lead.property_zip}`;
  const agentName = lead.realtor_first_name && lead.realtor_last_name 
    ? `${lead.realtor_first_name} ${lead.realtor_last_name}`
    : lead.realtor_first_name || lead.realtor_last_name || 'No agent info';

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={() => router.push('/leads')}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Leads
        </Button>
        <Button onClick={() => setCalculatorOpen(true)}>
          <CalcIcon className="h-4 w-4 mr-2" />
          Open Calculator
        </Button>
      </div>

      {/* Property Overview */}
      <Card className="border-[#00A0E9]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Home className="h-5 w-5 text-[#00A0E9]" />
            Property Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Property Image */}
            <div className="space-y-4">
              <div className="relative w-full h-64 rounded-lg overflow-hidden bg-muted">
                {lead.property_image_url ? (
                  <img
                    src={lead.property_image_url}
                    alt={lead.property_address}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Home className="h-16 w-16 text-muted-foreground" />
                  </div>
                )}
              </div>
              
              {/* Address */}
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-semibold">{lead.property_address}</p>
                  <p className="text-sm text-muted-foreground">
                    {lead.property_city}, {lead.property_state} {lead.property_zip}
                  </p>
                </div>
              </div>
            </div>

            {/* Property Details */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Property Type</p>
                  <p className="font-semibold capitalize">
                    {lead.property_type?.replace('_', ' ') || 'N/A'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Bedrooms</p>
                  <p className="font-semibold">{lead.bedrooms || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Bathrooms</p>
                  <p className="font-semibold">{lead.bathrooms || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Square Feet</p>
                  <p className="font-semibold">
                    {lead.square_feet ? lead.square_feet.toLocaleString() : 'N/A'}
                  </p>
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Listing Price</p>
                  <p className="text-xl font-bold text-[#00A0E9]">
                    {formatCurrency(lead.listing_price)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Equity</p>
                  <p className="text-xl font-bold text-green-600">
                    {formatCurrency(lead.equity)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Loan Balance</p>
                  <p className="text-xl font-bold text-orange-600">
                    {formatCurrency(lead.remaining_balance)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Days on Market</p>
                  <p className="text-xl font-bold">
                    {lead.days_on_market || 'N/A'}
                  </p>
                </div>
              </div>

              {lead.remaining_balance === 0 && (
                <Badge className="bg-green-500/10 text-green-500 border-green-500">
                  💰 Paid Off Property
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Agent/Realtor Info */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Agent Information
            </CardTitle>
            <CardDescription>Listing agent contact details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Agent Name</p>
              <p className="font-semibold">{agentName}</p>
            </div>

            {lead.realtor_phone && (
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a
                  href={`tel:${lead.realtor_phone}`}
                  className="text-[#00A0E9] hover:underline"
                >
                  {lead.realtor_phone}
                </a>
              </div>
            )}

            {lead.realtor_email && (
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a
                  href={`mailto:${lead.realtor_email}`}
                  className="text-[#00A0E9] hover:underline"
                >
                  {lead.realtor_email}
                </a>
                {lead.email_validated && (
                  <Badge className="bg-green-500/10 text-green-500">
                    Validated ✓
                  </Badge>
                )}
              </div>
            )}

            {!lead.realtor_phone && !lead.realtor_email && (
              <p className="text-sm text-muted-foreground italic">
                No contact information available
              </p>
            )}
          </CardContent>
        </Card>

        {/* Lead Status */}
        <Card>
          <CardHeader>
            <CardTitle>Lead Status</CardTitle>
            <CardDescription>Current status and notes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Status</p>
              <Badge className="capitalize mt-1">
                {lead.status.replace('_', ' ')}
              </Badge>
            </div>

            {lead.call_notes && (
              <div>
                <p className="text-sm text-muted-foreground mb-1">Call Notes</p>
                <p className="text-sm bg-muted p-3 rounded-md">
                  {lead.call_notes}
                </p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div>
                <p className="text-sm text-muted-foreground">Created</p>
                <p className="text-sm font-medium">
                  {new Date(lead.created_at).toLocaleDateString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Last Updated</p>
                <p className="text-sm font-medium">
                  {new Date(lead.updated_at).toLocaleDateString()}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Call History */}
      <Card>
        <CardHeader>
          <CardTitle>Call History</CardTitle>
          <CardDescription>
            All call activity for this lead
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-muted-foreground">
            <Phone className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg mb-2">No call history yet</p>
            <p className="text-sm">
              Calls made to this lead will appear here
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Calculator Modal */}
      <CalculatorModal
        open={calculatorOpen}
        onClose={() => setCalculatorOpen(false)}
        leadId={leadId}
        initialData={{
          propertyAddress: fullAddress,
          listingPrice: lead.listing_price || 0,
          equity: lead.equity || 0,
          loanBalance: lead.remaining_balance || 0,
        }}
        onSave={handleSaveCalculation}
      />
    </div>
  );
}