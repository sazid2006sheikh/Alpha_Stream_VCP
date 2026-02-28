import React from "react";
import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="finalCTA">

      <div className="ctaGlow"></div>

      <h2>
        Ready to experience
        <span> Alpha Stream?</span>
      </h2>

      <p>
        Join thousands already collaborating faster, smoother and more securely.
        Your next meeting is just one click away.
      </p>

      <div className="ctaButtons">

        <Link to="/auth" className="ctaPrimary">
          Get Started Now
        </Link>

        <Link to="/meeting/324qbcd1" className="ctaSecondary">
          Join as Guest
        </Link>

      </div>

      <small>
        No setup required • Start instantly • Free to begin
      </small>

    </section>
  );
}