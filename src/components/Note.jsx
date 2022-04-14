//Import React to allow jsx manipulation
import React from "react";
//-----------------------------------------------------------------------

function Note(note) {
  return (
    <div className="note">
      <h1>{note.title}</h1>
      <p>{note.content}</p>
    </div>
  );
}
//-----------------------------------------------------------------------
//Export the Note Function to be used as a component to App.jsx
export default Note;
//-----------------------------------------------------------------------
