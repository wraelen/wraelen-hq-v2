// src/app/page.tsx – Root page (server-side; best practice: Redirect to dashboard – middleware handles auth check; no-brainer for gamified internal app, avoids starter bloat)
import { redirect } from 'next/navigation';  // Logic: Server redirect (efficient – no client render; ties into middleware for session guard)

export default function Home() {
  redirect('/dashboard');  // Logic: Auto-forward to HQ core (e.g., quests/levels – scalable; if no session, middleware bounces to signin without loading this)
}