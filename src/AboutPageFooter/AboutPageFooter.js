import React from "react";
import "./AboutPageFooter.scss";

const AboutPageFooter = () => {
    return (
        <div className="aboutPageFooterMainContainer">
            <div className="thoughtTitle">Thought for the day</div>
            <div className="thought">
                <span className="quoteStyles" role="img" aria-label="firstquote">❝ </span> 
                <span>Hard work, Honesty & Helping Mentality would take us past the obstacles to Success</span>
                <span className="quoteStyles" role="img" aria-label="secondquote"> ❞</span>
             </div>
             <div className="mailMe">✻ Mail me @ <i>karthikah7760@gmail.com</i> for freelancing ✻</div>
        </div>
    );
};

export default AboutPageFooter;