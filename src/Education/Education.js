import React from "react";
import "./Education.scss";
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
        course: 'Under Graduation <br>in Electronics & Communication'
    }
]

const Education = (props) => {
    const {theme} = props;
    return (
        <div className="educationContainer effect">
            <header className="educationHeader effect">
                <div className="educationHeaderText">My Learning expedition till UG</div>
            </header>
            <div className="educationBody">
                <div className="educationList">
                    <Plot
                        responsive
                        useResizeHandler
                        style={{
                        width: "100%",
                        height: "100%"
                        }}
                        config={{displayModeBar: false}}
                        data={[{
                            x: educationData.map(val => val.year),
                            y: educationData.map(val => val.percentage),
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: {
                                color: 'rgb(255, 255, 255)',
                                size: 20,
                                line: {
                                  color: theme !== 'dark'?'#E98A15':'#231F20',
                                  width: 2
                                },
                            },
                            line: {
                                color: theme !== 'dark'?'#E98A15':'#231F20',
                                width: 2,
                                shape: 'spline'
                            }
                        }
                    ]}
                        layout={{
                        font: {
                            family: 'Source Sans Pro, sans-serif',
                            color: theme !== 'dark'?'#003B36':'#231F20'
                        },
                        margin: {
                            r: 10,
                            l: 10,
                            b: 100,
                            t: 150
                        },
                        yaxis: {
                            rangemode: 'tozero',
                            showgrid: false,
                            zeroline: false,
                            showline: false,
                            showticklabels: false,
                            fixedrange: true,
                            range: [88, 95]
                        },
                        xaxis: {
                            showline: false,
                            showgrid: false,
                            zeroline: false,
                            fixedrange: true,
                            tickvals: [
                                2009, 2011, 2015
                            ],
                            ticktext: ["Mar, 2009", "Mar, 2011", "May, 2015"]
                        },
                        annotations: educationData.map(val => {
                            return {
                                x: val.year,
                                y: val.percentage,
                                xref: 'x',
                                yref: 'y',
                                text: `<b>${val.course}</b>`,
                                showarrow: true,
                                arrowhead: 6,
                                ax: 0,
                                ay: -70
                            }
                        }),
                        staticPlot: true,
                        autosize: true,
                        height: 320,
                        paper_bgcolor: theme !== 'dark'?'#E8E8E8':'#AFACAC',
                        plot_bgcolor: theme !== 'dark'?'#E8E8E8':'#AFACAC'
                    }}/>
                </div>
            </div>
        </div>
    );
};

export default Education;
