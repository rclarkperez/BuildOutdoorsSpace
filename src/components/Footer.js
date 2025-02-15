import React, { useEffect } from "react";
import Map from "./Map";
import "../style/ComponentStyle/Footer.css";
import logo from "../photos/Dark Logo.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  useEffect(() => {
    Map();
  }, []);

  return (
    <footer className="ui segment center aligned two column grid" id="footer">
      <div className="column" id="left-column">
        <h3 id="contact-text">LOCATION:</h3>
        <p id="contact-text">4200 SE Columbia Way, Vancouver, WA 98661</p>
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
        <h5 id="contact-text">Find us on Facebook!</h5>
        <a
          target="blank"
          href="https://www.facebook.com/people/Build-Outdoor-Space-Solutions-LLC/100090722932486/"
        >
          <FacebookIcon />
        </a>
      </div>

      <div id="footer-specs" className="ui two column grid text align center">
        <div className="column" id="left-column text alrign center">
          <a href="/">
            <img id="footer-img" src={logo} alt="My logo" />
          </a>
          <h5 id="footer-text">All Rights Reserved</h5>
        </div>

        <div className="ui text align center" id="lower-footer"></div>
      </div>
    </footer>
  );
};

export default Footer;
