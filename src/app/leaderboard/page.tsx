"use client";
import { useEffect, useState } from "react";

// Define a type for leaderboard users
type LeaderboardUser = {
  name: string;
  totalDonations?: number;
  amountRaised?: number;
  // add other fields as needed
};

async function getLeaderboard() {
  const res = await fetch("/api/board");
  return res.json();
}

export default function LeaderboardPage() {
  // Replace useState<any[]>([]) with useState<LeaderboardUser[]>([])
  const [users, setUsers] = useState<LeaderboardUser[]>([]);

  useEffect(() => {
    getLeaderboard().then(setUsers);
  }, []);

  return (
    <div className="p-10 max-w-3xl mx-auto bg-white rounded-lg shadow-md mt-10 text-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">📊 Leaderboard</h1>
      <ul className="space-y-3">
        {users.map((user: LeaderboardUser, index: number) => (
          <li key={index} className="flex justify-between text-gray-900">
            <span>
              {index + 1}. {user.name}
            </span>
            <span>₹{user.totalDonations}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
