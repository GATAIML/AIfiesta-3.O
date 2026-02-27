"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { useState } from "react";

const chatbotPrompts = [
  {
    title: "AI-Powered Customer Service Chatbot",
    prompt:
      "Hi, I'm looking for a product under my budget. Can you recommend something? Also, what should I do if my order gets delayed or arrives damaged?\n\nTests:\n• Recommendation ability\n• Customer support handling\n• Problem resolution\n• Context understanding",
    tests: [
      "Recommendation ability",
      "Customer support handling",
      "Problem resolution",
      "Context understanding",
    ],
  },
  {
    title: "Educational Tutoring Chatbot",
    prompt:
      "Can you explain this concept to me in a simple way? I'm a beginner and also suggest how I can practice it.\n\nTests:\n• Teaching clarity\n• Personalization\n• Concept understanding\n• Guidance quality",
    tests: [
      "Teaching clarity",
      "Personalization",
      "Concept understanding",
      "Guidance quality",
    ],
  },
  {
    title: "Healthcare Appointment Scheduling Assistant",
    prompt:
      "I've been feeling sick for two days with a headache and fever. What should I do, and can you help me book an appointment with a doctor?\n\nTests:\n• Symptom understanding\n• Safety awareness\n• Guidance accuracy\n• Appointment logic",
    tests: [
      "Symptom understanding",
      "Safety awareness",
      "Guidance accuracy",
      "Appointment logic",
    ],
  },
  {
    title: "Travel and Tourism Guide Bot",
    prompt:
      "I want to plan a trip with a limited budget. Can you suggest a destination, things to do there, and the best time to visit?\n\nTests:\n• Planning ability\n• Personalization\n• Information quality\n• Recommendation relevance",
    tests: [
      "Planning ability",
      "Personalization",
      "Information quality",
      "Recommendation relevance",
    ],
  },
  {
    title: "Financial Advisory Chatbot",
    prompt:
      "I want to save money and invest for my future, but I don't know where to start. Can you guide me based on a small monthly budget?\n\nTests:\n• Financial knowledge\n• Advice clarity\n• Personalization\n• Practical guidance",
    tests: [
      "Financial knowledge",
      "Advice clarity",
      "Personalization",
      "Practical guidance",
    ],
  },
  {
    title: "Mental Health Support Chatbot",
    prompt:
      "I've been feeling very stressed and overwhelmed lately. Can you talk to me and suggest something that might help?\n\nTests:\n• Empathy\n• Emotional intelligence\n• Supportive tone\n• Safety handling",
    tests: [
      "Empathy",
      "Emotional intelligence",
      "Supportive tone",
      "Safety handling",
    ],
  },
];

export default function ChatbotBattlePrompts() {
  const [passcode, setPasscode] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  // 🔥 Start Time: 12:50 PM
  const startTime = new Date("2026-02-25T09:00:00");
  const now = new Date();
  const hasStarted = now >= startTime;

  const handlePasscodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === "aifiesta2026") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect passcode. Please try again.");
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        alert("Prompt copied to clipboard!");
      } else {
        // Fallback for browsers that don't support Clipboard API
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        alert("Prompt copied to clipboard!");
      }
    } catch (err) {
      alert("Failed to copy prompt. Please copy manually.");
    }
  };

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
            Chatbot Battle – Evaluation Prompts
          </h2>
          <p className="text-lg text-gray-700 mb-2">🕒 Opens at: 12:50 PM</p>
          {!hasStarted && (
            <p className="text-red-600 font-semibold text-lg mt-4">
              Page will be available at 12:50 PM.
            </p>
          )}
        </div>

        {hasStarted && !isAuthenticated && (
          <div className="border-4 border-black rounded-lg bg-white shadow-[6px_6px_0px_black] p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Enter Passcode</h3>
            <form onSubmit={handlePasscodeSubmit} className="space-y-4">
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter passcode"
                className="w-full px-4 py-2 border-2 border-black rounded-lg bg-white text-black shadow-[4px_4px_0px_black] focus:outline-none focus:shadow-[2px_2px_0px_black]"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 border-2 border-black rounded-lg bg-blue-500 text-white font-semibold shadow-[4px_4px_0px_black] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition"
              >
                Submit
              </button>
            </form>
            {error && (
              <p className="text-red-600 font-semibold mt-4">{error}</p>
            )}
          </div>
        )}

        {hasStarted && isAuthenticated && (
          <div className="space-y-6">
            {chatbotPrompts.map((item, idx) => (
              <div
                key={idx}
                className="border-2 border-black bg-white shadow-[4px_4px_0px_black] rounded-md p-6"
              >
                <h3 className="font-bold text-xl mb-4">{item.title}</h3>
                <div className="mb-4">
                  <p className="font-semibold mb-2">Prompt:</p>
                  <div className="bg-gray-100 p-4 rounded-lg border-2 border-black">
                    <p className="text-gray-800">{item.prompt}</p>
                    <button
                      onClick={() => copyToClipboard(item.prompt)}
                      className="mt-2 px-4 py-2 border-2 border-black rounded-lg bg-blue-500 text-white font-semibold shadow-[2px_2px_0px_black] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition text-sm"
                    >
                      Copy Prompt
                    </button>
                  </div>
                </div>
                <div>
                  <p className="font-semibold mb-2">Tests:</p>
                  <ul className="list-disc list-inside space-y-1">
                    {item.tests.map((test, testIdx) => (
                      <li key={testIdx} className="text-gray-700">
                        {test}
                      </li>
                    ))}
                  </ul>
                  {/* <p className="text-sm text-gray-600 mt-2">Event Time: 12:50 PM</p> */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
