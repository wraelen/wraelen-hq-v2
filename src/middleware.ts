// middleware.ts
import { auth } from "./app/api/auth/[...nextauth]/route"; // v5 import

export default auth((req) => {
  const { nextUrl } = req;
  if (!req.auth && nextUrl.pathname.startsWith("/dashboard")) {
    return Response.redirect(new URL("/auth/signin", nextUrl)); // Redirect unauth
  }
  // Role example: if (req.auth.user.role !== "ELITE" && nextUrl.pathname.startsWith("/elite-quests")) redirect to /upgrade
});

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"], // All routes
};