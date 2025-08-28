import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="max-w-2xl mx-auto mt-10 text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
    >
      <h2 className="text-3xl  font-semibold mb-3 text-gray-800">
        About This App
      </h2>
      <p className="text-gray-600 text-lg">
        NoteSaver is a simple note-taking app built with React, Tailwind CSS,
        and Framer Motion. It allows you to create, edit, delete, and search
        notes seamlessly.
      </p>
    </motion.div>
  );
}
