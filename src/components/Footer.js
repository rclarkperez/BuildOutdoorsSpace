import React, { useEffect } from "react";
import Map from "./Map";
import "../style/ComponentStyle/Footer.css";
import logo from "../photos/Dark Logo.jpg";

const Footer = () => {
  useEffect(() => {
    Map();
  }, []);

  return (
    <footer className="ui segment center aligned two column grid" id="footer">
      <div className="column" id="left-column">
        <h3 id="contact-text">LOCATION:</h3>
        <p id="contact-text">7107 Green Mountain Rd, Woodland, WA, 98674</p>
        <div id="map"></div>
      </div>

      <div className="column" id="right-column">
        <h3 id="contact-text">CONTACT:</h3>
        <h5 id="contact-text">Phone:</h5>
        <a id="contact-text" href="tel:(360) 907-1509">
          {" "}
          (360) 907-1509{" "}
        </a>
        <h5 id="contact-text">Email:</h5>
        <p id="contact-text">buildoutdoorsspace@gmail.com</p>
      </div>

      <div id="footer-specs" className="ui two column grid text align center">
        <div className="column" id="left-column text alrign center">
          <a href="/">
            <img
              id="footer-img"
              style={{ height: 110, width: 370 }}
              src={logo}
              alt="My logo"
            />
          </a>
          <h5 id="footer-text">All Rights Reserved</h5>
        </div>

        <div className="ui text align center" id="lower-footer"></div>
      </div>
    </footer>
  );
};

export default Footer;
