import React from "react";
import "./Contact.css";
import DraftsIcon from "@mui/icons-material/Drafts";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <div className="contact__page">
        <div className="contact__intro">
          <h2>Dites Bonjour !</h2>
          <p>
            N'hesitez pas à me contacter. Je suis toujours ouvert à la
            discussion pour de nouveaux projets, idées créatives et
            opportunitées de travailler avec de nouveaux collaborateurs
          </p>
          <div className="contact__email">
            <div className="contact__logo">
              <DraftsIcon />
            </div>
            <div className="contact__emailInfo">
              <h3>MON EMAILS</h3>
              <p>Verronet.g@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact__form">
        <input type="text" name="name" placeholder="Nom" />
        <input type="text" name="subject" placeholder="Sujet" />
        <input type="email" name="email" placeholder="Email" />
        <input type="text" name="mesage" placeholder="Message" />
        <button type="submit"> ENVOYER LE MESSAGE</button>
      </div>
    </div>
  );
}

export default Contact;
