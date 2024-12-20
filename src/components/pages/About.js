import React from "react";
import "../../style/PagesStyle/About.css";
import about from "../../photos/Alex About.jpeg";
//
const About = () => {
  return (
    <div className="ui center aligned" id="about">
      <div id="grid" className="ui center two column grid">
        <img id="about-photo" src={about} alt="My logo" />
        <div id="about-text-content" className="ui column text align center">
          <div id="about-banner">
            <h1 id="about-banner-text" className="ui container">
              Alex Kulchitskiy
            </h1>
          </div>
          <p className="b">
            Alex Kulchitskiy grew up near the small city of Pervomais'k,
            Ukraine. Over twenty years ago, Alex and his family had the
            opportunity to move to the United States and have been living in
            Southwest Washington ever since.
          </p>
          <p className="b">
            Alex has over two decades of experience in the construction
            industry, and has focused on excavation for the last five years.
            Build Outdoor Space Solutions (B.O.S.S.) is his company and
            specializes in excavation work such as property/backyard clearing,
            sewage, demolition, retaining walls, rain drainage as well as
            outdoor kitchens.
          </p>
          <p className="b">
            Alex lives in Woodland, WA with his wife of nearly thirty years, and
            their children. When not working, Alex spends his time with family
            and helping his local church community assist Ukrainian refugees
            adapt to life in the United States.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default About;
