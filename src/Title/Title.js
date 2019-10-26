import React from "react";
import "./Title.scss";

const Title = () => {
  return (
    <div className="titleContainer">
      <div className="titleText">Karthika Hariharan</div>
      <div className="divBand"></div>
      <section className="profileContainer">
        <div className="profileHeaderValue">
          A voracious learner who dives into exploring and coding any language that comes
          along my path, especially frontend.
          <br/>
          Please reach me out at
          <span className="profileHeaderName">`karthikah7760@gmail.com`</span>.
        </div>
      </section>
    </div>
  );
};

export default Title;
