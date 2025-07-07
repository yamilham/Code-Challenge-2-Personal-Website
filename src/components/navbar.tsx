"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isFloating, setIsFloating] = useState(false);

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      setIsFloating(window.scrollY > 10);
      setIsVisible(true);

      // Clear existing timeout
      clearTimeout(timeoutId);

      // Set new timeout to hide navbar after 3 seconds of no scrolling
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    };

    const handleMouseMove = () => {
      setIsVisible(true);
      clearTimeout(timeoutId);

      // Hide again after 3 seconds of no mouse movement
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 1500);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleSmoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className={`z-50 bottom-[52px] w-full flex justify-center transition-all duration-300
        ${isFloating ? "fixed bottom-6" : "fixed bottom-0"} ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="flex justify-center items-center">
        <nav className="hidden md:flex h-[72px] rounded-full p-1 bg-black shadow overflow-hidden">
          <ul className="flex flex-1 justify-between p-1 gap-1.5">
            <li className="flex items-center justify-center py-3 px-4.5 rounded-4xl font-normal md:text-xl text-white hover:bg-gray-100 hover:text-gray-800 active:bg-white active:text-black">
              <a
                href="#home"
                onClick={(event) => handleSmoothScroll(event, "home")}
              >
                Home
              </a>
            </li>
            <li className="flex items-center justify-center py-3 px-4.5 rounded-4xl font-normal md:text-xl text-white hover:bg-gray-100 hover:text-gray-800 active:bg-white active:text-black">
              <a
                href="#about"
                onClick={(event) => handleSmoothScroll(event, "about")}
              >
                About
              </a>
            </li>
            <li className="flex items-center justify-center py-3 px-4.5 rounded-4xl font-normal md:text-xl text-white hover:bg-gray-100 hover:text-gray-800 active:bg-white active:text-black">
              <a
                href="#skills"
                onClick={(event) => handleSmoothScroll(event, "skills")}
              >
                Skills
              </a>
            </li>
            <li className="flex items-center justify-center py-3 px-4.5 rounded-4xl font-normal md:text-xl text-white hover:bg-gray-100 hover:text-gray-800 active:bg-white active:text-black">
              <a
                href="#projects"
                onClick={(event) => handleSmoothScroll(event, "projects")}
              >
                Projects
              </a>
            </li>
            <li className="flex items-center justify-center py-3 px-4.5 rounded-4xl font-normal md:text-xl text-white hover:bg-gray-100 hover:text-gray-800 active:bg-white active:text-black">
              <a
                href="#contact"
                onClick={(event) => handleSmoothScroll(event, "contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
