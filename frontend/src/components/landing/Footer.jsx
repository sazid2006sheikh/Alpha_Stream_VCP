import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footerSection">

      <div className="footerTop">

        <div className="footerBrand">
          <h3>Alpha Stream</h3>
          <p>
            Fast, secure and modern collaboration built for teams and creators.
          </p>
        </div>

        <div className="footerLinks">
          <Link to="/">Home</Link>
          <Link to="/auth">Get Started</Link>
          <Link to="/history">History</Link>
        </div>

      </div>

      <div className="footerBottom">
        <p>© {new Date().getFullYear()} Alpha Stream. All rights reserved.</p>
      </div>

    </footer>
  );
}