import React from "react";

const NoteItem = ({ note, onEdit, onDelete }) => {
  return (
    <div className="note-item">
      <h3>{note.title}</h3>
      <p>{note.text}</p>
      <div className="note-item-buttons">
        <button className="btn small edit" onClick={onEdit}>✏️</button>
        <button className="btn small delete" onClick={onDelete}>🗑️</button>
      </div>
    </div>
  );
};

export default NoteItem;
