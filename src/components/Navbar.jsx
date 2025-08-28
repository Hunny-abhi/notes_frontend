import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Notes", path: "/notes" },
  ];

  return (
    <nav className="bg-red-50 shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">NoteSaver</h1>
        <ul className="flex space-x-6">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path} className="relative">
                <Link
                  to={item.path}
                  className="text-gray-800 hover:text-blue-700 hover:blur-xs transition"
                >
                  {item.label}
                </Link>
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-1 bg-blue-500 rounded-full"
                    style={{ bottom: -4 }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
