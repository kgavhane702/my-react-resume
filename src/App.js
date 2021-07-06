import React, { useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import "./app.scss";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/intro";
import { init } from "ityped";
import Portfolio from "./components/portfolio/portfolio";
import Works from "./components/works/works";
import Testimonials from "./components/testimonials/testimonials";
import Contact from "./components/contacts/Contact";
import Menu from "./components/menu/menu";
function App() {
  const percentage = 66;
  const [menuOpen, setmenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
      <Menu menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
      <div className="sections">
        <Intro />

        <Portfolio />
        <Testimonials />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
