import React from "react";
import "./SkillSet.scss";
import skillsData from "./SkillSetData";

const SkillSet = () => {
  return (
    <div className="skillSetContainer effect">
      <div className="skillSetHeader effect">
        <div className="skillSetHeaderText">The tools in my toolbox that undergoes perpetual refinement</div>
      </div>
      <div className="skillSetBody">
        <div className="skillSetList">
          {skillsData.map((skill) => (
              <div className="skillsCircle" key={skill.skillName}>
                <span className="skills">{skill.skillName}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
