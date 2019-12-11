import React, { useState } from "react";

const NoteForm = ({ addNewNote }) => {
  const [note, setNote] = useState({ id: "", title: "", body: "" });

  const handleChanges = event => {
    setNote({ ...note, [event.target.value]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    addNewNote(note);

    setNote({ title: "", body: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor>Name</label>

      <input id="name" type="text" name="name" placeholder="Enter your name" />

      <label htmlFor="email">Email</label>

      <input
        id="email"
        type="email"
        name="email"
        placeholder="Enter your email"
      />

      <label htmlFor="role">Role</label>

      <input id="role" type="text" name="role" placeholder="Enter your role" />
    </form>
  );
};

export default NoteForm;
