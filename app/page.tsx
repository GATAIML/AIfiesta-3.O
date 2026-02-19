"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ProblemCard from "../components/ProblemCard";
import { problemCategories } from "@/lib/data";

const Home = () => {
  const [showProblems, setShowProblems] = useState(false);

  const now = new Date();
  const target = new Date(2025, 8, 18, 18, 15);

  const show = now >= target;

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-slate-100 text-black py-12 px-6">
      {/* Navbar with three logos */}
      <nav className="w-full max-w-6xl mx-4 mb-8 flex items-center justify-between bg-white border-4 border-black rounded-lg p-4 shadow-[4px_4px_0px_black]">
        <div className="flex-1 flex justify-start">
          <Image
            src="/gatlogo.png"
            alt="Left Logo"
            width={120}
            height={120}
            className="w18 h-18 md:w-28 md:h-28 object-contain"
          />
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/aifiestalogo3.png"
            alt="Center Logo"
            width={80}
            height={80}
            className="w-20 h-20 md:w-60 md:h-26 object-contain bg-black p-2 rounded-lg shadow-[4px_4px_0px_white]"
          />
        </div>
        <div className="flex-1 flex justify-end">
          <Image
            src="/aimllogo.png"
            alt="Right Logo"
            width={80}
            height={80}
            className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-lg"
          />
        </div>
      </nav>

      <div className="border-4 border-black rounded-2xl max-w-6xl w-full mx-4 p-10 text-center bg-white shadow-[8px_8px_0px_black]">
        {/* <div className="h-1 mx-auto bg-black my-4" /> */}

        {/* <div className="flex flex-wrap justify-center gap-6">
          <button
            className="px-6 py-3 border-2 border-black rounded-lg bg-white text-black font-semibold shadow-[5px_5px_0px_black] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition cursor-pointer"
            onClick={() => setShowProblems(!showProblems)}
          >
            {showProblems
              ? "Hide Problem Statements"
              : "Show Problem Statements"}
          </button>
          <Link
            className="px-6 py-3 border-2 border-black rounded-lg bg-white text-black font-semibold shadow-[5px_5px_0px_black] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition"
            href="/leaderboard"
          >
            Leaderboard
          </Link>
        </div> */}

        {/* Registration and Rule Book Buttons
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <button className="px-6 py-3 border-2 border-black rounded-lg bg-green-500 text-white font-semibold shadow-[5px_5px_0px_black] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition cursor-pointer flex items-center gap-2">
            <span className="text-xl">●</span>
            Register Now
          </button>
          <button className="px-6 py-3 border-2 border-black rounded-lg bg-white text-black font-semibold shadow-[5px_5px_0px_black] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition cursor-pointer">
            Rule Book
          </button>
        </div> */}

        {/* Event Sections - Grid layout for side-by-side on laptop/tablet */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Chatbot Battle */}
          <div className="border-4 border-black rounded-lg bg-white shadow-[6px_6px_0px_black] p-6 text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              AIfiesta 3.0 – Chatbot Battle!
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              This competition challenges participants to design and develop an
              intelligent chatbot within a limited time frame. Teams will build
              their chatbot during a 5-hour lab session, after which judges will
              evaluate performance using a common set of prompts.
            </p>
            <p className="text-lg text-gray-700 mb-4 font-semibold">
              Please read the rules carefully before registering.
            </p>
            <div className="bg-slate-100 border-2 border-black rounded-md p-4">
              <h3 className="text-xl font-bold mb-3">🔹 Event Highlights</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  🕒 Development Time: 5 Hours (8:30 AM – 1:30 PM approx.)
                </li>
                <li>👥 Participation: Individual or Team (Max 2–3 members)</li>
                <li>💻 Bring your own laptop & charger</li>
                <li>
                  🌐 Internet access permitted (unless otherwise specified)
                </li>
              </ul>
            </div>
            {/* Registration and Rule Book Buttons */}
            {/* <div className="flex flex-wrap justify-center gap-6 mt-6">
              <Link
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-black rounded-lg bg-green-500 text-white font-semibold shadow-[5px_5px_0px_black] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition cursor-pointer flex items-center gap-2"
              >
                <span className="text-xl">●</span>
                Register Now
              </Link>
              <Link
                href=""
                className="px-6 py-3 border-2 border-black rounded-lg bg-blue-500 text-black font-semibold shadow-[5px_5px_0px_black] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition cursor-pointer"
              >
                Rule Book
              </Link>
            </div> */}
            <div className="flex flex-wrap justify-center gap-6 mt-6">
              <div className="px-6 py-3 border-2 border-gray-400 rounded-lg bg-gray-200 text-gray-500 font-semibold shadow-[5px_5px_0px_#9ca3af] cursor-not-allowed flex items-center gap-2">
                <span className="text-xl opacity-50">●</span>
                Registration Coming Soon
              </div>

              <div className="px-6 py-3 border-2 border-gray-400 rounded-lg bg-gray-200 text-gray-500 font-semibold shadow-[5px_5px_0px_#9ca3af] cursor-not-allowed">
                Rule Book (Coming Soon)
              </div>
            </div>
          </div>

          {/* AIdeathon */}
          <div className="border-4 border-black rounded-lg bg-white shadow-[6px_6px_0px_black] p-6 text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              AIfiesta 3.0 – AIdeathon!
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              AIdeathon is an innovation challenge where teams conceptualize and
              present AI-driven solutions to real-world problems. Participants
              will pitch their ideas, receive feedback, and refine their
              solutions for the final round.
            </p>
            <p className="text-lg text-gray-700 mb-4 font-semibold">
              Please read the rules carefully before registering.
            </p>
            <div className="bg-slate-100 border-2 border-black rounded-md p-4">
              <h3 className="text-xl font-bold mb-3">🔹 Event Highlights</h3>
              <ul className="space-y-2 text-gray-700">
                <li>🕒 Multi-Round Competition</li>
                <li>👥 Team Participation Only (2–4 Members per Team)</li>
                <li>💻 Bring your own laptop & adapters</li>
                <li>📊 Follow the PPT Format.</li>
                <li>🚀 Prototype or demo is optional but encouraged</li>
              </ul>
            </div>
            {/* Registration and Rule Book Buttons */}
            {/* <div className="flex flex-wrap justify-center gap-6 mt-6">
              <Link
                href="https://your-registration-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-black rounded-lg bg-green-500 text-white font-semibold shadow-[5px_5px_0px_black] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition cursor-pointer flex items-center gap-2"
              >
                <span className="text-xl">●</span>
                Register Now
              </Link>
              <Link
                href="/rulebook"
                className="px-6 py-3 border-2 border-black rounded-lg bg-blue-500 text-black font-semibold shadow-[5px_5px_0px_black] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition cursor-pointer"
              >
                Rule Book
              </Link>
            </div> */}
            <div className="flex flex-wrap justify-center gap-6 mt-6">
              <div className="px-6 py-3 border-2 border-gray-400 rounded-lg bg-gray-200 text-gray-500 font-semibold shadow-[5px_5px_0px_#9ca3af] cursor-not-allowed flex items-center gap-2">
                <span className="text-xl opacity-50">●</span>
                Registration Coming Soon
              </div>

              <div className="px-6 py-3 border-2 border-gray-400 rounded-lg bg-gray-200 text-gray-500 font-semibold shadow-[5px_5px_0px_#9ca3af] cursor-not-allowed">
                Rule Book (Coming Soon)
              </div>
            </div>

          </div>
        </div>
      </div>

      {!show && showProblems && (
        <h1 className="mt-10 text-xl text-center text-gray-600">
          Problem Statements will be released at 6:15 PM IST
        </h1>
      )}

      {showProblems && show && (
        <div className="max-w-5xl w-full mt-12">
          <div className="border-4 border-black rounded-lg bg-white shadow-[6px_6px_0px_black] p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Problem Statements
            </h2>

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
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
