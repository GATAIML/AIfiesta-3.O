"use client";

import Header from "@/components/Header";
import { useRouter } from "next/navigation";

export default function LeaderboardPage() {
  const router = useRouter();

  // 🔥 Start Time: 27 Feb 2026 – 9:00 AM
  const startTime = new Date("2026-02-27T09:00:00");
  const now = new Date();
  const hasStarted = now >= startTime;

  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 text-black py-10 px-4">
      <div className="max-w-4xl w-full flex flex-col items-center">
        <Header />

        <div className="bg-white rounded-2xl shadow-[6px_6px_0px_black] border-4 border-black w-full mt-4">
          <div className="flex flex-col items-center py-6 border-b-4 border-black text-center">
            <h1 className="text-4xl font-extrabold mt-2">
              AIfiesta 3.0 Leaderboard
            </h1>

            {!hasStarted && (
              <p className="text-red-600 font-semibold mt-3">
                Leaderboard unlocks on 27 Feb 2026 at 9:00 AM
              </p>
            )}
          </div>

          {/* 🔥 Event Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-10 px-6 pb-10">
            {/* <button
              disabled={!hasStarted}
              onClick={() => router.push("/chatbotbattle-leaderboard")}
              className={`px-8 py-4 rounded-xl border-2 border-black font-bold text-lg transition-all 
                ${
                  hasStarted
                    ? "bg-white hover:bg-black hover:text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            >
              AIfiesta 3.0 – Chatbot Battle!
            </button> */}

            <button
              disabled={!hasStarted}
              onClick={() => router.push("/aideathon-leaderboard")}
              className={`px-8 py-4 rounded-xl border-2 border-black font-bold text-lg transition-all 
                ${
                  hasStarted
                    ? "bg-white hover:bg-black hover:text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            >
              AIfiesta 3.0 – AIdeathon!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}