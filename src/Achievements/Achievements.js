import React from "react";
import "./Achievements.scss";

const Achievements = () => {
    return (
        <div className="achievementsMainContainer">
            <div className="lifeSkillsContainer">
                <div className="lifeSkillsHeader"></div>
                <div className="lifeSkillsBody"></div>
            </div>
            <div className="achievementsContainer">
                <div className="achievementsHeader"></div>
                <div className="achievementsBody"></div>
            </div>
            <div className="hobbiesContainer">
                <div className="hobbiesHeader"></div>
                <div className="hobbiesBody"></div>
            </div>
        </div>
    );
};

export default Achievements;
