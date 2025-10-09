// src/app/leads/page.tsx - Example usage (no toast dependency)
'use client';

import { Loader2, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { type LeadRow, LeadsDataTable } from '@/components/ui/LeadsDataTable';
import { 
  dialLeadAction, 
  getLeadsForTable, 
  updateLeadEmailAction,
  updateLeadNotesAction 
} from '@/lib/actions';

export default function LeadsPage() {
  const [leads, setLeads] = useState<LeadRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);
  const router = useRouter();

  useEffect(() => {
    loadLeads();
  }, []);

  // Auto-hide notification after 5 seconds
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const loadLeads = async () => {
    setLoading(true);
    try {
      const data = await getLeadsForTable();
      console.log('Loaded leads:', data); // Debug log
      setLeads(data || []); // Ensure it's always an array
    } catch (error) {
      console.error('Error loading leads:', error);
      setNotification({
        type: 'error',
        message: 'Failed to load leads',
      });
      setLeads([]); // Set empty array on error
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateEmail = async (leadId: string, email: string) => {
    const result = await updateLeadEmailAction(leadId, email);
    
    if ('error' in result) {
      setNotification({
        type: 'error',
        message: result.error,
      });
      throw new Error(result.error);
    }

    setNotification({
      type: 'success',
      message: result.message || 'Email updated successfully',
    });

    // Reload leads to show updated data
    await loadLeads();
  };

  const handleUpdateNotes = async (leadId: string, notes: string) => {
    const result = await updateLeadNotesAction(leadId, notes);
    
    if ('error' in result) {
      setNotification({
        type: 'error',
        message: result.error,
      });
      throw new Error(result.error);
    }

    setNotification({
      type: 'success',
      message: 'Notes updated successfully',
    });

    // Reload leads to show updated data
    await loadLeads();
  };

  const handleCallLead = async (leadId: string) => {
    const result = await dialLeadAction(leadId);
    
    if (!result.success) {
      setNotification({
        type: 'error',
        message: result.error || 'Failed to initiate call',
      });
      return;
    }

    setNotification({
      type: 'success',
      message: 'Call initiated! Check your phone.',
    });
  };

  const handleViewDetails = (leadId: string) => {
    router.push(`/leads/${leadId}`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader2 className="h-8 w-8 animate-spin text-[#00A0E9]" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Leads</h2>
        <p className="text-muted-foreground">
          Manage your imported leads and track progress
        </p>
      </div>

      {/* Notification */}
      {notification && (
        <Alert
          className={
            notification.type === 'success'
              ? 'border-green-500 bg-green-500/10'
              : 'border-red-500 bg-red-500/10'
          }
        >
          <AlertDescription
            className={
              notification.type === 'success' ? 'text-green-600' : 'text-red-600'
            }
          >
            {notification.message}
          </AlertDescription>
        </Alert>
      )}

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
            <Sparkles className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{leads.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Validated Emails</CardTitle>
            <Sparkles className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {leads.filter((l) => l.email_validated).length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">With Notes</CardTitle>
            <Sparkles className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {leads.filter((l) => l.call_notes).length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Data Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Leads</CardTitle>
          <CardDescription>
            Click on email or notes fields to add/edit information. Validated emails earn +20 XP!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LeadsDataTable
            data={leads}
            onUpdateEmail={handleUpdateEmail}
            onUpdateNotes={handleUpdateNotes}
            onCallLead={handleCallLead}
            onViewDetails={handleViewDetails}
          />
        </CardContent>
      </Card>
    </div>
  );
}