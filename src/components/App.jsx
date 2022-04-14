//Import React to allow jsx manipulations
import React from "react";
//----------------------------------------------------------------------
//Import Header, Footer and Note Component
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
//----------------------------------------------------------------------
//Import Notes Object array to be used in App.jsx
import notes from "../notes";
//----------------------------------------------------------------------
function App() {
  return (
    <div>
      <Header />
      {notes.map((note) => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))}
      <Footer />
    </div>
  );
}
//-----------------------------------------------------------------------
//Export App function to be used by index.js
export default App;
//-----------------------------------------------------------------------
