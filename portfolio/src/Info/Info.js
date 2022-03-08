import React from "react";
import "./Info.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";

function Info() {
  return (
    <div className="info">
      <div className="info__sidebar">
        <IconButton>
          <a href="https://github.com/gabrielver">
            <GitHubIcon />
          </a>
        </IconButton>
        <IconButton>
          <a href="https://www.linkedin.com/in/gabriel-verronet/">
            <LinkedInIcon />
          </a>
        </IconButton>
      </div>
      <div className="info__bio">
        <div className="info__title">
          <p>Bonjour, je m'appelle</p>
          <h1>Gabriel Verronet</h1>
          <h2>Je suis développeur web.</h2>
        </div>
        <div className="info__about">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum illo
            veniam maxime blanditiis amet quis dolore itaque, velit dolorem
            molestias! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Eum illo veniam maxime blanditiis amet quis dolore itaque, velit
            dolorem molestias!
          </p>
        </div>
        <button>Contactez-moi !</button>
      </div>
    </div>
  );
}

export default Info;
