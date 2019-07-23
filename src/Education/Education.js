import React from "react";
import "./Education.scss";
import education from "../assets/images/education.jpg";

const Education = () => {
    return (
        <div className="educationContainer">
            <div className="educationHeader">
                <div className="educationHeaderText">My Learning Path</div>
            </div>
            <div className="educationBody">
                <p className="educationList">
                    <span className="educationHeaderName">In 2009,
                    </span>{" "}
                    I completed my 10th grade under
                    <span className="educationHeaderName">
                        &nbsp;ICSC
                    </span>
                    &nbsp;board from
                    <span className="educationHeaderName">
                        &nbsp;Sarvodaya Vidyalaya&nbsp;
                    </span>school with
                    <span className="educationHeaderName">&nbsp;93.57 %.</span>
                    <span className="educationHeaderName">In 2011,
                    </span>{" "}
                    I completed my 12th grade under
                    <span className="educationHeaderName">
                        &nbsp;ISC
                    </span>
                    &nbsp;board from
                    <span className="educationHeaderName">
                        &nbsp;Sarvodaya Vidyalaya&nbsp;
                    </span>school with
                    <span className="educationHeaderName">&nbsp;94 %.</span>
                    <span className="educationHeaderName">In 2015,
                    </span>{" "}
                    I completed undergraduation under
                    <span className="educationHeaderName">
                        &nbsp;Kerala University
                    </span>
                    &nbsp;from
                    <span className="educationHeaderName">
                        &nbsp;Government Engineering College, Barton Hill&nbsp;
                    </span>school with
                    <span className="educationHeaderName">&nbsp;CGPA 8.92.</span>
                </p>
                <div className="educationImageContainer">
                    <img src={education} alt="learning" className="educationImage"></img>
                </div>
            </div>
        </div>
    );
};

export default Education;
