import React from "react";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import imageArray from "./ImageArray.js";

const MobileCarousel = () => {
  return (
    <div styles={{ styles }} id="MobileCarousel">
      <Carousel styles={{ styles }}>
        {imageArray.map((image, index) => (
          <div index={index}>
            <img src={image.src} />
            <p className="legend">{image.legend}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MobileCarousel;
