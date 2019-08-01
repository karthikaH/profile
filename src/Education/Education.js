import React from "react";
import "./Education.scss";
import education from "../assets/images/education.jpg";
import Plot from '../custom-plotly';

const educationData = [
    {
        percentage: 93.57,
        year: 2009,
        board: 'ICSC',
        institution: 'SV',
        course: '10th'
    }, {
        percentage: 94,
        year: 2011,
        board: 'ISC',
        institution: 'SV',
        course: '12th'
    }, {
        percentage: 89.2,
        year: 2015,
        board: 'Kerala University',
        institution: 'Govt. Engineering College, Barton Hill',
        course: 'B-Tech (ECE)'
    }
]

const Education = () => {
    return (
        <div className="educationContainer effect">
            <div className="educationHeader">
                <div className="educationHeaderText">My Learning expedition till UG</div>
            </div>
            <div className="educationBody">
                <div className="educationList">
                    <Plot
                        data={[{
                            x: educationData.map(val => val.year),
                            y: educationData.map(val => val.percentage),
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: {
                                color: '#E98A15',
                                size: 10
                            },
                            line: {
                                color: '#E98A15',
                                width: 1,
                                shape: 'spline'
                            }
                        }
                    ]}
                        layout={{
                        font: {
                            family: 'Helvetica, sans-serif',
                            color: '#003B36'
                        },
                        margin: {
                            r: 10,
                            l: 10,
                            b: 50,
                            t: 30
                        },
                        yaxis: {
                            rangemode: 'tozero',
                            showgrid: false,
                            zeroline: false,
                            showline: false,
                            showticklabels: false,
                            fixedrange: true
                        },
                        xaxis: {
                            showline: false,
                            showgrid: false,
                            zeroline: false,
                            fixedrange: true
                        },
                        annotations: educationData.map(val => {
                            return {
                                x: val.year,
                                y: val.percentage,
                                xref: 'x',
                                yref: 'y',
                                text: `In <b>${val.year}</b>,<br>passed <b>${val.course}</b><br>under <b>${val.board}</b><br>from <b>${val.institution}</b><br>with <b>${val.percentage}%</b>`,
                                showarrow: true,
                                arrowhead: 7,
                                ax: 0,
                                ay: -100
                            }
                        }),
                        autosize: true,
                        height: 320,
                        paper_bgcolor: '#E8E8E8',
                        plot_bgcolor: '#E8E8E8'
                    }}/>
                </div>{/* <p className="educationList">
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
                </p> */}
                <div className="educationImageContainer">
                    <img src={education} alt="learning" className="educationImage"></img>
                </div>
            </div>
        </div>
    );
};

export default Education;
