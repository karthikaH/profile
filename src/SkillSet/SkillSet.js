import React from "react";
import "./SkillSet.scss";
import skillSet from "../assets/images/skillSet.jpg";

const SkillSet = () => {
  return (
    <div className="skillSetContainer">
      <div className="skillSetHeader">
        <div className="skillSetHeaderText">My Skills Summary</div>
      </div>
      <div className="skillSetBody">
        <div className="skillSetImageContainer">
          <img
            src={skillSet}
            alt="working with mac"
            className="skillSetImage"
          ></img>
        </div>
        <div className="skillSetList">
          <ul>
            <li>
              <span className="skillHeaderName">Operating Systems:</span>{" "}
              Microsoft Windows, Mac OS, Linux
            </li>
            <li>
              <span className="skillHeaderName">UI Technologies:</span> React
              JS, Redux JS, Angular JS , Angular, Node.js, AJAX, C3.js, Plotly
              Web Related: HTML5, CSS3, SCSS
            </li>
            <li>
              <span className="skillHeaderName">Languages:</span> JavaScript,
              SQL (Beginner), Java (Beginner), HiveQL
            </li>
            <li>
              <span className="skillHeaderName">Databases:</span> MongoDB,
              Cassandra , Hadoop, Teradata
            </li>
            <li>
              <span className="skillHeaderName">Servers:</span> Apache Tomcat,
              Node
            </li>
            <li>
              <span className="skillHeaderName">Mobile Frameworks:</span>{" "}
              Nativescript with Angular 4, Ionic 1, Ionic 3
            </li>
            <li>
              <span className="skillHeaderName">
                Source Code Maintenance and Deployment:
              </span>{" "}
              SVN, GIT, Jenkins, Sonar
            </li>
            <li>
              <span className="skillHeaderName">Cloud:</span> OneOps
            </li>
            <li>
              <span className="skillHeaderName">Unit Testing:</span> Jasmine,
              Karma , Jest
            </li>
            <li>
              <span className="skillHeaderName">Testing:</span> Postman
            </li>
            <li>
              <span className="skillHeaderName">Tools Used:</span> Eclipse 3.2
              and above, Visual Studio Code, atom, IntelliJ, Developer tools
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
