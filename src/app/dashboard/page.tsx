// app/dashboard/page.tsx
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <p>Access Denied</p>; // Middleware redirects, but fallback

  return (
    <div className="p-4 bg-black text-green-500 font-mono">
      <h1>Welcome, {session.user.username}! Role: {session.user.role}</h1>
      <p>Points: {session.user.points} | Badges: {session.user.badges?.join(", ") || "None yet"}</p>
      {/* TODO: Quest board, leaderboards – e.g., fetch via Prisma in server component */}
    </div>
  );
}