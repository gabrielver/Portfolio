import React from "react";
import "./Work.css";
import linkedin from "../images/linkedin.png";
import gmail from "../images/gmail.png";
function Work() {
  return (
    <div className="work">
      <h1>Projets</h1>
      <div className="work__card1">
        <div className="work__number1">01</div>
        <img src={linkedin} alt="" />
        <div className="work__button1">
          <button>Voir le site</button>
          <button>Github</button>
        </div>
        <div className="work__info1">
          <h1>Linkedin Clone</h1>
          <p>
            Here is a Clone of Linkedin with the authentification process and
            the ability to post a message on the main wall. Build with ReactJS
          </p>
          <div className="work__icon1">
            <p>icon1</p>
            <p>icon2</p>
            <p>icon3</p>
          </div>
        </div>
      </div>
      <div className="work__card2">
        <div className="work__number2">02</div>
        <img src={gmail} alt="" />
        <div className="work__button2">
          <button>Voir le site</button>
          <button>Github</button>
        </div>
        <div className="work__info2">
          <h1>Gmail Clone</h1>
          <p>
            Here is a Clone of Linkedin with the authentification process and
            the ability to post a message on the main wall. Build with ReactJS
          </p>
          <div className="work__icon2">
            <p>icon1</p>
            <p>icon2</p>
            <p>icon3</p>
          </div>
        </div>
      </div>
      <div className="work__card1">
        <div className="work__number1">03</div>
        <img src="portfolio\images\linkedin.png" alt="" />
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
            <p>icon1</p>
            <p>icon2</p>
            <p>icon3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
