"use client";
import { useEffect, useState } from "react";
import ButtonNav from "./buttonnav";

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
        <div className="flex justify-center items-center py-[18px] px-[8px] gap-[8px] h-[50px] w-[300px] rounded-3xl bg-white shadow">
          <ButtonNav lable="Home" />
          <ButtonNav lable="About" />
          <ButtonNav lable="Skills" />
          <ButtonNav lable="Project" />
        </div>
      </div>
    </div>
  );
}
