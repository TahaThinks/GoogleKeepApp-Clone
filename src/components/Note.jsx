//Import React to allow jsx manipulation
import React from "react";

function Note() {
  return (
    <div className="note">
      <h1>This is the note Title</h1>
      <p>This is the note Content</p>
    </div>
  );
}

//Export the Note Function to be used as a component to App.jsx
export default Note;
