import React from "react";
import "../App.css";

import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import HowItWorks from "../components/landing/HowItWorks";
import BenefitsSection from "../components/landing/BenefitsSection";
import ProductPreview from "../components/landing/ProductPreview";
import Testimonials from "../components/landing/Testimonials";
import FAQSection from "../components/landing/FAQSection";
import FinalCTA from "../components/landing/FinalCTA";
import Footer from "../components/landing/Footer";



export default function LandingPage() {
  return (
    <div className="landingPageContainer">

      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <BenefitsSection />
      <ProductPreview />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
      <Footer />

    </div>
  );
}