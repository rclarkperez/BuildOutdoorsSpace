import React from "react";
import '../../style/PagesStyle/About.css';

const About = () => {
    return (
        <div className="ui center aligned" id="about">
            <div id="grid" className="ui center two column grid">
                <div id="about-photo" className="ui segment column"></div>
                <div id='about-text-content' className="ui column text align center">
                    <div id="about-banner">
                        <h1 id="about-banner-text" className="ui container">Jeanette M. Johnson</h1>
                    </div>

                    <h4>Education</h4>
                    <p id="edu" className="b">
                        University of Arizona 
                        <br/>
                        Honors: Cum Laude 
                        <br/>
                        <br/>
                        University of California, Berkley
                        <br/>
                        B.A.
                        <br/>
                        Honors: cum laude
                        <br/>
                        Major: Business Administration
                        <br/>
                        <br/>
                        <h4>Professional Associations</h4>
                        Thurston County Bar Association Member 2021-Present
                    </p>
                </div>
            </div>
            <div id="about-background">
                <h3>Background</h3>
                    <p className="b">
                    Jeanette M. Johnson received her law degree from the University of Arizona. Prior to her admission to the bar, Jeanette was a legal assistant for ten years gaining invaluable experience in elder law.
                    Jeanette's law practice focuses on estate planning, probates, and guardianships. Jeanette represents families seeking protective arrangements for their loved ones, including guardianships and conservatorships. 
                    Her clients appreciate her compassionate and practical approach to the law.
                    Jeanette lives in Tacoma with her husband, Joe and their two goldendoodles. In her spare time, Jeanette enjoys spending time with her family, hiking, and exploring the many restaurants and food trucks in the Pacific Northwest.
                </p>
            </div>
        </div>
    );
};

export default About;