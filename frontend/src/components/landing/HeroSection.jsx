import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="heroSection">

      <div className="heroLeft">

        <span className="heroBadge">
          ⚡ Fast • Secure • Reliable Meetings
        </span>

        <h1>
          Experience <span className="highlightText">Alpha Stream</span>  
          <br /> Collaboration at Speed
        </h1>

        <p>
          High-performance video meetings designed for teams, students,
          and creators. Join instantly and collaborate seamlessly.
        </p>

        <div className="heroButtons">

          <Link to="/auth" className="primaryBtn">
            Get Started
          </Link>

          <Link to="/meeting/324qbcd1" className="secondaryBtn">
            Join as Guest
          </Link>

        </div>

        <div className="heroStats">
          <div>
            <h3>A+</h3>
            <p>Users</p>
          </div>

          <div>
            <h3>99.9%</h3>
            <p>Uptime</p>
          </div>

          <div>
            <h3>HD</h3>
            <p>Quality</p>
          </div>
        </div>

      </div>

      <div className="heroRight">
        <img src="./mobile.png" alt="Alpha Stream App" />
      </div>

    </section>
  );
}