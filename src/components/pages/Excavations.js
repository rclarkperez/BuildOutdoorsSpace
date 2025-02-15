import React from "react";
import "../../style/PagesStyle/Excavations.css";

const Excavations = () => {
  return (
    <div>
      <div>
        <div id="excavations"></div>
        <div className="ui">
          <h2 id="excavations-banner" className="ui center aligned container">
            Excavations
          </h2>
        </div>
      </div>
      <div className="ui" id="excavations-text-content">
        {/* <h2> Excavation</h2> */}
        <p className="b" >
          At Build Outdoors Space Solutions LLC we specialize in
          work related to Excavations, Demolitions, Land Clearing, Sewer,
          Retaining Walls and Rain Drain.
        </p>
        <p>
          With a keen focus on precision and safety, we ensure that your
           property is primed and prepared for the construction
          process, providing you with peace of mind and a solid base for your
          home.
        </p>
        <b>
          Contact Us for a free estimate!
          <a href="tel:(360) 907-1509"> (360) 907-1509 </a>
        </b>
      </div>
    </div>
  );
};

export default Excavations;
