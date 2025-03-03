import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../style/ComponentStyle/Slide.css";
import imageArray from "./ImageArray.js";

const DesktopSlide = () => {
  return (
    <div style={{ paddingLeft: "20%", width: "80%" }}>
      <Slide>
        {imageArray.map((image, index) => (
          <div key={index} className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${image.src})`,
                height: "100%",
                width: "100%",
                backgroundPosition: "center",
                backgroundSize: "cover",
                position: "relative",
              }}
            >
              <span>{image.legend}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default DesktopSlide;
