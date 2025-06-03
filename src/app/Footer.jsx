"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white shadow-sm border-t border-gray-200">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center sm:justify-center lg:justify-between lg:px-24 gap-4 sm:gap-8">
        <nav className="flex flex-wrap gap-4 sm:gap-8 justify-center">
          <Link
            href="https://github.com/wh04m1-dev"
            target="_blank"
            className="hover:underline text-gray-700"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/chanthea-seng-b00467280/"
            target="_blank"
            className="hover:underline text-gray-700"
          >
            LinkedIn
          </Link>
          <Link
            href="https://t.me"
            target="_blank"
            className="hover:underline text-gray-700"
          >
            Telegram
          </Link>
        </nav>
        <p className="text-gray-700 text-sm sm:text-base">
          &copy; {new Date().getFullYear()} S.Chanthea. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
