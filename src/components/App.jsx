//Import React to allow jsx manipulations
import React from "react";
//----------------------------------------------------------------------
//Import Header, Footer and Note Component
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <Note />
      <Footer />
    </div>
  );
}

//Export App function to be used by index.js
export default App;
