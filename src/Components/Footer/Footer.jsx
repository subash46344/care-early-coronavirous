import React from "react";
import "./FooterStyle.css";
import Map from './../../Assets/map.png'

const Footer = () => {
  return (
    <div className="footer_main_container">
      <div className="footer_main_container_block">
        <div className="footer_sub_container_block">
          <h2>RESOURCES</h2>
          <p className="resources">Home</p>
          <p className="resources">What we do</p>
          <p className="resources">Media</p>
          <p className="resources">Travel Advice</p>
          <p className="resources">Protection</p>
          <p className="resources">Care</p>
        </div>
        <div
          className="footer_sub_container_block about_footer"
        >
          <h2 >ABOUT</h2>
          <p style={{ color: "#fff", fontSize: "16px", lineHeight: '28px', letterSpacing: '0.4px' }}>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various
          </p>
        </div>
        <div className="footer_sub_container_block">
          <h2>CONTACT US</h2>
          <p className="contact_text">
            <i class="fa fa-map-marker"></i>Making this the first true
          </p>
          <p className="contact_text">
            <i class="fa fa-phone"></i>Call : +01 1234567890
          </p>
          <p className="contact_text contact_text_footer_email" >
            <i class="fa fa-envelope"></i><span>Email : mail@domain.com</span>
          </p>
        </div>
        <div className="footer_sub_container_block">
          <h2>COUNTRYS</h2>
          <img className="countary_map_img" src={Map} alt="" />
        </div>
      </div>
      <div className="footer_bottom_line">
      </div>
        <p className="footer_bottom_copyright">© 2045 All Rights Reserved. By HTML Design</p>
    </div>
  );
};

export default Footer;
