import React from "react";
import { FaUserPlus, FaLink, FaVideo } from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus />,
    title: "Join Instantly",
    desc: "Create or join a meeting in seconds without setup."
  },
  {
    icon: <FaLink />,
    title: "Share Link",
    desc: "Send your secure meeting link to anyone instantly."
  },
  {
    icon: <FaVideo />,
    title: "Start Collaborating",
    desc: "Experience smooth HD meetings with real-time interaction."
  }
];

export default function HowItWorks() {
  return (
    <section className="section uniqueHow">

      <h2 className="sectionTitle">How Alpha Stream Works</h2>
      <p className="sectionSubtitle">
        Built to be simple, fast and effortless.
      </p>

      <div className="timeline">

        {steps.map((step, i) => (
          <div className="timelineStep" key={i}>

            <div className="bubble">{step.icon}</div>

            <div className="content">
              <span className="bigNumber">0{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}