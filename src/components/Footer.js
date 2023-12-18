import React, { useEffect } from "react";
import Map from "./Map"; 
import '../style/ComponentStyle/Footer.css'

const Footer = () => {

    useEffect(()=> {
        Map() 
    }
    ,[]);
    
    return (
        <footer className="ui segment center aligned two column grid" id="footer">
            <div className="column" id="left-column">   
                <h3>LOCATION:</h3>
                <p>1707 Green Mountain Rd, Woodland, WA, 98674</p>
                <div id="map" ></div>
            </div>
            
            <div className="column" id="right-column"> 
                <h3>CONTACT:</h3>
                <h5>Phone:</h5> 
                <a href="tel:PHONE_NUM"> (360) 907-1509 </a>
                <h5>Email:</h5> 
                <p>buildoutdoorsspace@gmail.com</p>
            </div>
            
            <div id='footer-specs' className="ui two column grid text align center">
                <div className="column" id="left-column text alrign center">
                    <a href='/' >
                        <h4 id ="footer-text" className="ui item header">Build Outdoors Space</h4>
                    </a>
                    <h5 id ="footer-text">All Rights Reserved</h5>
                </div>

                <div className="ui text align center" id="lower-footer">
                </div>

            </div>
        </footer>
    );
};

export default Footer;