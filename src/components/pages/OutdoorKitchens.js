import React from "react";
import "../../style/PagesStyle/OutdoorKitchens.css";

const OutdoorKitchens = () => {
  return (
    <div>
      <div id="outdoorKitchens"></div>
      <div className="ui">
        <h2 id="outdoorKitchens-banner" className="ui center aligned container">
          Outdoor Kitchens
        </h2>
      </div>
      <br />
      <div className="ui" id="outdoorKitchens-text-content">
        <p className="b">
          Let us help you create the ideal environment for outdoor cooking. In
          addition to our main services around excavation, we do also specialize
          in work for outdoor kitchen remodels.
        </p>
        <p className="b">
          <b>
            Contact Us for a Personalized Consultation!
            <a href="tel:(360) 907-1509"> (360) 907-1509 </a>
          </b>
        </p>
      </div>
    </div>
  );
};

export default OutdoorKitchens;
