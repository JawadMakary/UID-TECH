import React, { useState, useEffect } from "react";
import "./styles/Header.css";
import * as ROUTES from "../constants/routes";
import { Link } from "react-scroll";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
const Header = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [menuItemsVisibility, setMenuItemsVisibility] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 968) {
      setShowBurgerMenu(true);
    } else {
      setShowBurgerMenu(false);
    }
  }, []);

  return (
    <nav className="header" id="header">
      <div className="header_left">
        <div className="header_left_imgContainer">
          <Link to={ROUTES.HOME}>
            <img
              className="header_left_img"
              src="logo.png"
              alt="UID TECH"
            />
          </Link>
        </div>
      </div>
      {!showBurgerMenu ? (
        <div className="header_right">
          <div className="header_right_item">
            <Link to="about" smooth={true} duration={1000}>
              <span className="header_list_item">About Us</span>
            </Link>
          </div>
          <div className="header_right_item">
            <Link to="missions" smooth={true} duration={1000}>
              <span className="header_list_item">Our Mission</span>
            </Link>
          </div>
          <div className="header_right_item">
            <Link to="services" smooth={true} duration={1000}>
              <span className="header_list_item">Services</span>
            </Link>
          </div>

        
        </div>
      ) : (
        <div className="header_right_showMenu">
          {!menuItemsVisibility ? (
            <div className="menuOpen">
              <MenuIcon
                onClick={() => setMenuItemsVisibility(!menuItemsVisibility)}
              />
            </div>
          ) : (
            <div className="nav_body">
              <CloseIcon onClick={() => setMenuItemsVisibility(false)} />
              <nav role="navigation">
                <div id="menuToggle">
                  <ul id="menu">
                    <Link to="about" smooth={true} duration={1000}>
                      <li onClick={() => setMenuItemsVisibility(false)}>
                        About Us
                      </li>
                    </Link>
                    <Link to="mission" smooth={true} duration={1000}>
                      <li onClick={() => setMenuItemsVisibility(false)}>
                        Our Mission
                      </li>
                    </Link>
                    <Link to="services" smooth={true} duration={1000}>
                      <li onClick={() => setMenuItemsVisibility(false)}>
                        Services
                      </li>
                    </Link>
                 
                  </ul>
                </div>
              </nav>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;
