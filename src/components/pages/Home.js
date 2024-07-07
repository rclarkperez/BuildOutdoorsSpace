import React from "react";
import "../../style/PagesStyle/Home.css";

const Home = () => {
  return (
    <div id="home">
      <div className="ui center aligned container" id="text-box">
        <h1 id="text" className="ui center aligned container">
          Excavations, Demolitions, Land Clearing, Sewage, Retaining Walls and
          More!
        </h1>
        <h2 id="text" className="ui center aligned container">
          Call for a personalized consultation!
        </h2>
        <h3 id="text" className="ui center aligned container">
          <a href="tel:(360) 907-1509"> (360) 907-1509 </a>
        </h3>
      </div>
    </div>
  );
};

export default Home;
