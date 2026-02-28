import React, { useState } from "react";

const faqData = [
  {
    question: "Is Alpha Stream free to use?",
    answer:
      "Yes. You can start meetings instantly with the free plan and upgrade later when needed."
  },
  {
    question: "Do guests need an account?",
    answer:
      "No. Guests can join instantly using a shared meeting link without creating an account."
  },
  {
    question: "Is my meeting secure?",
    answer:
      "Absolutely. Sessions are encrypted and built with privacy-first architecture."
  },
  {
    question: "Can I use it on mobile?",
    answer:
      "Yes. Alpha Stream supports desktop, tablet, and mobile devices seamlessly."
  }
];

export default function FAQSection() {

  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faqCreative">

      <h2 className="sectionTitle">Frequently Asked Questions</h2>
      <p className="sectionSubtitle">
        Everything you might want to know before getting started.
      </p>

      <div className="faqContainer">

        {faqData.map((item, i) => (
          <div
            className={`faqCard ${active === i ? "active" : ""}`}
            key={i}
            onClick={() => toggle(i)}
          >

            <div className="faqHeader">
              <h3>{item.question}</h3>
              <span>{active === i ? "−" : "+"}</span>
            </div>

            <div className={`faqAnswer ${active === i ? "show" : ""}`}>
              <p>{item.answer}</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}