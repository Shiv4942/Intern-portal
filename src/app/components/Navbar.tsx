"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { isLoggedIn, logout } from "@/utils/auth";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (path: string) =>
    pathname === path
      ? "text-white bg-blue-600"
      : "text-gray-700 hover:text-blue-600";

  const handleLogout = () => {
    logout();
    router.replace("/login");
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow text-gray-900 sticky top-0 z-50">
      <div className="font-bold text-xl text-blue-600">Intern Portal</div>
      <div className="flex space-x-6">
        <Link href="/">
          <span className={`px-3 py-2 rounded ${isActive("/")}`}>Home</span>
        </Link>
        <Link href="/dashboard">
          <span className={`px-3 py-2 rounded ${isActive("/dashboard")}`}>
            Dashboard
          </span>
        </Link>
        <Link href="/leaderboard">
          <span className={`px-3 py-2 rounded ${isActive("/leaderboard")}`}>
            Leaderboard
          </span>
        </Link>
      </div>
      {isLoggedIn() && (
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      )}
    </nav>
  );
}
