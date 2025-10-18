import React, { useState, useEffect } from "react";

const EditModal = ({ note, onSave, onCancel }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    setTitle(note.title);
    setText(note.text);
  }, [note]);

  const handleSave = () => {
    if (!title.trim() || !text.trim()) return;
    onSave({ ...note, title, text });
  };

  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2>Edit Note</h2>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <textarea value={text} onChange={e => setText(e.target.value)} />
        <div className="modal-buttons">
          <button className="btn primary" onClick={handleSave}>Save</button>
          <button className="btn secondary" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
