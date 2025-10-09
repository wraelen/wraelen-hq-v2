// src/app/data/leads/page.tsx - Leads table with all schema columns
import { redirect } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import prisma from '@/lib/prisma';
import { createSupabaseServerClient } from '@/lib/supabaseServer';

async function getLeads(userId: string) {
  try {
    const leads = await prisma.leads.findMany({
      where: { assigned_to: userId },
      include: {
        properties: {
          select: {
            address: true,
            city: true,
            state: true,
            zip_code: true,
          },
        },
      },
      orderBy: { created_at: 'desc' },
      take: 100, // Limit for performance
    });
    return leads;
  } catch (error) {
    console.error('Error fetching leads:', error);
    return [];
  }
}

export default async function LeadsPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/auth/signin');
  }

  const leads = await getLeads(user.id);

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      new: 'bg-blue-500/10 text-blue-500',
      contacted: 'bg-yellow-500/10 text-yellow-500',
      appointment_set: 'bg-green-500/10 text-green-500',
      contract_signed: 'bg-purple-500/10 text-purple-500',
      closed: 'bg-emerald-500/10 text-emerald-500',
      disqualified: 'bg-red-500/10 text-red-500',
      follow_up: 'bg-orange-500/10 text-orange-500',
      no_answer: 'bg-gray-500/10 text-gray-500',
    };
    return colors[status] || 'bg-gray-500/10 text-gray-500';
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Leads</h2>
        <p className="text-muted-foreground">
          Manage your leads and track their status
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Leads ({leads.length})</CardTitle>
          <CardDescription>
            Your assigned leads with property information
          </CardDescription>
        </CardHeader>
        <CardContent>
          {leads.length > 0 ? (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Property</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Source</TableHead>
                    <TableHead className="text-right">Points</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leads.map((lead) => (
                    <TableRow key={lead.id}>
                      <TableCell className="font-medium">
                        {lead.first_name && lead.last_name
                          ? `${lead.first_name} ${lead.last_name}`
                          : lead.first_name || lead.last_name || 'N/A'}
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          {lead.properties.address}
                          <div className="text-muted-foreground text-xs">
                            {lead.properties.city}, {lead.properties.state}{' '}
                            {lead.properties.zip_code}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="capitalize">
                          {lead.lead_type || 'N/A'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          {lead.phone && (
                            <div className="text-muted-foreground">
                              📞 {lead.phone}
                            </div>
                          )}
                          {lead.email && (
                            <div className="text-muted-foreground text-xs">
                              ✉️ {lead.email}
                            </div>
                          )}
                          {!lead.phone && !lead.email && 'No contact'}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(lead.status)}>
                          {lead.status.replace('_', ' ')}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm capitalize text-muted-foreground">
                        {lead.source?.replace('_', ' ') || 'N/A'}
                      </TableCell>
                      <TableCell className="text-right font-medium text-[#00A0E9]">
                        +{lead.points_earned}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <p className="text-lg mb-2">No leads yet</p>
              <p className="text-sm">
                Import leads from the Extract page to get started
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}