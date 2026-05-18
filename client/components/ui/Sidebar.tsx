"use client";

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-10">
        AtomQuest
      </h1>

      <div className="space-y-4">
        <a href="/employee" className="block p-3 rounded-xl bg-blue-600">
          Employee
        </a>

        <a href="/manager" className="block p-3 rounded-xl bg-slate-800">
          Manager
        </a>

        <a href="/admin" className="block p-3 rounded-xl bg-slate-800">
          Admin
        </a>
      </div>
    </div>
  );
}