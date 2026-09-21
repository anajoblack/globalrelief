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

const braveHeartPhotos: PhotoItem[] = [
  {
    id: 1,
    src: "/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-21-at-12.35.59-AM-3.jpeg",
    title: "Classroom Learning & Activity Center",
    alt: "Brave Heart Montessori classroom learning space and activity center",
  },
  {
    id: 2,
    src: "/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-21-at-12.36.01-AM-3.jpeg",
    title: "Creative Art & Play Corner",
    alt: "Children creative play and learning materials corner",
  },
  {
    id: 3,
    src: "/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-21-at-12.36.00-AM-4.jpeg",
    title: "Montessori Educational Materials",
    alt: "Brave Heart hands-on Montessori sensory learning tools",
  },
  {
    id: 4,
    src: "/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-21-at-12.36.00-AM-1.jpeg",
    title: "Interactive Play & Discovery Station",
    alt: "Interactive activity and discovery area for early childhood",
  },
  {
    id: 5,
    src: "/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-21-at-12.35.59-AM-6.jpeg",
    title: "Indoor Recreation & Activity Hall",
    alt: "Indoor recreational activity hall with developmental toys",
  },
  {
    id: 6,
    src: "/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-21-at-12.35.59-AM-2.jpeg",
    title: "Montessori Sensory & Counting Tools",
    alt: "Montessori sensory, mathematics, and counting apparatus",
  },
  {
    id: 7,
    src: "/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-21-at-12.36.01-AM-1.jpeg",
    title: "Early Learners Reading & Puzzle Table",
    alt: "Early reading nook and cognitive puzzle tables",
  },
  {
    id: 8,
    src: "/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-21-at-12.35.58-AM-7.jpeg",
    title: "Child Haven Playground & Castle Playset",
    alt: "Outdoor adventure playground and secure castle play equipment",
  },
  {
    id: 9,
    src: "/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-21-at-12.35.59-AM-4.jpeg",
    title: "Spacious & Bright Learning Room",
    alt: "Well-ventilated and naturally illuminated classroom environment",
  },
  {
    id: 10,
    src: "/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-21-at-12.36.00-AM-5.jpeg",
    title: "Montessori Practical Life Skills Area",
    alt: "Practical life development and motor skills materials",
  },
  {
    id: 11,
    src: "/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-21-at-12.35.58-AM-4.jpeg",
    title: "Playground Slides & Climbing Zone",
    alt: "Outdoor slides, climbing structures, and child play amenities",
  },
  {
    id: 12,
    src: "/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-21-at-12.35.58-AM-5.jpeg",
    title: "Outdoor Recreation & Fun Turf",
    alt: "Secure synthetic turf playground for safe outdoor recreation",
  },
  {
    id: 13,
    src: "/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-21-at-12.35.59-AM.jpeg",
    title: "Creative Arts & Painting Easels",
    alt: "Creative art easels, drawing boards, and crafts workspace",
  },
  {
    id: 14,
    src: "/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-21-at-12.35.59-AM-7.jpeg",
    title: "Kids Haven Dining & Refreshment Space",
    alt: "Clean and hygienic dining and snack tables for students",
  },
  {
    id: 15,
    src: "/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-21-at-12.35.58-AM-3.jpeg",
    title: "Luxurious Swings & Adventure Park",
    alt: "Secure swings and outdoor recreation complex for children",
  },
  {
    id: 16,
    src: "/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-21-at-12.35.58-AM-1.jpeg",
    title: "Kids Sports & Outdoor Play Area",
    alt: "Safe perimeter sports and games zone for young students",
  },
  {
    id: 17,
    src: "/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-21-at-12.35.58-AM.jpeg",
    title: "Campus Exterior & Secure Compound",
    alt: "Brave Heart Kids Haven exterior campus and secure perimeter",
  },
  {
    id: 18,
    src: "/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-21-at-12.36.00-AM-3.jpeg",
    title: "Montessori Classroom Desk Configuration",
    alt: "Ergonomic student desks and chairs tailored for young learners",
  },
  {
    id: 19,
    src: "/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-21-at-12.35.58-AM-2.jpeg",
    title: "Play Castle & Shaded Pavilion",
    alt: "Shaded canopy play pavilion and activity structures",
  },
  {
    id: 20,
    src: "/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-21-at-12.36.01-AM-2.jpeg",
    title: "Fine Motor Skills & Puzzle Station",
    alt: "Early childhood puzzles, building blocks, and learning games",
  },
  {
    id: 21,
    src: "/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-21-at-12.36.00-AM-7.jpeg",
    title: "Educational Wall Displays & Charts",
    alt: "Colorful alphabet charts and cognitive visual learning displays",
  },
  {
    id: 22,
    src: "/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-21-at-12.35.59-AM-5.jpeg",
    title: "Rest & Nap Haven Bedrooms",
    alt: "Cozy after-school bedrooms and resting cots for quiet nap time",
  },
  {
    id: 23,
    src: "/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-21-at-12.35.58-AM-6.jpeg",
    title: "Kids Haven Adventure Playground",
    alt: "State-of-the-art playground equipment under 24/7 surveillance",
  },
  {
    id: 24,
    src: "/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-21-at-12.35.57-AM-1.jpeg",
    title: "School Gate & Welcoming Entrance",
    alt: "Brave Heart entrance portal welcoming parents and pupils",
  },
  {
    id: 25,
    src: "/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-21-at-12.35.59-AM-1.jpeg",
    title: "Montessori Practical Manipulatives",
    alt: "Tactile learning manipulatives for early childhood education",
  },
  {
    id: 26,
    src: "/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-21-at-12.36.00-AM-2.jpeg",
    title: "Group Learning & Circle Time",
    alt: "Spacious carpeted circle time area for storytelling and songs",
  },
  {
    id: 27,
    src: "/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-21-at-12.36.00-AM.jpeg",
    title: "Music School & Sound Corner",
    alt: "Musical instruments corner for Brave Heart music school pupils",
  },
  {
    id: 28,
    src: "/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-21-at-12.35.57-AM.jpeg",
    title: "Campus Grounds & Security Checkpoint",
    alt: "Secure compound with round-the-clock monitoring and controlled access",
  },
  {
    id: 29,
    src: "/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-21-at-12.36.01-AM.jpeg",
    title: "Creative Exploration & Building Blocks",
    alt: "Building blocks and construction games stimulating young minds",
  },
  {
    id: 30,
    src: "/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-21-at-12.36.00-AM-6.jpeg",
    title: "Montessori Classroom Shelving & Setup",
    alt: "Accessible low Montessori shelving fostering student independence",
  },
];

export default function BraveHeartContent() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Lightbox keyboard controls
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % braveHeartPhotos.length : null
        );
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null
            ? (prev - 1 + braveHeartPhotos.length) % braveHeartPhotos.length
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
      {/* Top Header Section with Archivo Typography matching WordPress Elementor */}
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
                fontSize: "clamp(46px, 9vw, 90px)",
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
              BRAVE HEART
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
              BRAVE HEART
            </h1>
          </div>

          {/* Authentic WordPress Body Copy */}
          <div
            style={{
              maxWidth: "920px",
              margin: "0 auto 50px",
              fontFamily: "var(--font-roboto), 'Roboto', sans-serif",
              color: "#4B4F58",
              fontSize: "16px",
              lineHeight: 1.85,
            }}
          >
            <p
              style={{
                marginBottom: "28px",
                fontSize: "17px",
                lineHeight: 1.8,
              }}
            >
              Welcome to <strong>Brave Heart Kids Haven and Montessori</strong>,
              a comprehensive plaza that offers a range of services for children.
              Our Montessori and creche are equipped with state-of-the-art
              facilities, and our teaching and play materials are designed to
              foster a love of learning.
            </p>

            {/* Program Block 1: Transport Program */}
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "12px",
                padding: "24px 28px",
                boxShadow: "0 4px 18px rgba(0, 0, 0, 0.04)",
                border: "1px solid #EDEDF2",
                marginBottom: "22px",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-archivo), 'Archivo', sans-serif",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#101010",
                  marginTop: 0,
                  marginBottom: "12px",
                }}
              >
                Transport Program:
              </h2>
              <ul
                style={{
                  paddingLeft: "20px",
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <li>
                  We offer a safe and reliable transport program for school
                  children, with a range of vehicles to suit different needs
                  (buses, salon cars, luxury cars)
                </li>
                <li>
                  Our drivers are trained, identified, and tracked for added
                  security
                </li>
                <li>
                  We cater to children from various schools, including our own
                  Montessori students
                </li>
                <li>
                  Parents can also be picked up and dropped off at work while
                  their children are taken to school
                </li>
              </ul>
            </div>

            {/* Program Block 2: After School Program */}
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "12px",
                padding: "24px 28px",
                boxShadow: "0 4px 18px rgba(0, 0, 0, 0.04)",
                border: "1px solid #EDEDF2",
                marginBottom: "22px",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-archivo), 'Archivo', sans-serif",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#101010",
                  marginTop: 0,
                  marginBottom: "12px",
                }}
              >
                After School Program:
              </h2>
              <ul
                style={{
                  paddingLeft: "20px",
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <li>
                  A safe and fun environment for school children who don’t attend
                  BraveHeart Montessori
                </li>
                <li>
                  Cozy bedrooms for naps, eating time with catered food,
                  homework time with assessment reports for parents
                </li>
                <li>
                  Fun and games in our luxurious playground, exceptionally built
                  with security cameras for 24/7 surveillance
                </li>
                <li>
                  Boarding facilities for children whose parents need caretaking
                  services
                </li>
              </ul>
            </div>

            {/* Program Block 3: Additional Services */}
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "12px",
                padding: "24px 28px",
                boxShadow: "0 4px 18px rgba(0, 0, 0, 0.04)",
                border: "1px solid #EDEDF2",
                marginBottom: "28px",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-archivo), 'Archivo', sans-serif",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#101010",
                  marginTop: 0,
                  marginBottom: "12px",
                }}
              >
                Additional Services:
              </h2>
              <ul
                style={{
                  paddingLeft: "20px",
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <li>
                  Music school for children every day of the week, including
                  weekends
                </li>
                <li>
                  Caregivers, teachers, nurses, caterers, drivers, and more,
                  ensuring a high level of care and support
                </li>
              </ul>
            </div>

            {/* Closing text */}
            <div
              style={{
                background: "#F2F5FA",
                borderLeft: "4px solid #F15A24",
                padding: "18px 24px",
                borderRadius: "0 8px 8px 0",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#12364e",
                  lineHeight: 1.7,
                }}
              >
                At Brave Heart Kids Haven, we pride ourselves on providing a
                secure, engaging, and nurturing environment for children. Come
                explore our services and let us take care of your little ones!
                Call or Contact us now!
              </p>
            </div>
          </div>

          {/* 3-Column Image Gallery matching Elementor gallery-columns-3 */}
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
                  fontFamily: "var(--font-archivo), 'Archivo', sans-serif",
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#12364e",
                  margin: 0,
                }}
              >
                Kids Haven &amp; Montessori Gallery
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  color: "#777777",
                  marginTop: "6px",
                  fontFamily: "var(--font-roboto), 'Roboto', sans-serif",
                }}
              >
                Click any photo to explore our classrooms, learning spaces, and playground in full resolution ({braveHeartPhotos.length} photos)
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "20px",
              }}
            >
              {braveHeartPhotos.map((photo, idx) => (
                <div
                  key={photo.id}
                  onClick={() => setLightboxIndex(idx)}
                  style={{
                    cursor: "pointer",
                    borderRadius: "10px",
                    overflow: "hidden",
                    background: "#FFFFFF",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                    border: "1px solid #EAECEF",
                    transition:
                      "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow =
                      "0 14px 28px rgba(0, 0, 0, 0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 16px rgba(0,0,0,0.06)";
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "260px",
                      overflow: "hidden",
                      backgroundColor: "#f0f2f5",
                    }}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.transform =
                          "scale(1.06)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.transform =
                          "scale(1)";
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background:
                          "linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.7) 100%)",
                        padding: "24px 14px 10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span
                        style={{
                          color: "#ffffff",
                          fontSize: "13px",
                          fontWeight: 500,
                          fontFamily: "var(--font-roboto), 'Roboto', sans-serif",
                          textShadow: "0 1px 2px rgba(0,0,0,0.8)",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {photo.title}
                      </span>
                      <span
                        style={{
                          backgroundColor: "rgba(241, 90, 36, 0.9)",
                          color: "#ffffff",
                          fontSize: "11px",
                          padding: "2px 8px",
                          borderRadius: "12px",
                          fontWeight: 600,
                          flexShrink: 0,
                          marginLeft: "8px",
                        }}
                      >
                        #{idx + 1}
                      </span>
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
          aria-label="Image Lightbox"
          onClick={() => setLightboxIndex(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(7, 12, 28, 0.95)",
            zIndex: 999999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            boxSizing: "border-box",
            backdropFilter: "blur(6px)",
          }}
        >
          {/* Top Bar with Info & Close Button */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              right: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#FFFFFF",
              zIndex: 10,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  letterSpacing: "0.5px",
                }}
              >
                {lightboxIndex + 1} / {braveHeartPhotos.length}
              </span>
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "#E2E8F0",
                  display: "inline-block",
                  maxWidth: "60vw",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {braveHeartPhotos[lightboxIndex].title}
              </span>
            </div>

            <button
              onClick={() => setLightboxIndex(null)}
              aria-label="Close Lightbox"
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                border: "none",
                color: "#FFFFFF",
                fontSize: "24px",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#F15A24";
                e.currentTarget.style.transform = "scale(1.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              &times;
            </button>
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (lightboxIndex - 1 + braveHeartPhotos.length) %
                  braveHeartPhotos.length
              );
            }}
            aria-label="Previous Image"
            style={{
              position: "absolute",
              left: "24px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255, 255, 255, 0.15)",
              border: "none",
              color: "#FFFFFF",
              fontSize: "30px",
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
              transition: "background 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#F15A24";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
          >
            &#8249;
          </button>

          {/* Lightbox Main Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "88vw",
              maxHeight: "80vh",
              width: "1200px",
              height: "75vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={braveHeartPhotos[lightboxIndex].src}
              alt={braveHeartPhotos[lightboxIndex].alt}
              fill
              sizes="90vw"
              style={{
                objectFit: "contain",
                userSelect: "none",
              }}
              priority
            />
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % braveHeartPhotos.length);
            }}
            aria-label="Next Image"
            style={{
              position: "absolute",
              right: "24px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255, 255, 255, 0.15)",
              border: "none",
              color: "#FFFFFF",
              fontSize: "30px",
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
              transition: "background 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#F15A24";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
          >
            &#8250;
          </button>

          {/* Bottom Thumbnail Strip */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "absolute",
              bottom: "16px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "8px",
              maxWidth: "92vw",
              overflowX: "auto",
              padding: "8px 12px",
              background: "rgba(0, 0, 0, 0.4)",
              borderRadius: "28px",
              backdropFilter: "blur(4px)",
            }}
          >
            {braveHeartPhotos.map((photo, i) => (
              <button
                key={photo.id}
                onClick={() => setLightboxIndex(i)}
                aria-label={`Go to image ${i + 1}`}
                style={{
                  width: "48px",
                  height: "36px",
                  position: "relative",
                  borderRadius: "4px",
                  overflow: "hidden",
                  border:
                    i === lightboxIndex
                      ? "2px solid #F15A24"
                      : "2px solid transparent",
                  opacity: i === lightboxIndex ? 1 : 0.6,
                  cursor: "pointer",
                  padding: 0,
                  background: "transparent",
                  flexShrink: 0,
                  transition: "opacity 0.2s, border-color 0.2s",
                }}
              >
                <Image
                  src={photo.src}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  sizes="48px"
                  style={{ objectFit: "cover" }}
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Global Relief Professional Contact CTA with straight border */}
      <ContactCTA />
    </>
  );
}
