// app/auth/signin/page.tsx
import { signIn } from "next-auth/react"; // Client-side for v5

export default function SignIn() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-green-500 font-mono">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          await signIn("credentials", {
            username: formData.get("username"),
            password: formData.get("password"),
            redirect: true,
            callbackUrl: "/dashboard",
          });
        }}
        className="border border-green-500 p-8 rounded-lg shadow-lg shadow-green-500/50"
      >
        <h2 className="mb-4 text-2xl">Enter Wraelen HQ</h2>
        <input name="username" type="text" placeholder="Username" className="mb-2 block w-full bg-black border border-green-500 p-2" />
        <input name="password" type="password" placeholder="Password" className="mb-4 block w-full bg-black border border-green-500 p-2" />
        <button type="submit" className="w-full bg-green-500 text-black p-2 hover:bg-green-600">Login</button>
      </form>
    </div>
  );
}