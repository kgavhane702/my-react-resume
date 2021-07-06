import { init } from "ityped";
import React, { useEffect, useRef } from "react";
import "./intro.scss";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    if (!textRef.current) {
      return;
    }

    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: [" Morningstar India Pvt. Ltd."],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="Kiran Gavhane"></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello There, I'm </h2>
          <h1>Kiran Gavhane</h1>
          <h3>
            Software Engineer
            <br />
            at
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="Go To Portfolio"></img>
        </a>
      </div>
    </div>
  );
}
