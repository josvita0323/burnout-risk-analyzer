"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Left Side Logo / Title */}
        <h1 className="text-xl font-bold text-slate-800">
          Focus & Mood
        </h1>

        {/* Right Side Buttons */}
        <div className="flex gap-6 font-semibold">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Dashboard
          </Link>
          <Link href="/log-work" className="hover:text-blue-600 transition-colors">
            Log Work
          </Link>
          <Link href="/log-stress" className="hover:text-blue-600 transition-colors">
            Log Stress
          </Link>
          <Link href="/insights" className="hover:text-blue-600 transition-colors">
            Insights
          </Link>
        </div>
      </div>
    </nav>
  );
}