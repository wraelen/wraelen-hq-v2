// src/app/settings/page.tsx - Server Component with Real Data
import { redirect } from 'next/navigation';
import { SettingsForm } from '@/components/ui/SettingsForm';
import { getUserSettings } from '@/lib/actions.ts';
import { createSupabaseServerClient } from '@/lib/supabaseServer';

export default async function SettingsPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/auth/signin');
  }

  const settings = await getUserSettings();

  if (!settings) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Unable to load settings. Please try again.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>

      <SettingsForm initialSettings={settings} />
    </div>
  );
}