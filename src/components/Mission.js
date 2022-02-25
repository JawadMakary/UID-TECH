import React from "react";
import "./styles/Mission.css";
import Fade from "react-reveal/Fade";

const Mission = () => {
  return (
    <div className="mission" id="missions">
      <Fade top>
        <div className="mission_container">
          <div className="mission_center">
            <div className="mission_title">
              <h2 className="mission_header">Our Mission</h2>
            </div>
            <div className="mission_text">
              <p className="mission_p">
                Our mission is to help companies to find the optimal solution
                for their business.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Mission;
