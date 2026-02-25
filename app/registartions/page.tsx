"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";

interface RegistrationCounts {
  aideathon: number;
  chatbotbattle: number;
}

const RegistrationsPage = () => {
  const [counts, setCounts] = useState<RegistrationCounts>({
    aideathon: 0,
    chatbotbattle: 0,
  });
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchCounts = async () => {
    try {
      const response = await fetch("/api/registrations");
      const data = await response.json();
      if (data.aideathon !== undefined && data.chatbotbattle !== undefined) {
        setCounts({
          aideathon: data.aideathon,
          chatbotbattle: data.chatbotbattle,
        });
        setLastUpdated(new Date());
      }
    } catch (error) {
      console.error("Failed to fetch registration counts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch immediately on mount
    fetchCounts();

    // Set up interval for 15 seconds
    const interval = setInterval(fetchCounts, 15000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnnouncementBar />
      <div className="flex flex-col items-center w-full min-h-screen bg-slate-100 text-black py-12 px-6">
        <Header />

        <div className="border-4 border-black rounded-2xl max-w-4xl w-full mx-4 p-10 text-center bg-white shadow-[8px_8px_0px_black]">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Registration Counts
          </h1>
          <p className="text-gray-600 mb-8">Auto-refreshes every 15 seconds</p>

          {lastUpdated && (
            <p className="text-sm text-gray-500 mb-6">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </p>
          )}

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* AIdeathon Registration Count */}
              <div className="border-4 border-black rounded-lg bg-purple-500 shadow-[6px_6px_0px_black] p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  AIdeathon
                </h2>
                <div className="text-6xl font-bold text-white mb-2">
                  {counts.aideathon}
                </div>
                <p className="text-white text-lg">registrations</p>
              </div>

              {/* Chatbot Battle Registration Count */}
              <div className="border-4 border-black rounded-lg bg-blue-500 shadow-[6px_6px_0px_black] p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Chatbot Battle
                </h2>
                <div className="text-6xl font-bold text-white mb-2">
                  {counts.chatbotbattle}
                </div>
                <p className="text-white text-lg">registrations</p>
              </div>
            </div>
          )}

          <div className="mt-8">
            <button
              onClick={fetchCounts}
              className="px-6 py-3 border-2 border-black rounded-lg bg-green-500 text-white font-semibold shadow-[5px_5px_0px_black] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition cursor-pointer"
            >
              Refresh Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationsPage;
