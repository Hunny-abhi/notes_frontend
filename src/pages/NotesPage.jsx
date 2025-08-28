import React, { useEffect, useState } from "react";
import { fetchNotes, createNote, updateNote, deleteNote } from "../api/notes";
import NoteForm from "../components/NoteForm";
import NoteCard from "../components/NoteCard";
import SearchBar from "../components/SearchBar";
import { AnimatePresence, motion } from "framer-motion";

export default function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const loadNotes = async () => {
    setLoading(true);
    try {
      const data = await fetchNotes();
      setNotes(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNotes();
  }, []);

  const handleCreate = async (note) => {
    await createNote(note);
    loadNotes();
  };

  const handleUpdate = async (id, note) => {
    await updateNote(id, note);
    loadNotes();
  };

  const handleDelete = async (id) => {
    await deleteNote(id);
    loadNotes();
  };

  const filtered = notes.filter(
    (n) =>
      n.title.toLowerCase().includes(query.toLowerCase()) ||
      n.content.toLowerCase().includes(query.toLowerCase()) ||
      n.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-300 py-8 px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-5xl font-bold text-center text-gray-800">
          Notes App
        </h1>

        <NoteForm onSubmit={handleCreate} />

        <SearchBar query={query} setQuery={setQuery} />

        {loading ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"
          />
        ) : filtered.length === 0 ? (
          <p className="text-center text-gray-700">No notes found.</p>
        ) : (
          <AnimatePresence>
            <motion.div layout className="space-y-4">
              {filtered.map((note) => (
                <NoteCard
                  key={note._id}
                  note={note}
                  onUpdate={handleUpdate}
                  onDelete={handleDelete}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
