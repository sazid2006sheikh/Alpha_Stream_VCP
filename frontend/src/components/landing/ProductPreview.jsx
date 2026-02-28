import React from "react";

export default function ProductPreview() {
  return (
    <section className="productPreviewSection">

      <div className="previewLeft">

        <div className="deviceFrame">
          <img src="./mobile.png" alt="Product Preview" />
        </div>

      </div>

      <div className="previewRight">

        <h2 className="sectionTitle">Real-Time Collaboration Engine</h2>

        <p className="sectionSubtitle">
          Powered by fast routing, secure rooms and optimized streaming
          architecture for seamless communication.
        </p>

        <div className="techGrid">

          <div className="techCard">
            <span>Latency</span>
            <h3>&lt; 100ms</h3>
          </div>

          <div className="techCard">
            <span>Active Sessions</span>
            <h3>1.2K+</h3>
          </div>

          <div className="techCard">
            <span>Encryption</span>
            <h3>AES-256</h3>
          </div>

          <div className="techCard">
            <span>Uptime</span>
            <h3>99.9%</h3>
          </div>

        </div>

      </div>

    </section>
  );
}