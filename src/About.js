import React from "react";
import Header from "./Header/Header";
import SkillSet from "./SkillSet/SkillSet";
import Education from "./Education/Education";
import Achievements from "./Achievements/Achievements";
import AboutPageFooter from "./AboutPageFooter/AboutPageFooter";

const About = () => {
    return (
        <div>
            <Header/>
            <SkillSet/>
            <Education/>
            <Achievements/>
            <AboutPageFooter />
        </div>
    );
};

export default About;
