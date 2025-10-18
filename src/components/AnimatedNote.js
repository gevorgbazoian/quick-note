import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import NoteItem from "./NoteItem";

const AnimatedNote = ({ note, onEdit, onDelete }) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      timeout={300}
      classNames="note"
      unmountOnExit
    >
      <div ref={nodeRef}>
        <NoteItem note={note} onEdit={() => onEdit(note)} onDelete={() => onDelete(note.id)} />
      </div>
    </CSSTransition>
  );
};

export default AnimatedNote;
