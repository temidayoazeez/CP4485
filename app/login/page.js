"use client";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (!email || !password) {
        throw new Error("Please enter both email and password.");
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Login submitted", { email, password });
    } catch (err) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold mb-2">🔐 Login</h1>
      <p className="text-gray-500 mb-8">Sign in to continue</p>

      <form
        onSubmit={handleLogin}
        className="border border-gray-200 rounded-2xl p-8 shadow bg-white w-full max-w-md"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            placeholder="Enter your password"
          />
        </div>

        {error && (
          <div className="mb-4 border border-red-200 rounded-xl p-3 bg-red-50 text-red-600 text-sm">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-blue-500 font-medium hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}