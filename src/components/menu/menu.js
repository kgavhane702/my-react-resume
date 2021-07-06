import React from "react";
import "./menu.scss";
export default function menu(props) {
  const { menuOpen, setmenuOpen } = props;
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setmenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setmenuOpen(false)}>
          <a href="#technicalSkills">Technical Skills</a>
        </li>
        <li onClick={() => setmenuOpen(false)}>
          <a href="#works">Works</a>
        </li>
        <li onClick={() => setmenuOpen(false)}>
          <a href="#educations">Educations</a>
        </li>
        <li onClick={() => setmenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
