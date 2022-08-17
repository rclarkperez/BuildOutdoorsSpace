import React from "react";
import '../../style/PagesStyle/About.css';

const About = () => {
    return (
        <div className="ui center aligned" id="about">
            <div id="grid" className="ui center two column grid">
                <div id="about-photo" className="ui segment column"></div>
                <div id='about-text-content' className="ui column text align center">
                    <div id="about-banner">
                        <h1 id="about-banner-text" className="ui container">Amanda K Clark</h1>
                    </div>

                    <h4>Education</h4>
                    <p id="edu" className="b">
                        University of Idaho College of Law, Boise, Idaho
                        <br/>
                        Honors: Dean’s List
                        <br/>
                        <br/>
                        Washington State University, Pullman, Washington
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
                    Amanda K. Clark received her law degree from the University of Idaho, College of Law. Prior to her admission to the bar, Amanda was a legal assistant for six years gaining invaluable experience in family and elder law.
                    Amanda's law practice focuses on estate planning, probates, and adult guardianships. Amanda represents families seeking protective arrangements for their loved ones, including guardianships and conservatorships. 
                    Her clients appreciate her compassionate and practical approach to the law.
                    Amanda lives in Tacoma with her husband, Ryan. In her spare time, Amanda enjoys spending time with her family, hiking, and exploring the many restaurants and food trucks in the Pacific Northwest.
                </p>
            </div>
        </div>
    );
};

export default About;