import React from "react";

const testimonials = [
  {
    name: "Aman Verma",
    role: "Frontend Developer",
    text: "Alpha Stream feels extremely smooth. Meetings start instantly without any friction."
  },
  {
    name: "Sara Khan",
    role: "Product Designer",
    text: "The clean interface and reliability make collaboration effortless for our team."
  }
];

export default function Testimonials() {
  return (
    <section className="trustSection">

      <div className="trustHeader">
        <h2 className="sectionTitle">Trusted & Reliable</h2>
        <p className="sectionSubtitle">
          Designed with stability, performance and security at its core.
        </p>
      </div>

      {/* TRUST METRICS */}
      <div className="trustMetrics">

        <div className="metricCard">
          <h3>99.9%</h3>
          <p>Service Uptime</p>
        </div>

        <div className="metricCard">
          <h3>1K+</h3>
          <p>Active Users</p>
        </div>

        <div className="metricCard">
          <h3>Secure</h3>
          <p>Encrypted Sessions</p>
        </div>

      </div>

      {/* USER TESTIMONIALS */}
      <div className="testimonialGrid">
        {testimonials.map((item, i) => (
          <div className="testimonialCard" key={i}>
            <p>“{item.text}”</p>

            <div className="userInfo">
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}