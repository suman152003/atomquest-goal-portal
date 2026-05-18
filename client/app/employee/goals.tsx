"use client";

import { useState } from "react";

export default function GoalsForm({ onSuccess }: any) {
  const [title, setTitle] = useState("");
  const [target, setTarget] = useState("");
  const [weightage, setWeightage] = useState("");

  const handleSubmit = async () => {
    if (!title || !target || !weightage) {
      alert("Fill all fields");
      return;
    }

    const res = await fetch("/api/goals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        target,
        weightage: Number(weightage),
        uom: "Numeric",
        userId: "employee-1",
        status: "Pending",
      }),
    });

    if (res.ok) {
      alert("Goal Created ✅");

      setTitle("");
      setTarget("");
      setWeightage("");

      onSuccess(); // 🔥 refresh dashboard
    } else {
      alert("Error creating goal");
    }
  };

  return (
    <div className="bg-slate-900 p-6 rounded-xl mt-6">
      <h2 className="text-xl font-bold mb-4">Create Goal</h2>

      <input
        className="w-full p-2 mb-2 bg-slate-800 rounded"
        placeholder="Goal Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="w-full p-2 mb-2 bg-slate-800 rounded"
        placeholder="Target"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
      />

      <input
        className="w-full p-2 mb-2 bg-slate-800 rounded"
        placeholder="Weightage %"
        value={weightage}
        onChange={(e) => setWeightage(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="mt-3 bg-blue-600 px-5 py-2 rounded"
      >
        Submit Goal
      </button>
    </div>
  );
}