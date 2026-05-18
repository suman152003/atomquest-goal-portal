"use client";

import { useEffect, useState } from "react";
import Sidebar from "../../components/ui/Sidebar";
import GoalsForm from "./goals";

export default function EmployeeDashboard() {
  const [goals, setGoals] = useState<any[]>([]);

  // 🔥 FETCH FUNCTION
  const fetchGoals = async () => {
    const res = await fetch("/api/goals");
    const data = await res.json();
    setGoals(data);
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  return (
    <div className="flex bg-slate-950 text-white min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold">
              Employee Dashboard
            </h1>
            <p className="text-slate-400 mt-2">
              Track your goals and quarterly achievements
            </p>
          </div>

          <button className="bg-blue-600 px-5 py-3 rounded-xl font-semibold">
            + Create Goal
          </button>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          <div className="bg-slate-900 p-6 rounded-2xl">
            <h2>Total Goals</h2>
            <p className="text-3xl font-bold">{goals.length}</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h2>Completed</h2>
            <p className="text-3xl font-bold text-green-400">0</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h2>Pending Review</h2>
            <p className="text-3xl font-bold text-yellow-400">0</p>
          </div>
        </div>

        {/* GOALS LIST */}
        <div className="bg-slate-900 p-6 rounded-2xl">
          <h2 className="text-xl font-bold mb-4">Active Goals</h2>

          {goals.length === 0 ? (
            <p className="text-slate-400">
              No goals found. Create your first goal.
            </p>
          ) : (
            goals.map((g) => (
              <div
                key={g.id}
                className="bg-slate-800 p-4 rounded-xl mb-3"
              >
                <h3 className="font-bold">{g.title}</h3>
                <p className="text-slate-400">
                  Target: {g.target}
                </p>
                <p className="text-slate-400">
                  Weightage: {g.weightage}%
                </p>
              </div>
            ))
          )}
        </div>

        {/* FORM */}
        <GoalsForm onSuccess={fetchGoals} />
      </main>
    </div>
  );
}