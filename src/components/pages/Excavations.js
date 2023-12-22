import React from "react";
import '../../style/PagesStyle/Excavations.css';

const Excavations = () => {
    return (
        <div>
            <div>
                <div id="excavations"></div> 
                <div className="ui">
                <h2 id="excavations-banner" className="ui center aligned container">Excavations</h2>
            </div>
            </div>
            <div className="ui" id="excavations-text-content">                
                <h2> Residential Escavation</h2>
                <p className="b">
                At Build Outdoors Space, we understand the importance of a solid foundation for every residential project. 
                
                From small-scale home renovations to large custom builds, our skilled team is equipped to handle various 
                
                residential excavation requirements, including foundation digging, land grading, basement excavations, 
                
                and more. 
                </p>
                <p>
                With a keen focus on precision and safety, we ensure that your residential property is primed 
                
                and prepared for the construction process, providing you with peace of mind and a solid base for your dream home.
                </p>
                <b>Contact Us for a Personalized Consultation! 
                <a href="tel:(360) 907-1509"> (360) 907-1509 </a>
                </b>

            </div>
        </div>
    );
};

export default Excavations;