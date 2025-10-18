import React, { useState, useEffect } from "react";
import NoteList from "./components/NoteList";
import AddNoteButton from "./components/AddNoteButton";
import EditModal from "./components/EditModal";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");

    if (saved && JSON.parse(saved).length > 0) return JSON.parse(saved);

    return [
      {
        id: Date.now(),
        title: "📘 Physics",
        text: "Review Newton's laws and practice problems.",
      },
      {
        id: Date.now() + 1,
        title: "🇬🇧 English",
        text: "Learn 20 new TOEFL vocabulary words.",
      },
      {
        id: Date.now() + 2,
        title: "💻 Programming",
        text: "Finish the React project and practice useState/useEffect.",
      },
    ];
  });

  const [showNotes, setShowNotes] = useState(true); // սկզբից ցույց տալ նոթերը
  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const toggleNotes = () => setShowNotes(!showNotes);

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "🆕 New Note",
      text: "Type something here...",
    };
    setNotes(prev => [...prev, newNote]);
    setShowNotes(true);
  };

  const deleteAllNotes = () => {
    if (window.confirm("Are you sure you want to delete all notes?")) {
      setNotes([]);
    }
  };

  const saveEdit = updatedNote => {
    setNotes(prev => prev.map(note => note.id === updatedNote.id ? updatedNote : note));
    setEditingNote(null);
  };

  const deleteNote = id => {
    setNotes(prev => prev.filter(note => note.id !== id));
  };

  return (
    <div className="app-container">
      <header>
        <h1>🧠 QuickNote</h1>
      </header>

      <div className="controls">
        <button className="btn secondary" onClick={toggleNotes}>
          🔹 Open Vault
        </button>
        {notes.length > 0 && (
          <button className="btn delete-all" onClick={deleteAllNotes}>
            🗑️ Delete All Notes
          </button>
        )}
      </div>

      {showNotes && (
        <NoteList notes={notes} onEdit={setEditingNote} onDelete={deleteNote} />
      )}

      <AddNoteButton onAdd={addNote} />

      {editingNote && (
        <EditModal
          note={editingNote}
          onSave={saveEdit}
          onCancel={() => setEditingNote(null)}
        />
      )}
    </div>
  );
};

export default App;
