import React from "react";
//Components Imports
// _________________
// _________________
// _________________
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Services from "../../components/Services";
import AboutUs from "../../components/AboutUs";
import Footer from "../../components/Footer";

// import Mission from "../../components/Mission";
import "./Home.css";
import Mission from "../../components/Mission";
// Material UI icons imports
// _________________________
// _________________________
// _________________________
import HttpIcon from "@material-ui/icons/Http";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import WebIcon from "@material-ui/icons/Web";
// additional dependencies import
// _________________________
// _________________________
// _________________________
import Zoom from "react-reveal/Zoom";
const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <Header />
        <Banner />
      </div>
      <div className="home_content">
        <AboutUs />
        <Mission />

        <div className="service_component_container">
          <Zoom>
            <div className="services_container">
              <h2 className="services_header">Our Services</h2>
              <div className="team_head">
                <div className=" team_header_und title-underline center">
                  <span></span>
                </div>
              </div>
            </div>
          </Zoom>
          <div className="service_items">
            {/* <Services
              icon={<HouseIcon />}
              title={"Asset Management"}
              text={
                "Sell,rent,collecting \nrent and appointing lawyers for legal cases."
              }
            />
            <Services
              icon={<HomeWorkIcon />}
              title={"Facility Management"}
              text={
                "taking care of the bills , maintaining tax payments and other legal matters."
              }
            />
            <Services
              icon={<BusinessCenterIcon />}
              title={"Property Management"}
              text={"regular preventive maintenance visits."}
            /> */}
            <Services
              title={"Web development"}
              icon={<HttpIcon fontSize="large" />}
            />
            <Services
              title={"App development"}
              icon={<PhoneAndroidIcon fontSize="large" />}
            />
            <Services
              title={"UI-UX design"}
              icon={<WebIcon fontSize="large" />}
            />
          </div>
        </div>
      </div>
      <div className="home_footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
