import React from "react";
import About from "./About/About";
import "./App.css";
import Contact from "./Contact/Contact";
import Header from "./Header/Header";
import Info from "./Info/Info";
import Work from "./Work/Work";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <Info />
        <Work />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
