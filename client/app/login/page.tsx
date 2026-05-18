"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const lowerEmail = email.toLowerCase();

      if (lowerEmail.includes("admin")) {
        router.push("/admin");
      } else if (lowerEmail.includes("manager")) {
        router.push("/manager");
      } else if (lowerEmail.includes("employee")) {
        router.push("/employee");
      } else {
        alert("Invalid role email. Use admin/manager/employee");
      }

      setLoading(false);
    }, 800);
  };

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="bg-slate-900 border border-slate-800 p-10 rounded-3xl w-full max-w-md shadow-2xl">
        <h1 className="text-4xl font-bold text-white text-center mb-2">
          Welcome Back
        </h1>

        <p className="text-slate-400 text-center mb-8">
          Login to AtomQuest Goal Portal
        </p>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Enter email"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-white outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter password"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-white outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition rounded-xl p-4 font-semibold text-white disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>

        <div className="mt-8 text-center text-slate-500 text-sm">
          Demo Accounts:
          <br />
          admin@test.com
          <br />
          manager@test.com
          <br />
          employee@test.com
        </div>
      </div>
    </main>
  );
}