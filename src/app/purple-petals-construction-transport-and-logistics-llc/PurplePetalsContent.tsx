"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import ContactCTA from "@/components/ContactCTA";

const heroSlides = [
  "/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-03-at-6.25.14-AM1.jpeg",
  "/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-03-at-6.25.14-AM.jpeg",
  "/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-03-at-6.25.12-AM1.jpeg",
  "/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-03-at-6.25.11-AM1.jpeg",
  "/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-03-at-6.25.11-AM.jpeg",
];

interface PortfolioItem {
  id: number;
  src: string;
  title: string;
  category: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    src: "/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-03-at-6.25.14-AM.jpeg",
    title: "Fairview Luxury Hotel & Resort Facility",
    category: "Hospitality & Commercial Infrastructure",
  },
  {
    id: 2,
    src: "/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-03-at-6.25.12-AM1.jpeg",
    title: "Prestigious Multi-Storey Residential Complex",
    category: "Residential & Mixed-Use Development",
  },
  {
    id: 3,
    src: "/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-03-at-6.25.11-AM.jpeg",
    title: "Ultramodern Luxury Villa & Pool Estate",
    category: "Prestigious Architectural Architecture",
  },
  {
    id: 4,
    src: "/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-03-at-6.25.14-AM1.jpeg",
    title: "Contemporary Commercial Facility with Architectural Lighting",
    category: "Commercial Civil Engineering",
  },
  {
    id: 5,
    src: "/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-03-at-6.25.11-AM1.jpeg",
    title: "Contemporary Hospitality & Resort Complex",
    category: "Ultramodern Project Design",
  },
];

export default function PurplePetalsContent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Background slideshow automatic timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Lightbox keyboard controls
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % portfolioItems.length : null
        );
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null
            ? (prev - 1 + portfolioItems.length) % portfolioItems.length
            : null
        );
      }
    },
    [lightboxIndex]
  );

  useEffect(() => {
    if (lightboxIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, handleKeyDown]);

  return (
    <>
      {/* Hero Section with background slideshow */}
      <section
        className="hero-section"
        style={{
          position: "relative",
          minHeight: "569px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          backgroundColor: "#12364e",
        }}
        aria-label="Purple Petals Hero"
      >
        {/* Background Slides */}
        <div
          className="hero-slides-wrapper"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
          aria-hidden="true"
        >
          {heroSlides.map((src, idx) => (
            <div
              key={src}
              className={`hero-slide ${idx === currentSlide ? "active" : ""}`}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: idx === currentSlide ? 1 : 0,
                transition: "opacity 1s ease-in-out",
              }}
            />
          ))}
        </div>

        {/* Dark overlay for contrast */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(18, 54, 78, 0.55)",
            zIndex: 2,
          }}
          aria-hidden="true"
        />

        {/* Hero Title */}
        <div
          style={{
            position: "relative",
            zIndex: 3,
            maxWidth: "1000px",
            margin: "0 auto",
            padding: "80px 20px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              color: "#ffffff",
              fontFamily: "var(--font-roboto), 'Roboto', sans-serif",
              fontSize: "clamp(26px, 4.5vw, 39px)",
              fontWeight: 700,
              lineHeight: 1.35,
              textShadow: "0px 0px 12px rgba(0, 0, 0, 0.97)",
              margin: 0,
              letterSpacing: "-0.2px",
            }}
          >
            Purple Petals Construction, Transport and Logistics LLC
          </h1>

          {/* Slide Indicators */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              marginTop: "28px",
            }}
          >
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  width: i === currentSlide ? "28px" : "10px",
                  height: "10px",
                  borderRadius: "5px",
                  border: "none",
                  backgroundColor:
                    i === currentSlide ? "#e2c400" : "rgba(255, 255, 255, 0.5)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Main Body Content Section */}
      <section
        style={{
          background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #F7F8FB 100%)",
          padding: "48px 20px 68px",
        }}
      >
        <div
          style={{
            maxWidth: "797px",
            margin: "0 auto",
            fontFamily: "var(--font-roboto), 'Roboto', sans-serif",
            color: "#4B4F58",
            fontSize: "16px",
            lineHeight: 1.8,
          }}
        >
          <p style={{ marginBottom: "24px" }}>
            At Purple Petals Construction, Transport and Logistics LLC, a
            subsidiary of Global Relief Consult, we pride ourselves on our
            integrity, expertise, and commitment to delivering exceptional
            results. With a strong foundation in Ghana and a global presence,
            we’ve built a reputation for designing and building prestigious
            ultramodern facilities.
          </p>

          <p style={{ marginBottom: "24px" }}>
            Our East Africa operations have been instrumental in driving growth
            and delivering results-driven solutions for our clients. We’ve
            established strong relationships with clients across the region,
            including our recent project in Tanzania, showcasing our ability to
            navigate diverse markets and deliver exceptional service.
          </p>

          <p style={{ marginBottom: "28px" }}>
            Browse through our portfolio, featuring images of our completed
            projects and designs. These visuals showcase our expertise and
            attention to detail, giving you a glimpse into our capabilities and
            the quality of our work. With a portfolio spanning years and
            continents, we’re confident in our ability to bring value to your
            next project. Our expertise in construction, transportation, and
            logistics is backed by a passion for innovation, quality, and
            customer satisfaction. Let’s work together to build something
            amazing.
          </p>

          <p
            style={{
              color: "#12364e",
              fontSize: "18px",
              marginTop: "32px",
              marginBottom: "48px",
            }}
          >
            <strong>
              <em>Purple Petals: Where Integrity Meets Time</em>
            </strong>
          </p>

          {/* Completed Projects Portfolio Gallery */}
          <div style={{ marginTop: "40px" }}>
            <div
              style={{
                borderTop: "1px solid #e0e0e0",
                paddingTop: "36px",
                marginBottom: "24px",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-roboto), 'Roboto', sans-serif",
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#12364e",
                  marginBottom: "8px",
                }}
              >
                Completed Projects &amp; Designs Portfolio
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  color: "#777777",
                  margin: 0,
                }}
              >
                Click on any project to view high-resolution details
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "16px",
              }}
            >
              {portfolioItems.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => setLightboxIndex(idx)}
                  style={{
                    position: "relative",
                    borderRadius: "6px",
                    overflow: "hidden",
                    boxShadow: "0 4px 14px rgba(0, 0, 0, 0.08)",
                    cursor: "pointer",
                    backgroundColor: "#ffffff",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(0, 0, 0, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 14px rgba(0, 0, 0, 0.08)";
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "200px",
                    }}
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ padding: "12px 14px" }}>
                    <div
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        color: "#e2c400",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        marginBottom: "4px",
                      }}
                    >
                      {item.category}
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#12364e",
                        lineHeight: 1.4,
                      }}
                    >
                      {item.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Project Lightbox"
          onClick={() => setLightboxIndex(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.92)",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            aria-label="Close Lightbox"
            style={{
              position: "absolute",
              top: "20px",
              right: "24px",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              color: "#ffffff",
              border: "none",
              borderRadius: "50%",
              width: "44px",
              height: "44px",
              fontSize: "24px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 100000,
            }}
          >
            ✕
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (lightboxIndex - 1 + portfolioItems.length) %
                  portfolioItems.length
              );
            }}
            aria-label="Previous image"
            style={{
              position: "absolute",
              left: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              color: "#ffffff",
              border: "none",
              borderRadius: "50%",
              width: "48px",
              height: "48px",
              fontSize: "24px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 100000,
            }}
          >
            ‹
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % portfolioItems.length);
            }}
            aria-label="Next image"
            style={{
              position: "absolute",
              right: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              color: "#ffffff",
              border: "none",
              borderRadius: "50%",
              width: "48px",
              height: "48px",
              fontSize: "24px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 100000,
            }}
          >
            ›
          </button>

          {/* Active Image container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw",
              maxHeight: "85vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "min(90vw, 1100px)",
                height: "min(75vh, 700px)",
              }}
            >
              <Image
                src={portfolioItems[lightboxIndex].src}
                alt={portfolioItems[lightboxIndex].title}
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <div
              style={{
                color: "#ffffff",
                textAlign: "center",
                marginTop: "16px",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#ffffff",
                }}
              >
                {portfolioItems[lightboxIndex].title}
              </h3>
              <p
                style={{
                  margin: "4px 0 0",
                  fontSize: "13px",
                  color: "#e2c400",
                }}
              >
                {portfolioItems[lightboxIndex].category} — ({lightboxIndex + 1} of{" "}
                {portfolioItems.length})
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA Banner with straight top line */}
      <ContactCTA />
    </>
  );
}
