import React from "react";
import "./Title.scss";

const Title = () => {
  return (
    <div className="titleContainer">
      <div className="titleText">Karthika Hariharan</div>
      <div className="divBand"></div>
      <section className="profileContainer">
        <div>
          <span className="profileHeaderName">Email: </span>
          <span className="profileHeaderValue">
            hariharan.karthika93@gmail.com
          </span>
        </div>
      </section>
    </div>
  );
};

export default Title;
