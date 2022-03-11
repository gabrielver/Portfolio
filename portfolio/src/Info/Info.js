import React from "react";
import "./Info.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";

function Info() {
  return (
    <div className="info" id="info">
      <div className="info__sidebar">
        <IconButton>
          <a
            href="https://github.com/gabrielver"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
        </IconButton>
        <IconButton>
          <a
            href="https://www.linkedin.com/in/gabriel-verronet/"
            target="_blank"
            rel="noopener noreferrer"
          >
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
            Je suis developpeur front-end et Backend avec une affection
            particulière pour les belles interfaces design UX/UI qui apporterons
            une experience digital exceptionnelle.
          </p>
        </div>

        <a href="#contact">
          <button>Contactez-moi !</button>
        </a>
      </div>
    </div>
  );
}

export default Info;
