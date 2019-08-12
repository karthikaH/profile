import React from "react";
import "./SkillSet.scss";
import skillSet from "../assets/images/skillSet.jpg";
import skillSet1000 from "../assets/images/skillSet-1000.jpg";
import skillSet600 from "../assets/images/skillSet-600.jpg";
import reactLogo from "../assets/images/reactLogo.svg";
import redux from "../assets/images/redux.png";
import jsLogo from "../assets/images/jsLogo.png";
import htmlLogo from "../assets/images/html5.png";
import cssLogo from "../assets/images/css.svg";
import nodeLogo from "../assets/images/node.png";
import angularLogo from "../assets/images/angular.png";
import plotlyLogo from "../assets/images/plotly.png";
import sassLogo from "../assets/images/sass.png";
import flowLogo from "../assets/images/flow.png";
import imLogo from "../assets/images/immutablejs.png";

const SkillSet = () => {
  return (
    <div className="skillSetContainer effect">
      <div className="skillSetHeader effect">
        <div className="skillSetHeaderText">The tools in my toolbox that undergoes perpetual refinement</div>
      </div>
      <div className="skillSetBody">
        <picture className="skillSetImageContainer">
          <source srcSet={skillSet} media="(min-width: 1200px)"></source>
          <source srcSet={skillSet1000} media="(min-width: 800px)"></source>
          <img src={skillSet600} alt="working with mac" className="skillSetImage"></img>
        </picture>
        <div className="skillSetList">
          <ul className="hexagonalGrid">
            <li className="hexagonalElement">
              <div className="hexagon">
                <img src={reactLogo} alt="React" className="reactLogo"></img>
              </div>
            </li>
            <li className="hexagonalElement">
              <div className="hexagon">
                <img src={redux} alt="Redux" className="reduxLogo"></img>
              </div>
            </li>
            <li className="hexagonalElement">
              <div className="hexagon">
                <img src={jsLogo} alt="Javascript" className="reactLogo"></img>
              </div>
            </li>
            <li className="hexagonalElement">
              <div className="hexagon">
                <img src={htmlLogo} alt="Javascript" className="htmlLogo"></img>
              </div>
            </li>
            <li className="hexagonalElement">
              <div className="hexagon">
                <img src={cssLogo} alt="CSS" className="reduxLogo"></img>
              </div>
            </li>
            <li className="hexagonalElement">
              <div className="hexagon">
                <img src={nodeLogo} alt="Javascript" className="reduxLogo"></img>
              </div>
            </li>
          </ul>
          <ul className="hexagonalGrid second">
            <li className="hexagonalElement">
              <div className="hexagon">
                <img src={angularLogo} alt="Javascript" className="reactLogo"></img>
              </div>
            </li>
            <li className="hexagonalElement">
              <div className="hexagon">
                <img src={plotlyLogo} alt="Javascript" className="reduxLogo"></img>
              </div>
            </li>
            <li className="hexagonalElement">
              <div className="hexagon">
                <img src={sassLogo} alt="Javascript" className="reduxLogo"></img>
              </div>
            </li>
            <li className="hexagonalElement">
              <div className="hexagon">
                <img src={flowLogo} alt="Javascript" className="reduxLogo"></img>
              </div>
            </li>
            <li className="hexagonalElement">
              <div className="hexagon">
                <img src={imLogo} alt="Javascript" className="reactLogo"></img>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
