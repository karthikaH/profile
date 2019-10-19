import React from "react";
import Header from "./Header/Header";
import SkillSet from "./SkillSet/SkillSet";
import Education from "./Education/Education";
import Achievements from "./Achievements/Achievements";

const About = () => {
    return (
        <div>
            <Header/>
            <SkillSet/>
            <Education/>
            <Achievements/>
        </div>
    );
};

export default About;
