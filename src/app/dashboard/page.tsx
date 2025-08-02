"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
type UserData = {
  name: string;
  referralCode: string;
  totalDonations: number;
  // add other fields as needed
};

async function getUserData() {
  const res = await fetch("http://localhost:3000/api/user")
  return res.json()
}

export default function DashboardPage() {
  const [data, setData] = useState<UserData | null>(null);
  const router = useRouter();

  useEffect(() => {
    getUserData().then(setData);
  }, []);

  const handleLeaderboardClick = () => {
    router.push('/leaderboard');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 text-gray-900">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">Welcome, {data?.name || "John Doe"}</h1>
      <p className="text-lg mb-2">Referral Code: <span className="font-mono">{data?.referralCode || "johndoe2025"}</span></p>
      <p className="text-lg mb-4">Total Donations Raised: <span className="text-green-600 font-bold">${data?.totalDonations || 500}</span></p>

      <div className="mt-8 w-full max-w-md bg-white shadow rounded p-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-900">Rewards / Unlockables</h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-900">
          <li>Raised $100: Free Internship T-shirt</li>
          <li>Raised $250: Certificate of Recognition</li>
          <li>Raised $500: Internship Extension Offer</li>
        </ul>
      </div>

      <button
        onClick={handleLeaderboardClick}
        className="mt-10 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        View Leaderboard
      </button>
    </div>
  );
}
