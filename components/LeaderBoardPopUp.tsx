import React from "react";
import Link from "next/link";
import Image from "next/image";

const LeaderBoardPopUp = () => {
  return (
    <>
      {/* Vertical Sidebar Popup for Leaderboard */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
        <Link
          href="/leaderboard"
          className="flex flex-col items-center m-2 py-3 px-2 border-2 border-black rounded-lg bg-gradient-to-b from-yellow-300 to-yellow-500 text-black font-bold shadow-[4px_4px_0px_black] hover:translate-x-1 hover:shadow-none transition"
        >
          <span className="text-xl mb-1">🏆</span>
          <span className="text-xs tracking-wider">L</span>
          <span className="text-xs tracking-wider">E</span>
          <span className="text-xs tracking-wider">A</span>
          <span className="text-xs tracking-wider">D</span>
          <span className="text-xs tracking-wider">E</span>
          <span className="text-xs tracking-wider">R</span>
          <span className="text-xs tracking-wider">B</span>
          <span className="text-xs tracking-wider">O</span>
          <span className="text-xs tracking-wider">A</span>
          <span className="text-xs tracking-wider">R</span>
          <span className="text-xs tracking-wider">D</span>
        </Link>
      </div>
    </>
  );
};

export default LeaderBoardPopUp;
