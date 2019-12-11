import React from "react";

const Notes = props => {
  return (
    <div className="note-list">
      {props.notes.map(note => (
        <div className="note" key={note.id}>
          <h2>{note.name}</h2>
          <h2>{note.email}</h2>
          <h2>{note.role}</h2>
        </div>
      ))}
    </div>
  );
};

export default Notes;
