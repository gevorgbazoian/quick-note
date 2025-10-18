import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, onEdit, onDelete }) => {
  if (!notes.length) return <p className="no-notes">You have no notes 🗒️</p>;

  return (
    <div className="note-list">
      {notes.map(note => (
        <NoteItem
          key={note.id}
          note={note}
          onEdit={() => onEdit(note)}
          onDelete={() => onDelete(note.id)}
        />
      ))}
    </div>
  );
};

export default NoteList;
