"use client";

import Header from "@/components/Header";
import Link from "next/link";
import ProblemCard from "@/components/ProblemCard";
import { problemCategories } from "@/lib/data";

export default function AideathonProblemStatements() {

  // 🔥 Start Time: 27 Feb 2026 – 9:00 AM
  const startTime = new Date("2026-02-25T09:00:00");
  const now = new Date();
  const hasStarted = now >= startTime;

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-slate-100 text-black py-12 px-6">
      <Header />

      <nav className="w-full max-w-4xl mx-4 mb-8 flex items-center justify-between">
        <Link
          href="/"
          className="px-6 py-3 border-2 border-black rounded-lg bg-white text-black font-semibold shadow-[4px_4px_0px_black] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition"
        >
          ← Back to Home
        </Link>
      </nav>

      <div className="max-w-5xl w-full">

        <div className="border-4 border-black rounded-lg bg-white shadow-[6px_6px_0px_black] p-8 mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AIdeathon - Problem Statements
          </h2>

          <p className="text-lg text-gray-700 mb-2">
            🕒 Opens at: 25 Feb 2026 | 9:00 AM
          </p>

          {!hasStarted && (
            <p className="text-red-600 font-semibold text-lg mt-4">
              Event has not started yet.
            </p>
          )}
        </div>

        {/* Show Problems Only After 9 AM */}
        {hasStarted && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {problemCategories.map((category, idx) => (
                <div key={idx} className="flex flex-col gap-6">
                  <h3 className="text-2xl font-bold px-4 py-2 bg-slate-200 border-2 border-black rounded-md shadow-[3px_3px_0px_black] text-center">
                    {category.name}
                  </h3>
                  {category.problems.map((p, i) => (
                    <ProblemCard
                      key={i}
                      title={p.title}
                      description={p.description}
                      sdgs={p.tags}
                    />
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/aideathon-rulebook"
                className="px-6 py-3 border-2 border-black rounded-lg bg-blue-500 text-black font-semibold shadow-[5px_5px_0px_black] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition inline-block"
              >
                View AIdeathon Rules
              </Link>
            </div>
          </>
        )}

      </div>
    </div>
  );
}