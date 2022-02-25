import React from "react";
import "./styles/Services.css";
import HomeWorkIcon from "@material-ui/icons/HomeWork";

const Services2 = ({ icon, title, text }) => {
  return (
    <div id="services" className="wrapper">
      <div className="single-service">
        <div className="social">
          <HomeWorkIcon />
        </div>
        <span></span>
        <h3>Facility Management</h3>
        <p>- Taking care of Bills</p>
        <p>- Maintaining Tax payments and records</p>
        <p>- Maintaining legal documents</p>
      </div>
    </div>
  );
};

export default Services2;
