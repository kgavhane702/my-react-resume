import React, { useEffect, useState } from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import {
  featuredPortfolio,
  webPortfolio,
  contentPortfolio,
  designPortfolio,
  mobilePortfolio,
} from "../../data";
export default function Portfolio() {
  const [selected, setSelected] = useState("languages");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "languages",
      title: "Key Skills",
    },
    {
      id: "editor",
      title: "Editors / IDE",
    },
    {
      id: "database",
      title: "Databases / OS",
    },
    {
      id: "devTools",
      title: "Development / Management Tools",
    },
    {
      id: "analyzer",
      title: "Others",
    },
  ];
  useEffect(() => {
    switch (selected) {
      case "languages":
        setData(featuredPortfolio);
        break;
      case "editor":
        setData(webPortfolio);
        break;

      case "database":
        setData(designPortfolio);
        break;
      case "devTools":
        setData(mobilePortfolio);
        break;
      case "analyzer":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="technicalSkills">
      <h1>Technical Skills</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt={d.title} />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
