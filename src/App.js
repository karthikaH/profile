import React from "react";
import ReactDOM from "react-dom";
import {Router} from "@reach/router";
import About from "./About";
import Blog from "./Blog";

const App = () => {
  let url = process.env.PUBLIC_URL || '';
  // I beleive that process.env.PUBLIC_URL is useful in case of CRA as it exposes
  // homepage URL of the APP through this env variable and so this hack need not
  // be done
  if (window.location.pathname.includes(`profile`)) {
    url = '/profile'
  }
  return (
    <Router>
      <About path={url + '/'}/>
      <Blog path={url + '/blogs'}/>
    </Router>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
