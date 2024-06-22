import React from "react";
import "./AboutStyle.css";
import AboutRightImg from './../../Assets/about.png'

const About = () => {
  return (
    <div className="about_main_block">
      <div className="about_sub_block">
        <div className="about_sub_block_left">
          <h1>ABOUT CORONA VIRUS</h1>
          <h2></h2>
          <p>English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for</p>
          <button>ABOUT MORE</button>
        </div>
        <div className="about_sub_block_right">
            <img src={AboutRightImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
