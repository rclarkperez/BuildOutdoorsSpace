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
                <p>1348 Dale Avenue, Tacoma, WA 98402</p>
                <div id="map" ></div>
            </div>
            
            <div className="column" id="right-column"> 
                <h3>CONTACT:</h3>
                <h5>Phone:</h5> 
                <p>(253)732-3090</p>
                <h5>Fax:</h5> 
                <p>(253)732-3191</p>
                <h5>Email:</h5> 
                <p>wewillfightforyou@email.com</p>
            </div>
            
            <div id='footer-specs' className="ui two column grid text align center">
                <div className="column" id="left-column text alrign center">
                    <a href='/' >
                        <h4 id ="footer-text" className="ui item header">Jeanette M. Johnson Law</h4>
                    </a>
                    <h5 id ="footer-text">All Rights Reserved</h5>
                </div>

                <div className="ui text align center" id="lower-footer">
                    <a href="privacypolicy" className='item' id ="footer-text">Privacy Policy</a>
                    ||
                    <a className='item' href='disclaimer' id ="footer-text">Disclaimer</a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;