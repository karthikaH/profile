import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header/Header";
import SkillSet from "./SkillSet/SkillSet";
import Education from "./Education/Education";

const App = () => {
  return (
    <div>
      <Header/>
      <SkillSet/>
      <Education/>
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
