import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import "../style/ComponentStyle/Header.css";
import logo from "../photos/Cropped Logo.jpg";

const options = [
  {
    label: "Excavations",
    address: "/excavations",
  },
  // {
  //   label: "Outdoor Kitchens",
  //   address: "/outdoorKitchens",
  // }

];

const Header = () => {
  const [visibility, toggleVisibility] = useState(true);
  const [mobileDisplay, toggleMobile] = useState(false);

  const mediaMatch = () => {
    if (window.matchMedia("(max-width: 650px)").matches) {
      toggleVisibility(false);
      toggleMobile(true);
    } else {
      toggleVisibility(true);
      toggleMobile(false);
    }
  };

  const regularRender = () => {
    return (
      <div className="ui secondary menu header" id="header">
        <a id="Link" className="item" href="/">
          <img
            id="header-img"
            style={{ height: 150, width: 260, marginBottom: -20, padding: 15 }}
            src={logo}
            alt="My logo"
          />

        </a>
        <a
          onClick={() => {
            window.matchMedia("(max-width: 700px)").matches
              ? toggleVisibility(false)
              : toggleVisibility(true);
          }}
          id="Link"
          className="item"
          href="/"
        >
          <label id="labelHeader">Home</label>
        </a>
        <a
          onClick={() => {
            window.matchMedia("(max-width: 700px)").matches
              ? toggleVisibility(false)
              : toggleVisibility(true);
          }}
          id="Link"
          className="item"
          href="about"
        >
          <label id="labelHeader">About</label>
        </a>
        {/* <div id="Link" className="ui item">
          <Dropdown
            toggleVisibility={toggleVisibility}
            labelId={"labelHeader"}
            options={options}
            selected={"Services"}
          />
        </div> */}
                <a
          onClick={() => {
            window.matchMedia("(max-width: 700px)").matches
              ? toggleVisibility(false)
              : toggleVisibility(true);
          }}
          id="Link"
          className="item"
          href="Excavations"
        >
          <label id="labelHeader">Services</label>
        </a>
        <a
          onClick={() => {
            window.matchMedia("(max-width: 700px)").matches
              ? toggleVisibility(false)
              : toggleVisibility(true);
          }}
          id="Link"
          className="item"
          href="reviews"
        >
          <label id="labelHeader">Reviews</label>
        </a>
        <a
          onClick={() => {
            window.matchMedia("(max-width: 700px)").matches
              ? toggleVisibility(false)
              : toggleVisibility(true);
          }}
          id="Link"
          className="item"
          href="contact"
        >
          <label id="labelHeader">Contact</label>
        </a>
      </div>
    );
  };

  const openRender = () => {
    return (
      <div className="ui secondary menu header floating" id="header">
        <a id="Link" className="item" href="/">
          {/* <h2 id="title">BUILD OUTDOOR SPACE SOLUTIONS LLC</h2> */}
          <img
            id="header-img"
            style={{
              height: 150,
              width: 260,
              marginBottom: -20,
              paddingRight: 15,
              paddingBottom: 20,
            }}
            src={logo}
            alt="My logo"
          />
        </a>
        <i
          id="menu-icon"
          className="fa fa-close"
          onClick={() => {
            toggleVisibility(!visibility);
          }}
        ></i>
        <a
          onClick={() => {
            window.matchMedia("(max-width: 700px)").matches
              ? toggleVisibility(false)
              : toggleVisibility(true);
          }}
          id="Link"
          className="item"
          href="/"
        >
          <label id="labelHeader">Home</label>
        </a>
        <a
          onClick={() => {
            window.matchMedia("(max-width: 700px)").matches
              ? toggleVisibility(false)
              : toggleVisibility(true);
          }}
          id="Link"
          className="item"
          href="about"
        >
          <label id="labelHeader">About</label>
        </a>
        <div id="Link" className="ui item">
          <Dropdown
            toggleVisibility={toggleVisibility}
            isHeader={true}
            labelId={"labelHeader"}
            options={options}
            selected={"Services"}
          />
        </div>
        <a
          onClick={() => {
            window.matchMedia("(max-width: 700px)").matches
              ? toggleVisibility(false)
              : toggleVisibility(true);
          }}
          id="Link"
          className="item"
          href="reviews"
        >
          <label id="labelHeader">Reviews</label>
        </a>
        <a
          onClick={() => {
            window.matchMedia("(max-width: 700px)").matches
              ? toggleVisibility(false)
              : toggleVisibility(true);
          }}
          id="Link"
          className="item"
          href="contact"
        >
          <label id="labelHeader">Contact</label>
        </a>
      </div>
    );
  };

  const closeRender = () => {
    return (
      <div className="ui secondary menu header floating" id="header">
        <a id="Link" className="item" href="/">
          {/* <h2 id="title">BUILD OUTDOOR SPACE SOLUTIONS LLC</h2> */}
          <img
            id="header-img"
            style={{
              height: 150,
              width: 260,
              marginBottom: -20,
              paddingRight: 15,
              paddingBottom: 20,
            }}
            src={logo}
            alt="My logo"
          />
        </a>
        <i
          id="menu-icon"
          style={{ marginTop: "-vh" }}
          className="fa fa-bars"
          onClick={() => {
            toggleVisibility(!visibility);
          }}
        ></i>
      </div>
    );
  };

  useEffect(() => {
    mediaMatch();
    window.addEventListener("resize", mediaMatch, { capture: true });
  }, []);

  return (
    <div
      className="ui secondary pointing fixed top menu header floating"
      id="header"
    >
      {!mobileDisplay
        ? regularRender()
        : visibility
          ? openRender()
          : closeRender()}
    </div>
  );
};

export default Header;
