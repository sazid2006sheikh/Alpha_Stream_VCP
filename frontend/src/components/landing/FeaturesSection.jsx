import React from "react";
import { FaBolt, FaShieldAlt, FaVideo, FaGlobe } from "react-icons/fa";

const features = [
  {
    icon: <FaBolt />,
    title: "Lightning Fast",
    desc: "Real-time low latency meetings engineered for smooth collaboration."
  },
  {
    icon: <FaShieldAlt />,
    title: "Enterprise Security",
    desc: "Encrypted sessions and secure rooms built for privacy."
  },
  {
    icon: <FaVideo />,
    title: "Crystal HD Video",
    desc: "Experience clear audio and HD streaming quality everywhere."
  },
  {
    icon: <FaGlobe />,
    title: "Multi Device Access",
    desc: "Join instantly from desktop, mobile or tablet seamlessly."
  }
];

export default function FeaturesSection() {
  return (
    <section className="section featuresSection">

      <div className="featuresHeader">
        <h2 className="sectionTitle">Built for Modern Collaboration</h2>
        <p className="sectionSubtitle">
          Powerful tools designed to make your meetings faster, safer and smarter.
        </p>
      </div>

      <div className="featuresGrid">
        {features.map((item, i) => (
          <div className="featureCardPremium" key={i}>
            <div className="iconCircle">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}