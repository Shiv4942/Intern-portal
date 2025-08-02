import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    name: 'Shivendra Gaikwad',
    referralCode: 'shivendra2025',
    totalDonations: 1200,
    rewards: ['T-Shirt', 'Certificate', 'LOR'],
  });
}
