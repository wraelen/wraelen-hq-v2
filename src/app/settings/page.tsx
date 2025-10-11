// src/app/settings/page.tsx - Settings Page
'use client';

import { Bell, Key, Palette, Shield, User, Zap } from 'lucide-react';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    questComplete: true,
    badgeUnlock: true,
    leaderboardUpdate: false,
  });

  const [preferences, setPreferences] = useState({
    darkMode: true,
    autoDialer: false,
    showStreetView: true,
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>

      {/* Profile Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Profile
          </CardTitle>
          <CardDescription>
            Update your profile information and contact details
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Doe" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@example.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="(555) 123-4567" />
          </div>

          <Button className="mt-4">Save Profile</Button>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notifications
          </CardTitle>
          <CardDescription>
            Choose what notifications you want to receive
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Email Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Receive notifications via email
              </p>
            </div>
            <Switch
              checked={notifications.email}
              onCheckedChange={(checked) => 
                setNotifications({ ...notifications, email: checked })
              }
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Push Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Receive push notifications in browser
              </p>
            </div>
            <Switch
              checked={notifications.push}
              onCheckedChange={(checked) => 
                setNotifications({ ...notifications, push: checked })
              }
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Quest Completions</Label>
              <p className="text-sm text-muted-foreground">
                Get notified when you complete quests
              </p>
            </div>
            <Switch
              checked={notifications.questComplete}
              onCheckedChange={(checked) => 
                setNotifications({ ...notifications, questComplete: checked })
              }
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Badge Unlocks</Label>
              <p className="text-sm text-muted-foreground">
                Get notified when you unlock new badges
              </p>
            </div>
            <Switch
              checked={notifications.badgeUnlock}
              onCheckedChange={(checked) => 
                setNotifications({ ...notifications, badgeUnlock: checked })
              }
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Leaderboard Updates</Label>
              <p className="text-sm text-muted-foreground">
                Get notified about leaderboard changes
              </p>
            </div>
            <Switch
              checked={notifications.leaderboardUpdate}
              onCheckedChange={(checked) => 
                setNotifications({ ...notifications, leaderboardUpdate: checked })
              }
            />
          </div>
        </CardContent>
      </Card>

      {/* Preferences */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="h-5 w-5" />
            Preferences
          </CardTitle>
          <CardDescription>
            Customize your Wraelen HQ experience
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Dark Mode</Label>
              <p className="text-sm text-muted-foreground">
                Use dark theme (currently active)
              </p>
            </div>
            <Switch
              checked={preferences.darkMode}
              onCheckedChange={(checked) => 
                setPreferences({ ...preferences, darkMode: checked })
              }
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Auto-Dialer</Label>
              <p className="text-sm text-muted-foreground">
                Automatically dial next lead after call ends
              </p>
            </div>
            <Switch
              checked={preferences.autoDialer}
              onCheckedChange={(checked) => 
                setPreferences({ ...preferences, autoDialer: checked })
              }
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Show Street View</Label>
              <p className="text-sm text-muted-foreground">
                Display Google Street View images for properties
              </p>
            </div>
            <Switch
              checked={preferences.showStreetView}
              onCheckedChange={(checked) => 
                setPreferences({ ...preferences, showStreetView: checked })
              }
            />
          </div>
        </CardContent>
      </Card>

      {/* API Integrations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Integrations
          </CardTitle>
          <CardDescription>
            Manage third-party integrations and API keys
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-semibold">Twilio</p>
                <p className="text-sm text-muted-foreground">
                  Calling and SMS functionality
                </p>
              </div>
              <Badge className="bg-green-500/10 text-green-500">
                Connected ✓
              </Badge>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-semibold">RapidAPI (Realtor.com)</p>
                <p className="text-sm text-muted-foreground">
                  Property data enrichment
                </p>
              </div>
              <Badge className="bg-green-500/10 text-green-500">
                Connected ✓
              </Badge>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-semibold">Google Maps API</p>
                <p className="text-sm text-muted-foreground">
                  Street View images and geocoding
                </p>
              </div>
              <Badge className="bg-green-500/10 text-green-500">
                Connected ✓
              </Badge>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg opacity-50">
              <div>
                <p className="font-semibold">Email Validation API</p>
                <p className="text-sm text-muted-foreground">
                  Verify email addresses (Coming Soon)
                </p>
              </div>
              <Badge variant="outline">Not Connected</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Security
          </CardTitle>
          <CardDescription>
            Manage your password and security settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="currentPassword">Current Password</Label>
            <Input id="currentPassword" type="password" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="newPassword">New Password</Label>
            <Input id="newPassword" type="password" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <Input id="confirmPassword" type="password" />
          </div>

          <Button variant="outline" className="mt-4">
            <Key className="h-4 w-4 mr-2" />
            Change Password
          </Button>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-red-500/50">
        <CardHeader>
          <CardTitle className="text-red-500">Danger Zone</CardTitle>
          <CardDescription>
            Irreversible actions - proceed with caution
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-red-500/50 rounded-lg">
            <div>
              <p className="font-semibold">Reset All Data</p>
              <p className="text-sm text-muted-foreground">
                Delete all leads, properties, and call history
              </p>
            </div>
            <Button variant="destructive" disabled>
              Reset Data
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 border border-red-500/50 rounded-lg">
            <div>
              <p className="font-semibold">Delete Account</p>
              <p className="text-sm text-muted-foreground">
                Permanently delete your account and all data
              </p>
            </div>
            <Button variant="destructive" disabled>
              Delete Account
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}