"use client";

import React from "react";

const AnnouncementBar = () => {
  return (
    <div className="w-full bg-black text-white py-2 overflow-hidden">
      <div className="animate-scroll whitespace-nowrap">
        <span className="mx-4 text-lg font-semibold">
          🎉 Welcome to AIfiesta 3.0! | Register Now for Chatbot Battle &
          AIdeathon! | Read the Rule Books before registering! | 🎉 Welcome to
          AIfiesta 3.0! | Register Now for Chatbot Battle & AIdeathon! | Read
          the Rule Books before registering! |
        </span>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default AnnouncementBar;
