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
              Build Outdoor Space Solutions
            </h1>
          </div>
          <p className="b" id="about-text-body">
            Build Outdoor Space Solutions specializes in excavations and serves
            clients throughout Southwest Washington and the Portland metro area.
            Specifically, our team has depth of experience in demolitions, sewer
            line repair and installation, property clearing, rain drainage and
            retaining walls.
          </p>

          <p className="b" id="about-text-body">
            The team is led by Alex Kulchitskiy, a seasoned professional with
            over 20 years in the construction industry. Alex's wide breadth of
            experience is invaluable in all aspects of a project.
          </p>
          <b>
            Call today for a free estimate!
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
