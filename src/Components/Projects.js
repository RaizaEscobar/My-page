import React from "react";
import CardItem from "./CardItem";
import "./Projects.css";

function Cards() {
  return (
    <div className="cards" id="Myprojects">
      <h4 className="wordCarousel">
        <span>Check out my projects: </span>
        <div>
          <ul className="flip4">
            <li>Javascript</li>
            <li>React.js</li>
            <li>Css/Html</li>
            <li>Node.js </li>
          </ul>
        </div>
      </h4>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items ">
            <CardItem
              src="images/split-and-share.png"
              text="split and share: Find a perfect flatmate, a perfect flat and calculate the fair price for your room"
              label="react.js, node.js, axios, MongoDb"
              path="https://split-and-share.herokuapp.com/"
              color="#F2F1EC"
              githubLink="https://github.com/RaizaEscobar/splitandshare-frontend"
            />
            <CardItem
              src="images/wit.png"
              text="Women in tech : a website designed to close the gender gap that exists in the tech industry, by helping women who work in the tech sector to network through events. the main goal is to motivate more women to build businesses or to choose a career in the digital industry
"
              label="hbs, node.js"
              path="https://women-in-tech-ih.herokuapp.com/"
              color="#0c7489"
              githubLink="https://github.com/RaizaEscobar/Women-in-tech"
            />
          </ul>
          <ul className="cards__items ">
            <CardItem
              src="images/wedding.png"
              text="Wedding Page"
              label="react.js, node.js, axios, MongoDb"
              path="https://boris-y-raisa.herokuapp.com/home/it"
              color="#F2F1EC"
              githubLink="https://github.com/RaizaEscobar/Wedding-Page"
            ></CardItem>
            <CardItem
              src="images/moveki.png"
              text="Mo Ve Ki: If choosing between so many restaurant options stresses you out, you are tired of always going to the same ones you know or you simply like adventure, then Moveki is for you."
              label="react.js, tailwind, react-bootstrap"
              path="https://moveki.netlify.app/"
              color="#002642"
              githubLink="https://github.com/RaizaEscobar/Moveki"
            ></CardItem>

            <CardItem
              src="images/wip.png"
              text="Personal Page Margarita Aleks (Under construction)"
              label="react.js"
              path="#"
            ></CardItem>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
