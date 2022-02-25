import React from "react";
import "./styles/AboutUs.css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
const AboutUs = () => {
  return (
    <div id="about">
      <div className="aboutUs_container">
        <Fade top>
          <div className="aboutUs_left">
            <div className="aboutUs_title">
              <h2 className="aboutUs_header">About Us</h2>
            </div>
            <div className="aboutUs_text_container">
              <span className="aboutUs_text" lang="en">
                Founded in 2022, Expats Asset Management Services is among
                Lebanon's top property management firms. Being a trusted service
                provider, we offer end-to-end solutions in Property Management,
                Facility Management, Asset Management, Lease Management,
                Handover Services, and Investment Advisory. Expats Asset
                Management has a long, trusted history of managing properties in
                Lebanon across buildings, flats, apartments, lands, villas, and
                office spaces.
              </span>
            </div>
          </div>
        </Fade>
        <Zoom>
          <div className="aboutUs_right">
            <div className="aboutUs_img_container">
              <img
                className="aboutUs_img"
                src="logo.png"
                alt="UID TECH"
              />
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default AboutUs;
