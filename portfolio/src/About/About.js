import React from "react";
import "./About.css";
import { ReactComponent as Firebase } from "../images/firebase-icon.svg";
import { ReactComponent as ReactJS } from "../images/reactjs-icon.svg";
import { ReactComponent as CSS } from "../images/icons8-css3.svg";
import { ReactComponent as Vuejs } from "../images/icons8-vuejs (1).svg";
import { ReactComponent as Html } from "../images/w3_html5-icon.svg";
import { ReactComponent as Js } from "../images/icons8-javascript.svg";
import { ReactComponent as MySQL } from "../images/mysql-official.svg";
import { ReactComponent as Mongodb } from "../images/mongodb-icon.svg";
import { ReactComponent as Sequelize } from "../images/sequelize-original.svg";
import { ReactComponent as Figma } from "../images/figma-icon.svg";
import { ReactComponent as Postman } from "../images/postman.svg";
import { ReactComponent as Github } from "../images/github-icon.svg";
import { ReactComponent as Sass } from "../images/icons8-sass.svg";
import { ReactComponent as Vscode } from "../images/icons8-visual-studio-code-2019.svg";
import { ReactComponent as Blender } from "../images/icons8-blender-3d.svg";
import DownloadIcon from "@mui/icons-material/Download";

function About() {
  return (
    <div className="about" id="about">
      <h1>Parcours</h1>
      <div className="about__info">
        <h2>Qui suis-je ?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ea
          recusandae dolores impedit nesciunt odio, voluptate provident, esse
          molestias iure rerum, corporis distinctio! Odio impedit maiores
          consequatur nemo adipisci sequi aut. Ut cum atque dolore animi. Vel
          reiciendis, nisi error ducimus ut vero magnam, exercitationem
          repellendus voluptas aspernatur, corporis mollitia!
        </p>
        <button>
          <p>CV format PDF</p>
          <DownloadIcon />
        </button>
        <div className="about__techno">
          <h2>Technologies sur lesquelles je travaille régulierement</h2>
          <div className="about__tech">
            <div className="about__details">
              <h3>Langages</h3>
              <Js className="icon" />
              <Sass className="icon" />
              <Html className="icon" />
              <CSS className="icon" />
            </div>
            <div className="about__details">
              <h3>Framework and Database</h3>
              <ReactJS className="icon" />
              <Vuejs className="icon" />
              <Sequelize className="icon" />
              <Firebase className="icon" />
              <MySQL className="icon" />
              <Mongodb className="icon" />
            </div>
            <div className="about__details">
              <h3>Outils</h3>
              <Figma className="icon" />
              <Github className="icon" />
              <Vscode className="icon" />
              <Postman className="icon" />
              <Blender className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
