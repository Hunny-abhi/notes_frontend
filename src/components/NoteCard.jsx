import React, { useState } from "react";
import NoteForm from "./NoteForm";
import { motion } from "framer-motion";

export default function NoteCard({ note, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(note);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  if (editing) {
    return (
      <div className="max-w-md mx-auto my-4">
        <NoteForm
          initialData={draft}
          onSubmit={(data) => {
            onUpdate(note._id, data);
            setEditing(false);
          }}
          onCancel={() => {
            setDraft(draft);
            setEditing(false);
          }}
        />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      layout
      className="max-w-md mx-auto my-4 p-6 bg-gray-300 rounded-lg shadow-lg border border-gray-100"
    >
      <h3 className="text-xl font-semibold text-gray-800">{note.title}</h3>
      <p className="text-sm text-gray-500 mb-2">By {note.name}</p>
      <p className="text-gray-700 mb-4 whitespace-pre-wrap">{note.content}</p>

      <div className="flex justify-end space-x-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => setEditing(true)}
          className="px-4 py-2 text-sm bg-green-400 hover:bg-green-500 text-white rounded-md transition"
        >
          Edit
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => onDelete(note._id)}
          className="px-4 py-2 text-sm bg-red-500 hover:bg-red-600 text-white rounded-md transition"
        >
          Delete
        </motion.button>
      </div>
      <span className="text-sm text-blue-400">
        {formatDate(note.createdAt)}
      </span>
    </motion.div>
  );
}
