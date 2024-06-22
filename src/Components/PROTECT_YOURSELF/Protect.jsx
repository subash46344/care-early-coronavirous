import React from "react";
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
        <div style={{ display: "flex", width: "80%" }}>
          {allCard.map((card) => (
            <div className="protect_sub_block_container">
              <div key={card.id} className="protect_sub_block_card">
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
        <i class="fa fa-arrow-left"></i>
        <i class="fa fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default Protect;
