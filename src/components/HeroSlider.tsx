"use client";

import React, { useState, useEffect } from "react";

const slides = [
  "/images/IMG_9161-.jpg",
  "/images/slideeee-scaled.jpg",
  "/images/111-scaled.jpg",
  "/images/satisfied-customers-thanking-professional-help.jpg",
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section" aria-label="Hero Introduction">
      {/* Background Slides */}
      <div className="hero-slides-wrapper" aria-hidden="true">
        {slides.map((src, idx) => (
          <div
            key={src}
            className={`hero-slide ${idx === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>

      {/* Background Overlay */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* Hero Content Container */}
      <div className="hero-container">
        <h1 className="hero-title">
          Experts in Warehousing &amp; Storage | Logistics &amp; Transport Mgt | Construction | Philanthropy | ESG &amp; CSR | Sustainability | Monitoring &amp; Evaluation (M &amp; E) | UNSDG | Economic Empowerment | Awards &amp; Global Events
        </h1>
      </div>
    </section>
  );
}
