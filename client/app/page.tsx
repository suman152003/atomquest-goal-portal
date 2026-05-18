import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold mb-6">
        AtomQuest Goal Portal
      </h1>

      <p className="text-slate-400 text-center max-w-xl mb-8">
        Enterprise Goal Management & Quarterly Performance Tracking System
      </p>

      <Link href="/login">
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl">
          Get Started
        </button>
      </Link>
    </main>
  );
}