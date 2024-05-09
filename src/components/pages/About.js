import React from "react";
import "../../style/PagesStyle/About.css";
import logo from "../../photos/Alex About.jpeg";
//
const About = () => {
  return (
    <div className="ui center aligned" id="about">
      <div id="grid" className="ui center two column grid">
        <img id="about-photo" style={{ width: 570 }} src={logo} alt="My logo" />
        <div id="about-text-content" className="ui column text align center">
          <div id="about-banner">
            <h1 id="about-banner-text" className="ui container">
              Alex Kulchitskiy{" "}
            </h1>
          </div>
          <p className="b">
            With over a decade of experience, Alex Kulchitskiy and his dedicated
            family bring invaluable expertise to the construction industry in
            Southwest Washington. Specializing in top-tier excavation services
            and outdoor kitchen remodels, his family business has fostered a
            reputation for excellence. Meticulous craftsmanship and personalized
            solutions define every project, showing an unwavering commitment to
            quality and customer satisfaction.
          </p>
          <br />
          <p className="b">
            The family team combines technical skills with a creative vision,
            transforming outdoor spaces into captivating and functional
            environments. From ground-breaking excavation work to seamless
            integration of custom outdoor kitchen installations, their
            dedication to precision and artistry remains the cornerstone of
            their esteemed service. Your outdoor project is not just a job to
            them—it's a passion, a commitment to transforming spaces into
            something extraordinary.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
