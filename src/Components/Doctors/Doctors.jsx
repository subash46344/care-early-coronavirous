import React from "react";
import "./DoctorsStyle.css";
import DoctorImg1 from "./../../Assets/doctor1.png";
import DoctorImg2 from "./../../Assets/doctor2.png";
import DoImg from "./../../Assets/do.png";

let doctorsCard = [
  {
    id: 1,
    image: DoctorImg1,
    name: "DR.GOLAP DEN",
    paragraph:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look",
    doIcon: DoImg,
  },
  {
    id: 2,
    image: DoctorImg2,
    name: "DR.GOLAP DEN",
    paragraph:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look",
    doIcon: DoImg,
  },
];

const Doctors = () => {
  return (
    <div className="doctors_main_container">
      <h1>WHAT DOCTORS SAY..</h1>
      <div className="doctors_main_container_block">
        {doctorsCard.map((card) => (
          <div key={card.id} className="doctors_sub_container_block">
            <img className="doctor_icon" src={card.image} alt="" />
            <h3>{card.name}</h3>
            <p>{card.paragraph}</p>
            <img className="do_icon" src={card.doIcon} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
