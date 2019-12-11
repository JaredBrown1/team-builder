import React, { useState } from "react";
import "./App.css";
import NoteForm from "./Components/NoteForm";
import Notes from "./Components/Notes";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      name: "Jared",
      email: "jaredbrown1@hotmail.com",
      role: "Web Developer"
    }
  ]);

  const addNewNote = note => {
    const newNote = {
      id: Date.now(),
      name: note.name,
      email: note.email,
      role: note.role
    };

    const newNoteCollection = [...notes, newNote];
    setNotes(newNoteCollection);
  };

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <NoteForm addNewNote={addNewNote} />
      <Notes notes={notes} />
    </div>
  );
}

export default App;
