import React from "react";
import "./topbar.scss";
import { Person, Mail, Cake } from "@material-ui/icons";
export default function Topbar(props) {
  const { menuOpen, setmenuOpen } = props;
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Kiran.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 8788370576</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>
              <a
                href="mailto:kgavhane702@gmail.com"
                style={{ textDecoration: "none" }}
              >
                kgavhane702@gmail.com
              </a>
            </span>
          </div>
          <div className="itemContainer">
            <Cake className="icon" />
            <span>01 November 1993</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setmenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
