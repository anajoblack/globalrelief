"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import ContactCTA from "@/components/ContactCTA";

interface PhotoItem {
  id: number;
  src: string;
  title: string;
  alt: string;
}

const deepDreamPhotos: PhotoItem[] = [
  {
    id: 1,
    src: "/wp-content/uploads/2024/03/dd6.jpeg",
    title: "Audio Mixing & Digital Workstation",
    alt: "Deep Dream Studio Mixing Console and Keyboards",
  },
  {
    id: 2,
    src: "/wp-content/uploads/2024/03/dd5.jpeg",
    title: "High-Performance Mac Studio Hardware",
    alt: "Apple Mac Studio Hardware for Sound & Video Processing",
  },
  {
    id: 3,
    src: "/wp-content/uploads/2024/03/dd1.jpeg",
    title: "Live Acoustic & Ensemble Recording Hall",
    alt: "Live Acoustic Stage with African Drums and Keyboards",
  },
  {
    id: 4,
    src: "/wp-content/uploads/2024/03/ddddd2.jpeg",
    title: "Audio Production & Sound Engineering Room",
    alt: "Production suite at Deep Dream Studios",
  },
  {
    id: 5,
    src: "/wp-content/uploads/2024/03/dd2.jpeg",
    title: "Sound Isolation Booth & Microphones",
    alt: "Vocal and instrument recording booth",
  },
  {
    id: 6,
    src: "/wp-content/uploads/2024/03/dd9.jpeg",
    title: "Synthesizer & Multi-Track Audio Suite",
    alt: "Synthesizers and production equipment",
  },
  {
    id: 7,
    src: "/wp-content/uploads/2024/03/dd4.jpeg",
    title: "Mastering & Multi-Channel Interface",
    alt: "Audio mastering and sound mixing desk",
  },
  {
    id: 8,
    src: "/wp-content/uploads/2024/03/dd3.jpeg",
    title: "Studio Monitors & Monitoring Setup",
    alt: "Studio monitoring speakers and hardware setup",
  },
  {
    id: 9,
    src: "/wp-content/uploads/2024/03/dd7.jpeg",
    title: "Pro Audio Interface & Preamp Racks",
    alt: "Audio interfaces and preamps",
  },
  {
    id: 10,
    src: "/wp-content/uploads/2024/03/ddd1.jpeg",
    title: "Acoustic Treatment & Live Performance Space",
    alt: "Treated live acoustics recording space",
  },
  {
    id: 11,
    src: "/wp-content/uploads/2024/03/ddd22.jpeg",
    title: "Creative Production & Rehearsal Studio",
    alt: "Creative media production facilities",
  },
];

export default function DeepDreamContent() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Lightbox keyboard controls
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % deepDreamPhotos.length : null
        );
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null
            ? (prev - 1 + deepDreamPhotos.length) % deepDreamPhotos.length
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
      {/* Top Section with Archivo Typography matching WordPress Elementor */}
      <section
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #F7F8FB 100%)",
          padding: "60px 20px 70px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
          {/* Header watermark and title */}
          <div
            style={{
              position: "relative",
              textAlign: "center",
              marginBottom: "36px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-archivo), 'Archivo', sans-serif",
                fontSize: "clamp(48px, 10vw, 90px)",
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: "-0.5px",
                color: "#FFFFFF",
                textShadow: "0px 0px 1px #585367",
                mixBlendMode: "multiply",
                userSelect: "none",
                textTransform: "uppercase",
              }}
              aria-hidden="true"
            >
              DEEP DREAM
            </div>
            <h1
              style={{
                fontFamily: "var(--font-archivo), 'Archivo', sans-serif",
                fontSize: "clamp(30px, 5vw, 45px)",
                fontWeight: 600,
                color: "#101010",
                lineHeight: 1.1,
                letterSpacing: "-1px",
                marginTop: "-25px",
                marginBottom: 0,
                textTransform: "uppercase",
              }}
            >
              DEEP DREAM
            </h1>
          </div>

          {/* Authentic WordPress Body Copy */}
          <div
            style={{
              maxWidth: "880px",
              margin: "0 auto 50px",
              fontFamily: "var(--font-roboto), 'Roboto', sans-serif",
              color: "#4B4F58",
              fontSize: "16px",
              lineHeight: 1.8,
            }}
          >
            <p style={{ marginBottom: "16px", fontSize: "17px" }}>
              Presenting <strong>Deep Dream</strong> Media – Your Premier
              Destination for Creative Excellence!
            </p>

            <ul
              style={{
                paddingLeft: "24px",
                marginBottom: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <li>
                Experience our unparalleled music, audio, photo, and video studio
                services.
              </li>
              <li>
                Specializing in on-location event coverage and momentous
                captures.
              </li>
              <li>
                Avail our cutting-edge facilities for:
                <ul
                  style={{
                    paddingLeft: "24px",
                    marginTop: "8px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  <li>Music production and live recording sessions.</li>
                  <li>Diverse audio beats and styles across all genres.</li>
                  <li>
                    Comprehensive photo shoots encompassing portraits, events,
                    and product photography.
                  </li>
                  <li>
                    High-quality video production for music videos, commercials,
                    and documentaries.
                  </li>
                </ul>
              </li>
              <li>
                Explore our diverse instrumentation, ranging from rare African
                ensembles to contemporary musical instruments.
              </li>
              <li>
                Meet our proficient team comprising seasoned instrumentalists,
                top-tier engineers, and producers.
              </li>
              <li>
                Harness the power of modern software and equipment to achieve
                exceptional results.
              </li>
              <li>
                Utilize our rehearsal facilities tailored for artists and bands.
              </li>
              <li>
                Benefit from our live production capabilities, ideal for concerts
                and events.
              </li>
            </ul>

            <p style={{ marginTop: "24px", fontSize: "16px", fontWeight: 500 }}>
              At Deep Dream Media, we transform your creative visions into
              reality. Allow us to assist you in producing, recording, and
              capturing your next project. Get in touch with us today!
            </p>
          </div>

          {/* 3-Column Studio & Production Photo Gallery */}
          <div>
            <div
              style={{
                borderTop: "1px solid #e2e4e8",
                paddingTop: "36px",
                marginBottom: "28px",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-roboto), 'Roboto', sans-serif",
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#12364e",
                  margin: 0,
                }}
              >
                Studio &amp; Media Facilities Gallery
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  color: "#777777",
                  marginTop: "6px",
                }}
              >
                Click on any photo to view full-resolution studio equipment and setups
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "20px",
              }}
            >
              {deepDreamPhotos.map((photo, idx) => (
                <div
                  key={photo.id}
                  onClick={() => setLightboxIndex(idx)}
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "6px",
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
                      height: "240px",
                    }}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ padding: "12px 16px" }}>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#12364e",
                        lineHeight: 1.4,
                      }}
                    >
                      {photo.title}
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
          aria-label="Studio Photo Lightbox"
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
                (lightboxIndex - 1 + deepDreamPhotos.length) %
                  deepDreamPhotos.length
              );
            }}
            aria-label="Previous photo"
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
              setLightboxIndex((lightboxIndex + 1) % deepDreamPhotos.length);
            }}
            aria-label="Next photo"
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
                src={deepDreamPhotos[lightboxIndex].src}
                alt={deepDreamPhotos[lightboxIndex].alt}
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
                {deepDreamPhotos[lightboxIndex].title}
              </h3>
              <p
                style={{
                  margin: "4px 0 0",
                  fontSize: "13px",
                  color: "#e2c400",
                }}
              >
                Photo {lightboxIndex + 1} of {deepDreamPhotos.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Contact CTA Banner with straight top line */}
      <ContactCTA />
    </>
  );
}
