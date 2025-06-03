"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between lg:px-24">
        <Link href="/" className="text-lg sm:text-xl lg:text-2xl font-semibold">
          S.Chanthea
        </Link>
        <button
          className="sm:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-12 flex-wrap absolute sm:static top-16 left-0 right-0 bg-white sm:bg-transparent p-4 sm:p-0 items-center justify-center`}
          onClick={handleLinkClick}
        >
          <Link href="/project" className="hover:underline text-gray-700">
            Project
          </Link>
          <Link href="/contact" className="hover:underline text-gray-700">
            Contact
          </Link>
          <Link href="/open-to-work" className="hover:underline text-gray-700">
            Open
          </Link>
        </nav>
      </div>
    </header>
  );
}
