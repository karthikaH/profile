import Plotly from 'plotly.js/lib/core';
import createPlotlyComponent from 'react-plotly.js/factory';

// Load in the trace types for scatter
Plotly.register(require('plotly.js/lib/scatter'));

const Plot = createPlotlyComponent(Plotly);

export default Plot;