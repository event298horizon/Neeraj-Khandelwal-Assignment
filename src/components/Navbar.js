import React from "react";
import {Link} from "react-router-dom";

export default function Navbar() {
  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
  function myFunction() {
    document.getElementById("myDropdownPortfolio").classList.toggle("show");
  }
  function myFunction2() {
    document.getElementById("myDropdownResume").classList.toggle("show");
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".element")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  return (
    <>
      <nav className="nav">
        <p>
          <Link to="/" className="element">
            Home
          </Link>
        </p>
        <p>
          <Link to="/about" className="element">
            About
          </Link>
        </p>
        <p onClick={myFunction}>
          <div className="element dropdown">Portfolio <i class="arrow down"></i></div>
          <div id="myDropdownPortfolio" className="dropdown-content">
            <Link to="/portfolio-link1">Link 1</Link>
            <Link to="/portfolio-link2">Link 2</Link>
            <Link to="/portfolio-link3">Link 3</Link>
          </div>
        </p>
        <p onClick={myFunction2}>
          <div className="element dropdown">Resume <i class="arrow down"></i></div>
          <div id="myDropdownResume" className="dropdown-content">
            <Link to="/resume-link1">Link 1</Link>
            <Link to="/resume-link2">Link 2</Link>
            <Link to="/resume-link3">Link 3</Link>
          </div>
        </p>
        <p>
          <Link to="/download" className="element">
            Download
          </Link>
        </p>
        <p>
          <Link to="/contact" className="element">
            Contact
          </Link>
        </p>
      </nav>
    </>
  );
}
