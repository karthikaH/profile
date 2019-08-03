import React from "react";
import "./Achievements.scss";

const Achievements = () => {
    return (
        <div className="achievementsMainContainer">
            <div className="lifeSkillsContainer effect">
                <div className="lifeSkillsHeader effect">
                    <div className="headerText">Life skills</div>
                </div>
                <div className="lifeSkillsBody">
                    <ul className="lifeSkillsList">
                        <li>Waking up with happiness</li>
                        <li>Being with my world - my family</li>
                        <li>Passionate Cooking</li>
                        <li>Devouring the cooked food</li>
                        <li>Coding with excitement</li>
                        <li>Voraciously reading</li>
                        <li>Sleeping peacefully</li>
                        <li>Repeating the above steps</li>
                    </ul>
                </div>
            </div>
            <div className="achievementsContainer effect">
                <div className="achievementsHeader effect">
                    <div className="headerText">Small steps to Triumph</div>
                </div>
                <div className="achievementsBody">
                    <ul className="achievementList">
                        <li>Spot Awards for owning the development & efficiently completing projects
                            even before the release date</li>
                        <li>University topper in fourth semester in college</li>
                    </ul>
                </div>
            </div>
            <div className="hobbiesContainer effect">
                <div className="hobbiesHeader effect">
                    <div className="headerText">Hobbies</div>
                </div>
                <div className="hobbiesBody">
                    <ul className="hobbiesList">
                        <li>Reading Fiction</li>
                        <li>Cooking tasty Mom&apos;s recipies</li>
                        <li>Drawing and painting for friends</li>
                        <li>Working on Side projects</li>
                        <li>Sing and dance with Music</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Achievements;
