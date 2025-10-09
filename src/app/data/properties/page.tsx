// src/app/data/properties/page.tsx - Properties table with financial metrics
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

async function getProperties(userId: string) {
  try {
    // Get properties from leads assigned to user
    const properties = await prisma.properties.findMany({
      where: {
        leads: {
          some: {
            assigned_to: userId,
          },
        },
      },
      include: {
        leads: {
          where: { assigned_to: userId },
          select: {
            status: true,
          },
        },
      },
      orderBy: { created_at: 'desc' },
      take: 100,
    });
    return properties;
  } catch (error) {
    console.error('Error fetching properties:', error);
    return [];
  }
}

export default async function PropertiesPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/auth/signin');
  }

  const properties = await getProperties(user.id);

  const formatCurrency = (value: number | null) => {
    if (!value) return 'N/A';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(value);
  };

  const formatPercent = (value: number | null) => {
    if (!value) return 'N/A';
    return `${value.toFixed(1)}%`;
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Properties</h2>
        <p className="text-muted-foreground">
          Property data with financial metrics
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Properties ({properties.length})</CardTitle>
          <CardDescription>
            Properties from your imported leads
          </CardDescription>
        </CardHeader>
        <CardContent>
          {properties.length > 0 ? (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Address</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Beds/Baths</TableHead>
                    <TableHead>Sq Ft</TableHead>
                    <TableHead>AVM</TableHead>
                    <TableHead>Equity</TableHead>
                    <TableHead>LTV</TableHead>
                    <TableHead>Owner Occ.</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {properties.map((property) => (
                    <TableRow key={property.id}>
                      <TableCell className="font-medium">
                        <div className="text-sm">
                          {property.address}
                          <div className="text-muted-foreground text-xs">
                            {property.city}, {property.state}{' '}
                            {property.zip_code}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="capitalize">
                          {property.property_type?.replace('_', ' ') || 'N/A'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm">
                        {property.bedrooms || 0} / {property.bathrooms || 0}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {property.square_feet
                          ? property.square_feet.toLocaleString()
                          : 'N/A'}
                      </TableCell>
                      <TableCell className="font-medium">
                        {formatCurrency(property.avm)}
                      </TableCell>
                      <TableCell className="font-medium text-green-500">
                        {formatCurrency(property.equity)}
                      </TableCell>
                      <TableCell className="text-sm">
                        {formatPercent(property.loan_to_value)}
                      </TableCell>
                      <TableCell>
                        {property.owner_occupied === true ? (
                          <Badge className="bg-blue-500/10 text-blue-500">
                            Yes
                          </Badge>
                        ) : property.owner_occupied === false ? (
                          <Badge className="bg-gray-500/10 text-gray-500">
                            No
                          </Badge>
                        ) : (
                          <span className="text-muted-foreground text-sm">
                            Unknown
                          </span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <p className="text-lg mb-2">No properties yet</p>
              <p className="text-sm">
                Import leads to see property data here
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}