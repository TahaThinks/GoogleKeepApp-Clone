//Import React to allow for jsx manipulation
import React from "react";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright &copy; {year}</p>
    </footer>
  );
}

//Export the Footer Function to be used as a component for App.jsx
export default Footer;
