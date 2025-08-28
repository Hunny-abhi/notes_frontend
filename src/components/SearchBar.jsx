import React from "react";

export default function SearchBar({ query, setQuery }) {
  return (
    <div className="flex items-center max-w-md mx-auto my-4 space-x-2">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search notes title..."
        className="flex-grow px-4 py-2 border border-gray-800 rounded-md focus:outline-none focus:ring-3 focus:ring-blue-500"
      />
      <button
        onClick={() => setQuery("")}
        className="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-gray-800 rounded-md transition"
      >
        Clear
      </button>
    </div>
  );
}
