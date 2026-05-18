"use client";

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function AdminPage() {
  const [goals, setGoals] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/goals")
      .then((res) => res.json())
      .then(setGoals);
  }, []);

  const approved = goals.filter((g) => g.status === "Approved").length;
  const rejected = goals.filter((g) => g.status === "Rejected").length;
  const pending = goals.filter(
    (g) => !g.status || g.status === "Pending"
  ).length;

  const data = [
    { name: "Approved", value: approved },
    { name: "Rejected", value: rejected },
    { name: "Pending", value: pending },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        Admin Analytics Dashboard
      </h1>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-6 mb-10">
        <div className="bg-slate-900 p-6 rounded-2xl">
          <h2>Total Goals</h2>
          <p className="text-3xl font-bold">{goals.length}</p>
        </div>

        <div className="bg-green-900 p-6 rounded-2xl">
          <h2>Approved</h2>
          <p className="text-3xl font-bold">{approved}</p>
        </div>

        <div className="bg-red-900 p-6 rounded-2xl">
          <h2>Rejected</h2>
          <p className="text-3xl font-bold">{rejected}</p>
        </div>
      </div>

      {/* CHART */}
      <div className="bg-slate-900 p-6 rounded-2xl">
        <h2 className="text-xl mb-4 font-bold">
          Goal Status Overview
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}