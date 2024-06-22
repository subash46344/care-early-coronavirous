import React from "react";
import "./CoronaStyle.css";
import CoronaLeftImg from "./../../Assets/corona.png";

const Corona = () => {
  return (
    <div className="corona_main_block">
      <div className="corona_sub_block">
        <div className="corona_sub_block_left">
          <img src={CoronaLeftImg} alt="" />
        </div>
        <div className="corona_sub_block_right">
          <h2>CORONAVIRUS </h2>
          <h2>WHAT IT IS? </h2>
          <p>
            when looking at its layout. The point of using Lorem Ipsum is that
            it has a more-or-less normal distribution of letters, as opposed to
            using
          </p>
          <button>ABOUT MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Corona;
