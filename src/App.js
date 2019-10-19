import React from "react";
import ReactDOM from "react-dom";
import {Router} from "@reach/router";
import About from "./About";
import Blog from "./Blog";

const App = () => {
  return (
    <Router>
      <About path={process.env.PUBLIC_URL + '/'}/>
      <Blog path={process.env.PUBLIC_URL + '/blogs'}/>
    </Router>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
