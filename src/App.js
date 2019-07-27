import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header/Header";
import SkillSet from "./SkillSet/SkillSet";
import Education from "./Education/Education";
import Achievements from "./Achievements/Achievements";

const App = () => {
  return (
    <div>
      <Header/>
      <SkillSet/>
      <Education/>
      <Achievements/>
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
