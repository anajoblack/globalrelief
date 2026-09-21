"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import ContactCTA from "@/components/ContactCTA";

const heroSlides = [
  "/wp-content/uploads/2025/12/interior-large-distribution-warehouse-with-shelves-stacked-with-palettes-goods-ready-market.jpg",
  "/wp-content/uploads/2025/12/african-american-worker-her-coworker-reading-order-list-before-shipment-while-working-warehouse-scaled.jpg",
];

interface FacilityPhoto {
  src: string;
  title: string;
  caption: string;
}

const facilityPhotos: FacilityPhoto[] = [
  {
    src: "/wp-content/uploads/2025/12/interior-large-distribution-warehouse-with-shelves-stacked-with-palettes-goods-ready-market.jpg",
    title: "High-Bay Distribution & Pallet Racking",
    caption:
      "Modern distribution warehouse with multi-tier industrial racking and climate safeguards.",
  },
  {
    src: "/wp-content/uploads/2025/12/african-american-worker-her-coworker-reading-order-list-before-shipment-while-working-warehouse-scaled.jpg",
    title: "Inventory Verification & Order Dispatch",
    caption:
      "Strict quality assurance, item verification, and streamlined shipment fulfillment operations.",
  },
];

export default function WarehouseStorageContent() {
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
          prev !== null ? (prev + 1) % facilityPhotos.length : null
        );
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null
            ? (prev - 1 + facilityPhotos.length) % facilityPhotos.length
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
        aria-label="Warehouse & Storage Management Hero"
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
            maxWidth: "900px",
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
            Warehouse &amp; Storage Management
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
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #F7F8FB 100%)",
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
          <p style={{ marginBottom: "28px" }}>
            At <strong>Global Relief Consult</strong>, our Warehouse &amp;
            Storage Management services are designed to meet the highest
            standards of safety, efficiency, and reliability. With deep
            experience in humanitarian logistics, sensitive-item handling, and
            large-scale storage operations, we provide end-to-end solutions
            tailored to governments, NGOs, manufacturers, and private sector
            partners.
          </p>

          <h3
            style={{
              color: "#12364e",
              fontSize: "22px",
              fontWeight: 700,
              marginTop: "36px",
              marginBottom: "16px",
              lineHeight: 1.35,
            }}
          >
            Why Our Warehouse Solutions Stand Out
          </h3>

          <h4
            style={{
              color: "#12364e",
              fontSize: "18px",
              fontWeight: 600,
              marginTop: "24px",
              marginBottom: "10px",
            }}
          >
            1. Secure &amp; Modern Storage Facilities
          </h4>
          <p style={{ marginBottom: "20px" }}>
            Our warehouses are equipped with advanced security systems and
            structural safeguards to ensure the safe storage of all categories of
            goods—including high-value, fragile, and hazardous materials.
          </p>

          <h4
            style={{
              color: "#12364e",
              fontSize: "18px",
              fontWeight: 600,
              marginTop: "24px",
              marginBottom: "10px",
            }}
          >
            2. Specialized Handling for Sensitive &amp; Delicate Items
          </h4>
          <p style={{ marginBottom: "12px" }}>
            We apply internationally recognized protocols to store:
          </p>
          <ul
            style={{
              paddingLeft: "24px",
              marginBottom: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <li>Electrical appliances</li>
            <li>Medical and emergency supplies</li>
            <li>Delicate and high-risk goods</li>
            <li>Battery products and components</li>
          </ul>
          <p style={{ marginBottom: "20px" }}>
            Strict handling procedures minimize risk and ensure full product
            integrity.
          </p>

          <h4
            style={{
              color: "#12364e",
              fontSize: "18px",
              fontWeight: 600,
              marginTop: "24px",
              marginBottom: "10px",
            }}
          >
            3. Environmental &amp; Temperature-Controlled Storage
          </h4>
          <p style={{ marginBottom: "12px" }}>
            To serve industries like battery manufacturing and sensitive
            electronics, we provide:
          </p>
          <ul
            style={{
              paddingLeft: "24px",
              marginBottom: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <li>Climate-controlled storage zones</li>
            <li>Moisture-protected environments</li>
            <li>Ventilated and insulated compartments</li>
            <li>Monitoring systems for temperature-sensitive goods</li>
          </ul>
          <p style={{ marginBottom: "20px" }}>
            This makes us a trusted partner for companies requiring
            high-precision storage conditions.
          </p>

          <h4
            style={{
              color: "#12364e",
              fontSize: "18px",
              fontWeight: 600,
              marginTop: "24px",
              marginBottom: "10px",
            }}
          >
            4. Hazardous Material Storage Expertise
          </h4>
          <p style={{ marginBottom: "12px" }}>
            We follow international guidelines for the safe storage of hazardous
            and chemical materials.
            <br />
            Our team is trained in:
          </p>
          <ul
            style={{
              paddingLeft: "24px",
              marginBottom: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <li>Safe containment</li>
            <li>Spill-prevention protocols</li>
            <li>Emergency response procedures</li>
            <li>Regulatory compliance and reporting</li>
          </ul>

          <h4
            style={{
              color: "#12364e",
              fontSize: "18px",
              fontWeight: 600,
              marginTop: "24px",
              marginBottom: "10px",
            }}
          >
            5. Efficient Inventory Management Systems
          </h4>
          <p style={{ marginBottom: "12px" }}>
            Using modern digital tracking systems, we ensure real-time
            visibility and accurate inventory control.
            <br />
            Our solutions include:
          </p>
          <ul
            style={{
              paddingLeft: "24px",
              marginBottom: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <li>Barcode and RFID tracking</li>
            <li>Stock-level monitoring</li>
            <li>Automated restock alerts</li>
            <li>Comprehensive reporting dashboards</li>
          </ul>
          <p style={{ marginBottom: "28px" }}>
            Clients enjoy transparency, efficiency, and complete control over
            their storage assets.
          </p>

          {/* Facility Photo Showcase */}
          <div
            style={{
              margin: "36px 0",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {facilityPhotos.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setLightboxIndex(idx)}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                  cursor: "pointer",
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
                    "0 4px 16px rgba(0, 0, 0, 0.08)";
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "220px",
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
                <div style={{ padding: "14px 16px" }}>
                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#12364e",
                      marginBottom: "4px",
                    }}
                  >
                    {item.title}
                  </div>
                  <div style={{ fontSize: "13px", color: "#666666" }}>
                    {item.caption}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3
            style={{
              color: "#12364e",
              fontSize: "22px",
              fontWeight: 700,
              marginTop: "36px",
              marginBottom: "16px",
              lineHeight: 1.35,
            }}
          >
            Our Warehouse Operations Support
          </h3>
          <p style={{ marginBottom: "12px" }}>
            We provide a suite of value-added services, including:
          </p>
          <ul
            style={{
              paddingLeft: "24px",
              marginBottom: "28px",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <li>Loading and offloading operations</li>
            <li>Packaging and repackaging</li>
            <li>
              Last-mile distribution for humanitarian and commercial projects
            </li>
            <li>Quality assurance and inspection</li>
            <li>
              Customized logistics planning for emergencies and large-scale
              projects
            </li>
          </ul>

          <h3
            style={{
              color: "#12364e",
              fontSize: "22px",
              fontWeight: 700,
              marginTop: "36px",
              marginBottom: "16px",
              lineHeight: 1.35,
            }}
          >
            Who We Serve
          </h3>
          <p style={{ marginBottom: "12px" }}>
            Our warehouse and storage services support:
          </p>
          <ul
            style={{
              paddingLeft: "24px",
              marginBottom: "28px",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <li>Humanitarian agencies and NGOs</li>
            <li>Manufacturing and industrial companies</li>
            <li>Battery and electronics producers</li>
            <li>Government supply chains</li>
            <li>Construction and infrastructure projects</li>
            <li>Retail and distribution networks</li>
          </ul>

          <h3
            style={{
              color: "#12364e",
              fontSize: "22px",
              fontWeight: 700,
              marginTop: "36px",
              marginBottom: "16px",
              lineHeight: 1.35,
            }}
          >
            Commitment to Excellence
          </h3>
          <p style={{ marginBottom: "28px" }}>
            As part of our humanitarian and sustainable mission, we ensure our
            warehouse operations follow responsible, environmentally conscious
            practices. Every storage and logistics solution is designed to
            reduce waste, optimize energy use, and protect local communities.
          </p>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Facility Photo Lightbox"
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

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (lightboxIndex - 1 + facilityPhotos.length) %
                  facilityPhotos.length
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

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % facilityPhotos.length);
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
                src={facilityPhotos[lightboxIndex].src}
                alt={facilityPhotos[lightboxIndex].title}
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
                {facilityPhotos[lightboxIndex].title}
              </h3>
              <p
                style={{
                  margin: "4px 0 0",
                  fontSize: "13px",
                  color: "#e2c400",
                }}
              >
                {facilityPhotos[lightboxIndex].caption} — ({lightboxIndex + 1}{" "}
                of {facilityPhotos.length})
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
