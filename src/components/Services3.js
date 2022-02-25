import React from "react";
import "./styles/Services.css";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";

const Services3 = ({ icon, title, text }) => {
  return (
    <div id="services" className="wrapper">
      <div className="single-service">
        <div className="social">
          <BusinessCenterIcon />
        </div>
        <span></span>
        <h3>Property Management</h3>
        <p>- Regular preventive maintenance visits</p>
        <p>- Emergency corrective maintenance visits</p>
        <p>- Basic building maintenance jobs </p>
      </div>
    </div>
  );
};

export default Services3;
