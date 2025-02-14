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
          <p className="b" font="Roboto">
            Build Outdoor Space Solutions is a staple in Southwest Washington
            offering top of the line excavation services. We specialize in
            demolitions, sewer repair and installations, property clearing, rain
            drainage and retaining walls.
          </p>
          <b>
            Call today for a complimentary estimate - service is our top
            priority!
            <br />
            <a href="tel:(360) 907-1509"> (360) 907-1509 </a>
          </b>
          <br />
        </div>
      </div>
    </div>
  );
};

export default About;
