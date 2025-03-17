import React from "react";
import "../../style/PagesStyle/Excavations.css";
import DesktopSlide from "../Slide";
import MobileCarousel from "../Carousel";

const Excavations = () => {
  return (
    <div>
      <div>
        <br />
        <div id="excavations">
          {/* if desktop display this */}
          <div id="DesktopSlide">
            <DesktopSlide id="DesktopSlide" />
          </div>

          {/* if mobile, display this: */}
          <div id="MobileCarousel">
            <MobileCarousel id="MobileCarousel" />
          </div>
        </div>
      </div>
      <div className="ui" id="excavations-text-content">
        <br />
        <br />

        <p className="b">
          At Build Outdoors Space Solutions LLC we specialize in work related to
          Excavations, Demolitions, Land Clearing, Sewer, Retaining Walls and
          Rain Drain.
        </p>
        <p>
          With a keen focus on precision and safety, we ensure that your
          property is primed and prepared for the construction process,
          providing you with peace of mind and a solid base for your home.
        </p>
        <b>
          Contact us for a free estimate!
          <a href="tel:(360) 907-1509"> (360) 907-1509 </a>
        </b>
      </div>
    </div>
  );
};

export default Excavations;
