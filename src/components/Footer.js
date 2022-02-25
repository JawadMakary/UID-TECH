import React from "react";
import "./styles/Footer.css";
// import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Footer = () => {
  // redirection to social media
  const newTabIg = () => {
    window.open("https://www.instagram.com/expats_asset_management/", "_blank");
  };
  const newTagFb = () => {
    window.open(
      "https://www.facebook.com/Expats-Asset-Management-103105382280800/",
      "_blank"
    );
  };
  const newTabWtsp = () => {
    window.open(
      "https://wa.me/96181133684",
      "_blank"
    );
  };

  // const newTabTwitter = () => {
  //   window.open("https://twitter.com/", "_blank");
  // };
  return (
    <div className="footer">
      <footer className="footer__distributed">
        <div className="footer__left">
          {/* <img
          className="footer__logo"
            src="https://i.imgur.com/m0d7MKU.png"
            alt="expatserviceslogo"
            width={200}
          /> */}
          <p
            className="footer__address__header"
            style={{ color: "#002b53", fontWeight: 700, fontSize: "18px" }}
          >
            Address
          </p>
          <p className="" style={{marginTop:"0"}}></p>

          <p className="footer__address__text" style={{color:"#002b53"}}>Lebanon,Beirut,Hamra Street</p>
          <p className="" style={{marginTop:"10px"}}></p>
        </div>
        <div className="footer__center">
          <h3 className="footer__company__about">Contact Us </h3>

          <div className="footer__info__containers">
            <div className="footer__info__container">
              <LocalPhoneIcon
                fontSize="small"
                style={{ color: "#002b53", paddingTop: "4px" }}
              />
              <p className="footer__info"> +9611861040</p> <br />
            </div>
            <div className="footer__info__container">
              <p className="footer__info">
                <EmailIcon
                  fontSize="small"
                  style={{ color: "#002b53", paddingTop: "4px" }}
                />
                marketing@expatsassetmanagement.com
              </p>
            </div>
          </div>
        </div>
        <div className="footer__right">
          <div className="footer_icons_container">
            <p
              className="footer__address__header"
              style={{ color: "#002b53", fontWeight: 700, fontSize: "18px" }}
            >
              Let's Connect
            </p>
            <div className="footer__icons">
              <FacebookIcon
                className="footer_mui_icon"
                style={{ color: "#002b53", marginRight: 30, cursor: "pointer" }}
                onClick={newTagFb}
              />
              <InstagramIcon
                className="footer_mui_icon"
                style={{ color: "#002b53", marginRight: 30, cursor: "pointer" }}
                onClick={newTabIg}
              />
              <WhatsAppIcon
                className="footer_mui_icon"
                style={{ color: "#002b53", marginRight: 30, cursor: "pointer" }}
                onClick={newTabWtsp}
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
