"use client";

import Header from "@/components/Header";
import { useEffect, useState } from "react";

type Team = {
  rank: number;
  team: string;
  score: number;
  category: string;
};

export default function LeaderboardPage() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔥 Release Date: 27 Feb 2026 – 11:00 AM
  const releaseDate = new Date("2026-02-27T12:45:00");
  const now = new Date();
  const isReleased = now >= releaseDate;

  const fetchData = async () => {
    try {
      const res = await fetch("/api/aideathon-leaderboard");
      const data = await res.json();
      setTeams(data.teams || []);
    } catch (err) {
      console.error("Failed to load leaderboard", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isReleased) {
      fetchData();
      const interval = setInterval(fetchData, 15000);
      return () => clearInterval(interval);
    }
  }, [isReleased]);

  const healthcareTeams = teams.filter(
    (team) => team.category === "Healthcare",
  );

  const agritechTeams = teams.filter((team) => team.category === "Agritech");

  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 text-black py-10 px-4">
      <div className="max-w-3xl w-full flex flex-col items-center">
        <Header />

        <div className="bg-white rounded-2xl shadow-[6px_6px_0px_black] border-4 border-black w-full mt-4">
          <div className="flex flex-col items-center py-6 border-b-4 border-black text-center">
            <h1 className="text-4xl font-extrabold mt-2">
              AIdeathon Leaderboard
            </h1>
          </div>

          {/* ⛔ BEFORE RELEASE */}
          {!isReleased ? (
            <div className="py-10 text-center">
              <p className="text-xl font-semibold text-red-600">
                Leaderboard will be available on <br />
                27th Feb 2026 at 12:45 PM
              </p>
            </div>
          ) : loading ? (
            <div className="py-10 text-center italic text-slate-500">
              Loading...
            </div>
          ) : teams.length === 0 ? (
            /* ⏳ AFTER RELEASE BUT NO DATA */
            <div className="py-10 text-center text-lg font-semibold text-slate-600">
              Data yet to get updated. Please wait.
            </div>
          ) : (
            /* ✅ SHOW LEADERBOARD (Original Layout Preserved) */
            <div className="flex justify-around mt-4 pb-6">
              {/* Healthcare Column */}
              <div className="w-1/2 text-center">
                <h2 className="text-2xl font-bold mb-4">Healthcare</h2>

                {healthcareTeams.length === 0 ? (
                  <p className="italic text-slate-500">No data available</p>
                ) : (
                  <ul className="space-y-3 m-2">
                    {healthcareTeams.map((team) => (
                      <li
                        key={team.rank}
                        className="flex items-center justify-between bg-slate-50 border-2 border-black rounded-xl px-4 py-3 hover:translate-x-1 transition-transform"
                      >
                        <span className="text-lg font-bold">{team.rank}</span>
                        <span className="font-semibold">{team.team}</span>
                        <span className="text-lg font-bold">{team.score}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Agritech Column */}
              <div className="w-1/2 text-center">
                <h2 className="text-2xl font-bold mb-4">Agritech</h2>

                {agritechTeams.length === 0 ? (
                  <p className="italic text-slate-500">No data available</p>
                ) : (
                  <ul className="space-y-3 m-2">
                    {agritechTeams.map((team) => (
                      <li
                        key={team.rank}
                        className="flex items-center justify-between bg-slate-50 border-2 border-black rounded-xl px-4 py-3 hover:translate-x-1 transition-transform"
                      >
                        <span className="text-lg font-bold">{team.rank}</span>
                        <span className="font-semibold">{team.team}</span>
                        <span className="text-lg font-bold">{team.score}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
