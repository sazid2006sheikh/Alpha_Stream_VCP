import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const benefits = [
  "Instant meeting setup with zero friction",
  "Secure rooms built for privacy",
  "Fluid collaboration experience",
  "Optimized for teams & creators"
];

export default function BenefitsSection() {
  return (
    <section className="benefitSection">

      <div className="benefitLeft">

        <span className="benefitTag">WHY ALPHA STREAM</span>

        <h2>
          Collaboration that feels <span>effortless</span>
        </h2>

        <p>
          Alpha Stream is designed to remove complexity —
          so you can focus on conversation, not configuration.
        </p>

        <ul>
          {benefits.map((item, i) => (
            <li key={i}>
              <FaCheckCircle /> {item}
            </li>
          ))}
        </ul>

      </div>

      <div className="benefitRight">

        <div className="floatingCard card1">
          <h4>+1200 Meetings</h4>
          <p>This week</p>
        </div>

        <div className="floatingCard card2">
          <h4>HD Streaming</h4>
          <p>Ultra smooth quality</p>
        </div>

        <div className="floatingCard card3">
          <h4>Secure Rooms</h4>
          <p>Encrypted sessions</p>
        </div>

      </div>

    </section>
  );
}