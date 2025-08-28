// src/pages/Home.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import NoteForm from "../components/NoteForm";
import { createNote } from "../api/notes";

export default function Home() {
  const [success, setSuccess] = useState(false);

  const handleCreate = async (note) => {
    await createNote(note);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <motion.div
      className="max-w-2xl bg-blue-50 rounded-2xl mx-auto mt-10 text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
    >
      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        Welcome to NoteSaver!
      </h1>
      <p className="text-gray-600 text-lg mb-6">
        Create a new note right here from the homepage.
      </p>

      <NoteForm onSubmit={handleCreate} />

      {success && (
        <p className="mt-4 text-green-600 font-medium">
          Note saved successfully!
        </p>
      )}
    </motion.div>
  );
}
