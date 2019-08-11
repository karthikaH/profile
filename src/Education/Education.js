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
        course: 'Primary<br>School'
    }, {
        percentage: 94,
        year: 2011,
        board: 'ISC',
        institution: 'SV',
        course: 'Secondary<br>School'
    }, {
        percentage: 89.2,
        year: 2015,
        board: '',
        institution: '',
        course: 'UG in ECE'
    }
]

const Education = () => {
    return (
        <div className="educationContainer effect">
            <div className="educationHeader effect">
                <div className="educationHeaderText">My Learning expedition till UG</div>
            </div>
            <div className="educationBody">
                <div className="educationList">
                    <Plot
                        staticPlot
                        responsive
                        useResizeHandler
                        style={{
                        width: "100%",
                        height: "100%"
                    }}
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
                                text: `Completed<br><b>${val.course}`,
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
                </div>
                <div className="educationImageContainer">
                    <img src={education} alt="learning" className="educationImage"></img>
                </div>
            </div>
        </div>
    );
};

export default Education;
