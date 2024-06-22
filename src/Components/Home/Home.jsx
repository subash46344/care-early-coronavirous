import React, { useState, useEffect } from "react";
import "./HomeStyle.css";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const contents = [
    {
      title1: "Care early",
      title2: "Coronavirus",
      buttons: ["READ MORE", "ABOUT US"]
    },
    {
      title1: "Care early",
      title2: "Coronavirus",
      buttons: ["READ MORE", "ABOUT US"]
    },
    {
      title1: "Care early",
      title2: "Coronavirus",
      buttons: ["READ MORE", "ABOUT US"]
    },
    // Add more content blocks here if needed
  ];

  const handleScroll = (direction) => {
    setDirection(direction);
    if (direction === "left") {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? contents.length - 1 : prevIndex - 1));
    } else if (direction === "right") {
      setCurrentIndex((prevIndex) => (prevIndex === contents.length - 1 ? 0 : prevIndex + 1));
    }
  };

  useEffect(() => {
    const contentBlock = document.querySelector(".home_main_block_content");
    contentBlock.classList.remove("slide-right", "slide-left");
    // Trigger reflow to restart animation
    void contentBlock.offsetWidth;
    if (direction === "right") {
      contentBlock.classList.add("slide-right");
    } else if (direction === "left") {
      contentBlock.classList.add("slide-left");
    }
  }, [currentIndex, direction]);

  return (
    <div className="home_main_block">
      <div className="scroll_button_icon_left" onClick={() => handleScroll("left")}>
        <i className="fa fa-angle-left"></i>
      </div>
      <div className="home_main_block_content">
        <div className="content_block">
          <h1>{contents[currentIndex].title1}</h1>
          <h1>{contents[currentIndex].title2}</h1>
          <div className="home_main_block_btn">
            {contents[currentIndex].buttons.map((buttonText, btnIndex) => (
              <button key={btnIndex}>{buttonText}</button>
            ))}
          </div>
        </div>
      </div>
      <div className="scroll_button_icon_right" onClick={() => handleScroll("right")}>
        <i className="fa fa-angle-right"></i>
      </div>
    </div>
  );
};

export default Home;
