"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const rulebookData: Record<string, { title: string; rules: string[] }> = {
  "chatbot-battle": {
    title: "Chatbot Battle - Rule Book",
    rules: [
      "Participants can compete individually or in teams of 2-3 members.",
      "Development time: 5 Hours (8:30 AM – 1:30 PM approx.)",
      "Participants must bring their own laptop and charger.",
      "Internet access is permitted unless otherwise specified.",
      "Participants will build their chatbot during the designated lab session.",
      "Judges will evaluate performance using a common set of prompts.",
      "The decision of judges will be final and binding.",
      "Any form of plagiarism will lead to immediate disqualification.",
    ],
  },
  aideathon: {
    title: "AIdeathon - Rule Book",
    rules: [
      "Team participation only (2-4 members per team).",
      "Participants must bring their own laptop and adapters.",
      "Multi-round competition structure.",
      "Follow the prescribed PPT format for presentations.",
      "Prototype or demo is optional but encouraged.",
      "Innovation and practical applicability will be key evaluation criteria.",
      "The decision of judges will be final and binding.",
      "Any form of plagiarism will lead to immediate disqualification.",
    ],
  },
};

export default function RulebookPage() {
  const params = useParams();
  const eventname = params.eventname as string;

  const eventData = rulebookData[eventname];

  if (!eventData) {
    return (
      <div className="flex flex-col items-center w-full min-h-screen bg-slate-100 text-black py-12 px-6">
        <nav className="w-full max-w-4xl mx-4 mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="px-6 py-3 border-2 border-black rounded-lg bg-white text-black font-semibold shadow-[4px_4px_0px_black] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition"
          >
            ← Back to Home
          </Link>
        </nav>

        <div className="border-4 border-black rounded-2xl max-w-4xl w-full mx-4 p-8 bg-white shadow-[8px_8px_0px_black] text-center">
          <h1 className="text-4xl font-bold mb-4">Rule Book Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">
            The event "{eventname}" does not have a rule book yet.
          </p>
          <Link
            href="/"
            className="px-6 py-3 border-2 border-black rounded-lg bg-blue-500 text-black font-semibold shadow-[5px_5px_0px_black] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition inline-block"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-slate-100 text-black py-12 px-6">
      <nav className="w-full max-w-4xl mx-4 mb-8 flex items-center justify-between">
        <Link
          href="/"
          className="px-6 py-3 border-2 border-black rounded-lg bg-white text-black font-semibold shadow-[4px_4px_0px_black] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition"
        >
          ← Back to Home
        </Link>
      </nav>

      <div className="border-4 border-black rounded-2xl max-w-4xl w-full mx-4 p-8 bg-white shadow-[8px_8px_0px_black]">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          {eventData.title}
        </h1>

        <div className="space-y-4">
          {eventData.rules.map((rule, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-slate-50 border-2 border-black rounded-lg"
            >
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-black text-white font-bold rounded-full">
                {index + 1}
              </span>
              <p className="text-lg text-gray-700">{rule}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="px-6 py-3 border-2 border-black rounded-lg bg-blue-500 text-black font-semibold shadow-[5px_5px_0px_black] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition inline-block"
          >
            Back to Events
          </Link>
        </div>
      </div>
    </div>
  );
}
