import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen mx-auto">
        <div className="grid grid-cols-1 justify-between md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Muhamad Ilham
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Help you to solve problem in creative way
            </p>
          </div>

          {/* General Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              General
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/skills"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://linkedin.com/in/yamilham"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:yamilham96@gmail.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                >
                  E-mail
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/yamilham"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="/chat"
                  className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm"
                >
                  Chat
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Highlight
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm">
                3D Illustration
              </li>
              <li className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm">
                Web Development
              </li>
              <li className="text-gray-600 hover:text-pink-600 transition-colors duration-200 text-sm">
                Design Tools
              </li>
              <li className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 text-sm">
                Development Tools
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 text-md">
              © {new Date().getFullYear()} Muhamad Ilham. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200 text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
