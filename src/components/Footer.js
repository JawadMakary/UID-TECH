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
    window.open("https://instagram.com/uidtech?utm_medium=copy_link", "_blank");
  };
  const newTagFb = () => {
    window.open("https://www.facebook.com/Uidtech/", "_blank");
  };
  const newTabWtsp = () => {
    window.open("https://wa.me/96176029971", "_blank");
  };

  // const newTabTwitter = () => {
  //   window.open("https://twitter.com/", "_blank");
  // };
  return (
    <div className="footer">
      <footer className="footer__distributed">
        <div className="footer__left">
       
          <p
            className="footer__address__header"
            style={{ color: "#3056df", fontWeight: 700, fontSize: "18px" }}
          >
            Address
          </p>
          <p className="" style={{ marginTop: "0" }}></p>

          <p className="footer__address__text" style={{ color: "#3056df" }}>
            Lebanon, miniyeh 
          </p>
          <p className="" style={{ marginTop: "10px" }}></p>
        </div>
        <div className="footer__center">
          <h3 className="footer__company__about">Contact Us </h3>

          <div className="footer__info__containers">
            <div className="footer__info__container">
              <LocalPhoneIcon
                fontSize="small"
                style={{ color: "#3056df", paddingTop: "4px" }}
              />
              <p className="footer__info"> +961 76 029 971</p> <br />
            </div>
            <div className="footer__info__container">
              <p className="footer__info">
                <EmailIcon
                  fontSize="small"
                  style={{ color: "#3056df", paddingTop: "4px" }}
                />
                Radwanrima0@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="footer__right">
          <div className="footer_icons_container">
            <p
              className="footer__address__header"
              style={{ color: "#3056df", fontWeight: 700, fontSize: "18px" }}
            >
              Let's Connect
            </p>
            <div className="footer__icons">
              <FacebookIcon
                className="footer_mui_icon"
                style={{ color: "#3056df", marginRight: 30, cursor: "pointer" }}
                onClick={newTagFb}
              />
              <InstagramIcon
                className="footer_mui_icon"
                style={{ color: "#3056df", marginRight: 30, cursor: "pointer" }}
                onClick={newTabIg}
              />
              <WhatsAppIcon
                className="footer_mui_icon"
                style={{ color: "#3056df", marginRight: 30, cursor: "pointer" }}
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
