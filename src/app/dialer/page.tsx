import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { Button } from '@/components/ui/button'; // Shadcn
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { dialLeadAction } from '@/lib/actions'; // Imported action
import prisma from '@/lib/prisma'; // Assuming exported client

export default async function DialerPage() {
  const cookieStore = cookies();
  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      getAll: () => cookieStore.getAll(),
      setAll: (cookiesToSet) => { try { cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options)); } catch {} },
    },
  });

  const { data: { session } } = await supabase.auth.getSession();
  if (!session?.user.id) {
    redirect('/auth/signin'); // Logic: Protect page (middleware handles, but extra guard)
  }

  const leads = await prisma.leads.findMany({
    where: { assigned_to: session.user.id },
    include: { properties: true }, // Logic: Fetch address etc. for display
    orderBy: { created_at: 'desc' }, // Recent first
  });

  return (
    <div className="p-8 bg-black text-green-400 font-mono">
      <h2 className="text-2xl mb-6">Dialer Quest: Call Leads</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Address</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads.map(lead => (
            <TableRow key={lead.id}>
              <TableCell>{lead.properties.address}</TableCell>
              <TableCell>{`${lead.first_name || ''} ${lead.last_name || ''}`.trim() || 'Unknown'}</TableCell>
              <TableCell>{lead.phone || 'No Phone'}</TableCell>
              <TableCell>
                {lead.phone && (
                  <form action={async () => { 'use server'; await dialLeadAction(lead.id); }}>
                    <Button type="submit" variant="outline">Dial</Button> {/* Logic: Triggers action – client sees success via revalidate? */}
                  </form>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}