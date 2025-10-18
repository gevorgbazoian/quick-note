import React from "react";

const AddNoteButton = ({ onAdd }) => (
  <button className="btn primary" onClick={onAdd}>
    [+] Add New Note
  </button>
);

export default AddNoteButton;

