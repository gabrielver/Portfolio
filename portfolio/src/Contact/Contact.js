import React, { useRef } from "react";
import "./Contact.css";
import DraftsIcon from "@mui/icons-material/Drafts";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
init("m2N6bFGiL3HS_eGYc");

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4q8r6vi",
        "template_dbpruup",
        form.current,
        "m2N6bFGiL3HS_eGYc"
      )
      .then(
        (result) => {
          const contactForm = document.getElementsByName("form")[0];
          contactForm.reset();
          const sent = document.getElementsByClassName("contact__send")[0];
          console.log(sent);
          sent.innerHTML = "Message envoyé ! A très vite ...";
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact__page">
        <div className="contact__intro">
          <h2>Dites Bonjour !</h2>
          <p>
            N'hesitez pas à me contacter. Je suis toujours ouvert à la
            discussion pour de nouveaux projets, idées créatives et
            opportunitées de travailler avec de nouveaux collaborateurs.
          </p>
          <div className="contact__email">
            <div className="contact__logo">
              <DraftsIcon />
            </div>
            <div className="contact__emailInfo">
              <h3>MON EMAIL</h3>
              <p>Verronet.g@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="contact__send"></p>
      <div className="contact__form">
        <form name="form" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Nom"
            autoComplete="off"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Sujet"
            autoComplete="off"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            required
          />
          <input
            className="message"
            type="text"
            name="message"
            placeholder="Message"
            autoComplete="off"
            required
          />
          <button type="submit" value="Send">
            ENVOYER LE MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
