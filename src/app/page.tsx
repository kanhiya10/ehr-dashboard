// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen space-y-6">
      <h1 className="text-3xl font-bold">Welcome to EHR Dashboard</h1>
      <Link
        href="/login"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Go to Login
      </Link>

      <Link
        href="/dashboard"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Visit DashBoard
      </Link>

    </main>
  );
}
