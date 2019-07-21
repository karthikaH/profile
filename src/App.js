import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header/Header";
import SkillSet from "./SkillSet/SkillSet";

const App = () => {
  return (
    <div>
      <Header />
      <SkillSet />
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
