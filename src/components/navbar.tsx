"use client";
import { useEffect, useState } from "react";
// import ButtonNav from "./buttonnav";

export default function Navbar() {
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFloating(window.scrollY > 10); // float after 10px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`z-50 bottom-[52px] w-full flex justify-center transition-all duration-300
        ${isFloating ? "fixed bottom-6" : "fixed bottom-0"}`}
    >
      <div className="flex justify-center items-center">
        <nav className="flex h-[60px] rounded-full p-1 bg-black shadow overflow-hidden">
          <ul className="flex flex-1 justify-between p-1 gap-1.5">
            <li className="flex items-center justify-center py-3 px-4.5 rounded-4xl font-normal text-white hover:bg-gray-100 hover:text-gray-800 active:bg-white active:text-black">
              <a href="#home">Home</a>
            </li>
            <li className="flex items-center justify-center py-3 px-4.5 rounded-4xl font-normal text-white hover:bg-gray-100 hover:text-gray-800 active:bg-white active:text-black">
              <a href="#about">About</a>
            </li>
            <li className="flex items-center justify-center py-3 px-4.5 rounded-4xl font-normal text-white hover:bg-gray-100 hover:text-gray-800 active:bg-white active:text-black">
              <a href="#skills">Skills</a>
            </li>
            <li className="flex items-center justify-center py-3 px-4.5 rounded-4xl font-normal text-white hover:bg-gray-100 hover:text-gray-800 active:bg-white active:text-black">
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
