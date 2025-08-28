import React from "react";
import { useState, useEffect } from "react";

export default function NoteForm({ onSubmit, initialData, onCancel }) {
  const [form, setForm] = useState({ title: "", content: "", name: "" });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ title: "", content: "", name: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-4"
    >
      <input
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        name="name"
        placeholder="Author"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        name="content"
        placeholder="Content"
        value={form.content}
        onChange={handleChange}
        required
        rows="5"
        className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
      />
      <div className="flex justify-end space-x-3">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
