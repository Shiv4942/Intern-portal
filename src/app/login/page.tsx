"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { login, isLoggedIn } from "@/utils/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn()) {
      router.replace("/dashboard");
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    router.replace("/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 via-white to-green-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm flex flex-col gap-4 text-gray-900"
      >
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-4">
          Login
        </h2>
        <input
          type="email"
          placeholder="Email"
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-900"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-900"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
}