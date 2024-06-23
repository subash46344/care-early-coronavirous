import React, { useState, useEffect } from "react";
import "./ProtectStyle.css";
import ProIcon1 from "./../../Assets/pro1.png";
import ProIcon2 from "./../../Assets/pro2.png";
import ProIcon3 from "./../../Assets/pro3.png";

const allCard = [
  {
    id: 1,
    image: ProIcon1,
    name: "Wear Mask",
    paragraph:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for",
  },
  {
    id: 2,
    image: ProIcon2,
    name: "Wash Your Hand",
    paragraph:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for",
  },
  {
    id: 3,
    image: ProIcon3,
    name: "Stay at Home",
    paragraph:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for",
  },
];

const Protect = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const nextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === allCard.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? allCard.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setVisibleCards(1);
      } else if (window.innerWidth < 900) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCardList = [];
  for (let i = 0; i < visibleCards; i++) {
    const index = (currentIndex + i) % allCard.length;
    visibleCardList.push(allCard[index]);
  }

  return (
    <div className="protect_main_block">
      <div className="protect_main_block_content">
        <h2>HOW TO PROTECT YOURSELF</h2>
        <p>
          when looking at its layout. The point of using Lorem Ipsum is that it
          has a more-or-less normal distribution of letters, as opposed to using
        </p>
      </div>
      <div className="protect_sub_block">
        <div className="protect_sub_block_slider">
          {visibleCardList.map((card) => (
            <div key={card.id} className="protect_sub_block_container">
              <div className="protect_sub_block_card">
                <img src={card.image} alt={card.name} />
                <h3>{card.name}</h3>
                <p>{card.paragraph}</p>
              </div>
              <button className="btn">READ MORE</button>
            </div>
          ))}
        </div>
      </div>
      <div className="cursor_icon">
        <i className="fa fa-arrow-left" onClick={prevCard}></i>
        <i className="fa fa-arrow-right" onClick={nextCard}></i>
      </div>
    </div>
  );
};

export default Protect;
