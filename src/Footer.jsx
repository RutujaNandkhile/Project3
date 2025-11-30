import React from "react";
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h4>RutujNavLinkNandkhikle</h4>
          <p>Email: rutujanandkhile17@gmail.com</p>
          <p>Phone: 9356371502</p>
        </div>

        <div className="footer-social">
          <h4>Follow Me</h4>
          <div className="social-icons">
            <NavLink To="#" target="_blank" rel="noreferrer">🌐</NavLink>
            <NavLink To="#" target="_blank" rel="noreferrer">💼</NavLink>
            <NavLink To="#" target="_blank" rel="noreferrer">🐦</NavLink>
          </div>
        </div>
      </div>

      <p className="footer-bottom">
        &copy; {new Date().getFullYear()} RutujNavLinkNandkhikle. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
