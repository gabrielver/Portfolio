import React from "react";
import "./Work.css";
import linkedin from "../images/linkedin.png";
import gmail from "../images/gmail.png";
import p4 from "../images/P4 - template 4.png";
import { ReactComponent as Firebase } from "../images/firebase-icon.svg";
import { ReactComponent as ReactJS } from "../images/reactjs-icon.svg";
import { ReactComponent as CSS } from "../images/icons8-css3.svg";
import { ReactComponent as Vuejs } from "../images/icons8-vuejs (1).svg";
import { ReactComponent as Html } from "../images/w3_html5-icon.svg";
import { ReactComponent as Js } from "../images/icons8-javascript.svg";
import { ReactComponent as MySQL } from "../images/mysql-official.svg";

function Work() {
  return (
    <div className="work" id="work">
      <h1>Projets</h1>
      <div className="work__card1">
        <div className="work__number1">01</div>
        <img src={linkedin} alt=" linkedin" />
        <div className="work__button1">
          <button>
            <a href="https://linkedin-clone-c192c.web.app/">Voir le site</a>
          </button>
          <button>
            <a href="https://github.com/gabrielver/Linkedin-Clone">Github</a>
          </button>
        </div>
        <div className="work__info1">
          <h1>Linkedin Clone</h1>
          <p>
            Here is a Clone of Linkedin with the authentification process and
            the ability to post a message on the main wall. Build with ReactJS
          </p>
          <div className="work__icon1">
            <ReactJS className="icon" />
            <Firebase className="icon" />
            <Html className="icon" />
            <CSS className="icon" />
          </div>
        </div>
      </div>
      <div className="work__card2">
        <div className="work__number2">02</div>
        <img src={gmail} alt=" gmail" />
        <div className="work__button2">
          <button>
            <a href="https://clone-6eed7.web.app/">Voir le site</a>
          </button>
          <button>Github</button>
        </div>
        <div className="work__info2">
          <h1>Gmail Clone</h1>
          <p>
            Here is a Clone of Linkedin with the authentification process and
            the ability to post a message on the main wall. Build with ReactJS
          </p>
          <div className="work__icon2">
            <ReactJS className="icon" />
            <Firebase className="icon" />
            <Html className="icon" />
            <CSS className="icon" />
          </div>
        </div>
      </div>
      <div className="work__card1">
        <div className="work__number1">03</div>
        <img src={p4} alt=" p4" />
        <div className="work__button1">
          <button>Voir le site</button>
          <button>Github</button>
        </div>
        <div className="work__info1">
          <h1>Chat App</h1>
          <p>
            Creation from scratch of a company social plateform
            (authentification, post messages, likes, comment on post)
          </p>
          <div className="work__icon1">
            <Vuejs className="icon" />
            <Js className="icon" />
            <MySQL className="icon" />
            <Html className="icon" />
            <CSS className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
