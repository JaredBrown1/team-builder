import React, { useState } from "react";

const NoteForm = ({ addNewNote }) => {
  const [note, setNote] = useState({ id: "", name: "", email: "", role: "" });

  const handleChanges = event => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    addNewNote(note);

    setNote({ name: "", email: "", role: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor>Name</label>

      <input
        id="name"
        type="text"
        name="name"
        placeholder="Enter your name"
        onChange={handleChanges}
        //value={note.name}
      />

      <label htmlFor="email">Email</label>

      <input
        id="email"
        type="email"
        name="email"
        placeholder="Enter your email"
        onChange={handleChanges}
        //value={note.email}
      />

      <label htmlFor="role">Role</label>

      <input
        id="role"
        type="text"
        name="role"
        placeholder="Enter your role"
        onChange={handleChanges}
        //value={note.role}
      />

      <button type="submit">Add Team Member</button>
    </form>
  );
};

export default NoteForm;
