import React from "react";
import "./styles/Services.css";
import HouseIcon from "@material-ui/icons/House";

const Services = ({ icon, title, text }) => {
  return (
    <div id='services' className="wrapper">
      <div className="single-service">
        <div className="social">
        <HouseIcon />
        </div>
        <span></span>
        <h3>Asset Management</h3>    
          <p>- Sell & rent</p>
          <p>- Collecting rent</p>
          <p>- Appointing lawyers for legal cases.</p>

      </div>
    </div>
  );
};

export default Services;
