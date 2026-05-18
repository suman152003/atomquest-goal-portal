"use client";

import { useEffect, useState } from "react";

export default function ManagerPage() {
  const [goals, setGoals] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/goals")
      .then((res) => res.json())
      .then((data) => setGoals(data))
      .catch((err) => console.log(err));
  }, []);

  const updateStatus = async (id: string, status: string) => {
    try {
      await fetch("/api/goals", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, status }),
      });

      // refresh data
      setGoals((prev) =>
        prev.map((g) =>
          g.id === id ? { ...g, status } : g
        )
      );
    } catch (error) {
      alert("Error updating status");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        Manager Dashboard
      </h1>

      {goals.length === 0 ? (
        <p className="text-slate-400">
          No goals available
        </p>
      ) : (
        <div className="space-y-5">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className="bg-slate-900 p-6 rounded-2xl border border-slate-800"
            >
              <h2 className="text-2xl font-bold">
                {goal.title}
              </h2>

              <p className="text-slate-400 mt-1">
                Target: {goal.target}
              </p>

              <p className="text-slate-400 mt-1">
                Weightage: {goal.weightage}%
              </p>

              <p className="mt-2">
                Status:{" "}
                <span className="font-semibold text-yellow-400">
                  {goal.status}
                </span>
              </p>

              <div className="flex gap-3 mt-5">
                <button
                  onClick={() =>
                    updateStatus(goal.id, "Approved")
                  }
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-xl"
                >
                  Approve
                </button>

                <button
                  onClick={() =>
                    updateStatus(goal.id, "Rejected")
                  }
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}