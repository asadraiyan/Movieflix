import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <div className="socialIcons">
          <a
            href="https://m.facebook.com/asad.raiyan?mibextid=ZbWKwL"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/asad.raiyan/?igshid=ZDdkNTZiNTM%3D"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/raiyan_asad?t=vzNMJaOErNJDbeT5XjOR4A&s=09"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/asad-raiyan-486326188"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <FaLinkedin />
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
