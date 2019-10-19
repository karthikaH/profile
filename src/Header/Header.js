import React from "react";
import {Link} from "@reach/router";
import headerImage from "../assets/images/headerImage.jpg";
import headerImage1000 from "../assets/images/headerImage-1000.jpg";
import headerImage600 from "../assets/images/headerImage-600.jpg";
import gitImage from "../assets/images/gitImage.png";
import linkedinImage from "../assets/images/linkedinImage.png";
import twitterImage from "../assets/images/twitterImage.svg";
import myImage from "../assets/images/myPhoto.jpg";
import "./Header.scss";
import Title from "../Title/Title";

const Header = () => {
  return (
    <div className="headerContainer">
      <Link to={process.env.PUBLIC_URL + '/'} className="aboutLink">
        <div>About Me</div>
      </Link>
      <Link to={process.env.PUBLIC_URL + '/blogs'} className="blogsLink">
        <div>My Blogs</div>
      </Link>
      <a
        href="https://github.com/karthikaH"
        target="_blank"
        rel="noopener noreferrer"
        className="gitLink">
        <img src={gitImage} alt="git link" className="gitImage"></img>
      </a>
      <a
        href="https://www.linkedin.com/in/karthika-hariharan-71bb1aab/"
        target="_blank"
        rel="noopener noreferrer"
        className="gitLink">
        <img src={linkedinImage} alt="linkedin link" className="linkedinImage"></img>
      </a>
      <a
        href="https://twitter.com/KarthikaHariha4"
        target="_blank"
        rel="noopener noreferrer"
        className="gitLink">
        <img src={twitterImage} alt="twitter link" className="twitterImage"></img>
      </a>
      <picture>
        <source srcSet={headerImage} media="(min-width: 1200px)"></source>
        <source srcSet={headerImage1000} media="(min-width: 800px)"></source>
        <img src={headerImage600} alt="coffee plus working" className="headerImage"></img>
      </picture>
      <img src={myImage} alt="this is how i look" className="myImage shadow"></img>
      <Title/>
    </div>
  );
};

export default Header;
