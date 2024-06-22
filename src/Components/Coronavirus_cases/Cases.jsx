import React from "react";
import "./CasesStyle.css";
import Case1Img from "./../../Assets/cases1.png";
import Case2Img from "./../../Assets/cases2.png";
import Case3Img from "./../../Assets/cases3.png";
import CoronaIconImg from "./../../Assets/corona_icon.png";

let coronaCases = [
  {
    id: 1,
    image: Case1Img,
    name: "Cases 01",
    paragraph:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look",
    icon: CoronaIconImg,
  },
  {
    id: 2,
    image: Case2Img,
    name: "Cases 02",
    paragraph:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look",
    icon: CoronaIconImg,
  },
  {
    id: 3,
    image: Case3Img,
    name: "Cases 03",
    paragraph:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look",
    icon: CoronaIconImg,
  },
];

const Cases = () => {
  return (
    <div className="cases_main_container">
      <div className="cases_main_container_content">
        <h2>CORONAVIRUS CASES</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at <br /> its layout. The
          point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as <br /> opposed to using 'Content here,
          content here', making it look
        </p>
      </div>
      <div className="cases_main_container_block">
        {coronaCases.map((cases) => (
          <div key={cases.id} className="cases_sub_container_block">
            <div className="cases_sub_container_block_card">
              <img className="corona_img" src={cases.image} alt={cases.name} />
              <h2>{cases.name}</h2>
              <p>{cases.paragraph}</p>
              <img className="corona_icon_img" src={cases.icon} alt="" />
            </div>
            <div className="corona_btn">
              <button>READ MORE</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cases;
