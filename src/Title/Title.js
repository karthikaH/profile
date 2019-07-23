import React from "react";
import "./Title.scss";

const Title = () => {
  return (
    <div className="titleContainer">
      <div className="titleText">Karthika Hariharan</div>
      <div className="divBand"></div>
      <section className="profileContainer">
        <div className="profileHeaderValue">
          A really passionate learner who loves to explore and code any language
          especially frontend.
          <br/>
          Please reach me out at
          <span className="profileHeaderName">`hariharan.karthika93@gmail.com`</span>.
        </div>
      </section>
    </div>
  );
};

export default Title;
