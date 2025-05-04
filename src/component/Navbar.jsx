"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full flex justify-center fixed top-4 left-0 z-50 pointer-events-none">
      <motion.nav
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="pointer-events-auto bg-white shadow-lg flex items-center justify-between transition-all duration-300 px-8 py-4 rounded-full max-w-5xl w-full mx-auto border border-gray-200 relative"
      >
        <span className="font-bold text-green-700">Orainx</span>
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-green-700 hover:text-gray-300 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-green-700 hover:text-gray-300 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/projects"
            className="text-green-700 hover:text-gray-300 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-green-700 hover:text-gray-300 transition-colors"
          >
            Contact
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-2">
          <Link
            href="/contact"
            className="bg-[#4ADE80] hover:bg-[#22c55e] text-black font-medium px-4 py-2 rounded-md transition-colors"
          >
            Get Started
          </Link>
        </div>
        {/* Hamburger Button */}
        <button
          className="md:hidden ml-2 text-green-700 focus:outline-none"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8h16M4 16h16"
            />
          </svg>
        </button>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-lg flex flex-col items-center space-y-4 p-6 w-11/12 max-w-xs md:hidden z-50">
            <Link
              href="/"
              className="text-green-700 font-medium hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-gray-700 hover:text-green-700"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-green-700"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-green-700"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-[#4ADE80] hover:bg-[#22c55e] text-black font-medium px-4 py-2 rounded-md transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </motion.nav>
    </header>
  );
}
