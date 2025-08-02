import { NextResponse } from 'next/server';

export async function GET() {
  // Mock leaderboard data with Indian names
  const data = [
    { name: 'Amit Sharma', totalDonations: 7000 },
    { name: 'Priya Singh', totalDonations: 6500 },
    { name: 'Rahul Verma', totalDonations: 4800 },
    { name: 'Sneha Patel', totalDonations: 4200 },
    { name: 'Vikram Rao', totalDonations: 3900 },
    { name: 'Anjali Mehta', totalDonations: 3500 },
  ];
  return NextResponse.json(data);
}
