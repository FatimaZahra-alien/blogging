"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0B132B] text-white py-2 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <h1 className="text-xl font-semibold">Fatima&apos;s Blogging</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 list-none">
          <li>
            <Link href="/" className="text-white hover:text-gray-300 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-white hover:text-gray-300 transition">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-gray-300 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 mt-4 pb-4 bg-[#0B132B]">
          <li>
            <Link href="/" className="text-white hover:text-gray-300 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-white hover:text-gray-300 transition">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-gray-300 transition">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
