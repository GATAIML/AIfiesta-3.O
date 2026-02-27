"use client";

import Header from "@/components/Header";
import Link from "next/link";
import ProblemCard from "@/components/ProblemCard";

const chatbotProblems = [
  {
    title: "AI-Powered Customer Service Chatbot",
    description:
      "Build a intelligent chatbot that can handle customer inquiries, provide product information, and resolve common issues. The chatbot should demonstrate natural language understanding and contextual responses.",
    tags: ["SDG 9"],
  },
  {
    title: "Educational Tutoring Chatbot",
    description:
      "Create an AI tutoring chatbot that can explain concepts, answer student questions across various subjects, and provide personalized learning recommendations based on user interactions.",
    tags: ["SDG 4", "SDG 10"],
  },
  {
    title: "Healthcare Appointment Scheduling Assistant",
    description:
      "Develop a chatbot that helps users schedule medical appointments, provides health information, triages symptoms, and connects patients with appropriate healthcare resources.",
    tags: ["SDG 3", "SDG 10"],
  },
  {
    title: "Travel and Tourism Guide Bot",
    description:
      "Build a chatbot that assists travelers with trip planning, recommends destinations, provides local information, handles booking inquiries, and offers personalized travel suggestions.",
    tags: ["SDG 8", "SDG 12"],
  },
  {
    title: "Financial Advisory Chatbot",
    description:
      "Create a chatbot that provides basic financial advice, helps users understand investment options, explains banking products, and offers budget management guidance.",
    tags: ["SDG 1", "SDG 8", "SDG 10"],
  },
  {
    title: "Mental Health Support Chatbot",
    description:
      "Develop an AI chatbot that provides emotional support, mindfulness guidance, and mental health resources.",
    tags: ["SDG 3", "SDG 10", "SDG 16"],
  },
];

export default function ChatbotBattleProblemStatements() {

  // 🔥 Start Time: 27 Feb 2026 – 9:00 AM
  const startTime = new Date("2026-02-28T09:00:00");
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
            Chatbot Battle - Problem Statements
          </h2>

          <p className="text-lg text-gray-700 mb-2">
            🕒 Starts at: 28 Feb 2026 | 9:00 AM
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {chatbotProblems.map((problem, idx) => (
                <ProblemCard
                  key={idx}
                  title={problem.title}
                  description={problem.description}
                  sdgs={problem.tags}
                />
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/chatbot-battle-rulebook"
                className="px-6 py-3 border-2 border-black rounded-lg bg-blue-500 text-black font-semibold shadow-[5px_5px_0px_black] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition inline-block"
              >
                View Chatbot Battle Rules
              </Link>
            </div>
          </>
        )}

      </div>
    </div>
  );
}