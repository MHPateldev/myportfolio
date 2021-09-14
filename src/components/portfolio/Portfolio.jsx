import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  socialPortfolio,
  ecommercePortfolio,
  reactPortfolio,
  expressPortfolio,djangoPortfolio,inworkPortfolio
} from "../../data";
import { Button } from "@material-ui/core";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "social app",
      title: "Social Apps",
    },
    {
      id:"ecommerce app",
      title:"E-Commerce Apps"
    },
    {
      id: "react app",
      title: "React",
    },
    {
      id: "express app",
      title: "Express",
    },
    {
      id: "django app",
      title: "Django",
    },
    {
      id: "inwork app",
      title: "In-Work",
    }
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "social app":
        setData(socialPortfolio);
        break;
      case "ecommerce app":
        setData(ecommercePortfolio);
        break;
      case "react app":
        setData(reactPortfolio);
        break;
      case "express app":
        setData(expressPortfolio);
        break;
      case "django app":
        setData(djangoPortfolio);
        break;
      case "inwork app":
        setData(inworkPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  const getButton = (item) =>{
    if(item.visit === false){
      return <span></span>
    }
    else return (
      <Button variant="contained" color="primary" size="small" className="button">
        <a href={item.visit}> Visit </a>
      </Button>
    ); ;   
  }

  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
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
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
            <div className="foot">
              {getButton(d)}
              <Button variant="contained" size="small" className="bot">
                <a href={d.srcCode}>Git</a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
