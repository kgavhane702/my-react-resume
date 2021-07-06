import React, { useState } from "react";
import "./works.scss";
export default function Works() {
  const [currentSlider, setCurrentSlider] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title:
        "ByAllAccounts -  Morningstar India Pvt Ltd, Navi Mumbai Software Engineer – (Sept-2018 – Present)",
      desc: "Java, Spring Boot, Hibernate, Microservices, Docker, Kubernetes, React ",
      img: "• Writing scalable code that could support aggregation for multiple financial institutions. • Handle and intercept http XHR requests. • Timely do peer review to maintain code quality. • Create and maintain configurable scripts.",
    },
    {
      id: "1",
      icon: "./assets/mobile.png",
      title:
        "ByAllAccounts -  Morningstar India Pvt Ltd, Navi Mumbai Software Engineer – (Sept-2018 – Present)",
      desc: "Java, Spring Boot, Hibernate, Microservices, Docker, Kubernetes, React ",
      img: "• Writing scalable code that could support aggregation for multiple financial institutions. • Handle and intercept http XHR requests. • Timely do peer review to maintain code quality. • Create and maintain configurable scripts.",
    },
    {
      id: "1",
      icon: "./assets/mobile.png",
      title:
        "ByAllAccounts -  Morningstar India Pvt Ltd, Navi Mumbai Software Engineer – (Sept-2018 – Present)",
      desc: "Java, Spring Boot, Hibernate, Microservices, Docker, Kubernetes, React ",
      img: "• Writing scalable code that could support aggregation for multiple financial institutions. • Handle and intercept http XHR requests. • Timely do peer review to maintain code quality. • Create and maintain configurable scripts.",
    },
  ];
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2)
      : setCurrentSlider(
          currentSlider < data.length - 1 ? currentSlider + 1 : 0
        );
  };
  return (
    <div className="works" id="works">
      <h1>Projects</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Project</span>
                </div>
              </div>
              <div className="right">{d.img}</div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        alt=""
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        alt=""
        className="arrow right"
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
