"use client";
import { useEffect, useState } from "react";

async function getLeaderboard() {
  const res = await fetch("http://localhost:3000/api/leaderboard");
  return res.json();
}

export default function LeaderboardPage() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    getLeaderboard().then(setUsers);
  }, []);

  return (
    <div className="p-10 max-w-3xl mx-auto bg-white rounded-lg shadow-md mt-10 text-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">📊 Leaderboard</h1>
      <ul className="space-y-3">
        {users.map((user: any, index: number) => (
          <li key={index} className="flex justify-between text-gray-900">
            <span>
              {index + 1}. {user.name}
            </span>
            <span>₹{user.totalDonations ?? user.amountRaised}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
