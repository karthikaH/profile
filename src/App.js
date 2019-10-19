import React from "react";
import ReactDOM from "react-dom";
import {Router} from "@reach/router";
import About from "./About";
import Blog from "./Blog";

const App = () => {
  let url = process.env.PUBLIC_URL || '';
  console.log(window.location.pathname);
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
