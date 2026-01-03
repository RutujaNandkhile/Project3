import React from "react";
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h4>Rutuja Nandkhile</h4>
          <p>Email: rutujanandkhile17@gmail.com</p>
          <p>Phone: 9356371502</p>
        </div>

        <div className="footer-social">
          <h4>Follow Me</h4>
          <div className="social-icons">
           
            <NavLink
        to="https://www.linkedin.com/in/rutuja-nandkhile-14a85933b/"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        💼
      </NavLink>
            {/* <NavLink To="#" target="" rel="noreferrer">🐦</NavLink> */}
          </div>
        </div>
      </div>

      <p className="footer-bottom">
        &copy; {new Date().getFullYear()} Rutuja Nandkhile. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
