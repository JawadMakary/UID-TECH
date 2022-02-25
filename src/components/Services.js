import React from "react";
import "./styles/Services.css";

const Services = ({ icon, title, text }) => {
  return (
    <div id='services' className="wrapper">
      <div className="single-service">
        <div className="social">
       {icon}
        </div>
        <span></span>
        <h3>{title}</h3>    
          <p>{text}</p>

      </div>
    </div>
  );
};

export default Services;
