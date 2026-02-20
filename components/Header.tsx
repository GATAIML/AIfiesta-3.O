import React from "react";
import Link from "next/link";
import Image from "next/image";
import LeaderBoardPopUp from "./LeaderBoardPopUp";

const Header = () => {
  return (
    <>
      <nav className="w-full max-w-6xl mx-4 mb-8 flex items-center justify-between bg-white border-4 border-black rounded-lg p-4 shadow-[4px_4px_0px_black]">
        <div className="flex-1 flex justify-start">
          <a href="">
            <Image
              src="/gatlogo.png"
              alt="Left Logo"
              width={120}
              height={120}
              className="w18 h-18 md:w-28 md:h-28 object-contain"
            />
          </a>
        </div>
        <div className="flex-1 flex justify-center">
          <a href="">
            <Image
              src="/aifiestalogo3.png"
              alt="Center Logo"
              width={80}
              height={80}
              className="w-20 h-20 md:w-60 md:h-26 object-contain bg-black p-2 rounded-lg shadow-[4px_4px_0px_white]"
            />
          </a>
        </div>
        <div className="flex-1 flex justify-end">
          <a href="">
            <Image
              src="/aimllogo.png"
              alt="Right Logo"
              width={80}
              height={80}
              className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-lg"
            />
          </a>
        </div>
      </nav>
      {/* <LeaderBoardPopUp /> */}
    </>
  );
};

export default Header;
