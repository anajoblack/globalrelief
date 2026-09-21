"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface Photo {
  title: string;
  src: string;
}

const allGalleryPhotos: Photo[] = [
  {
    title: "Women Empowerment Training Sessions (1)",
    src: "/wp-content/uploads/2022/12/Women-Empowerment-Training-Sessions-1.jpeg",
  },
  {
    title: "Women Empowerment Training Sessions (21)",
    src: "/wp-content/uploads/2022/12/Women-Empowerment-Training-Sessions-21.jpeg",
  },
  {
    title: "Women Empowerment Training Sessions (27)",
    src: "/wp-content/uploads/2022/12/Women-Empowerment-Training-Sessions-27.jpeg",
  },
  {
    title: "DSCF6657",
    src: "/wp-content/uploads/2022/12/DSCF6657.jpg",
  },
  {
    title: "jan_birthdaystars-106",
    src: "/wp-content/uploads/2022/12/jan_birthdaystars-106.jpg",
  },
  {
    title: "Women Empowerment Training Sessions (28)",
    src: "/wp-content/uploads/2022/12/Women-Empowerment-Training-Sessions-28.jpeg",
  },
  {
    title: "Women Empowerment Training Sessions (14)",
    src: "/wp-content/uploads/2022/12/Women-Empowerment-Training-Sessions-14.jpeg",
  },
  {
    title: "Women Empowerment Training Sessions (13)",
    src: "/wp-content/uploads/2022/12/Women-Empowerment-Training-Sessions-13.jpeg",
  },
  {
    title: "Women Empowerment Training Sessions (17)",
    src: "/wp-content/uploads/2022/12/Women-Empowerment-Training-Sessions-17.jpeg",
  },
  {
    title: "IMG_7208",
    src: "/wp-content/uploads/2022/12/IMG_7208.jpg",
  },
  {
    title: "Women Empowerment Training Sessions (15)",
    src: "/wp-content/uploads/2022/12/Women-Empowerment-Training-Sessions-15.jpeg",
  },
  {
    title: "Women Empowerment Training Sessions (10)",
    src: "/wp-content/uploads/2022/12/Women-Empowerment-Training-Sessions-10.jpeg",
  },
  {
    title: "DSCF7174",
    src: "/wp-content/uploads/2022/12/DSCF7174-scaled.jpg",
  },
  {
    title: "Women Empowerment Training Sessions (20)",
    src: "/wp-content/uploads/2022/12/Women-Empowerment-Training-Sessions-20.jpeg",
  },
  {
    title: "slideeee",
    src: "/wp-content/uploads/2022/12/slideeee-scaled.jpg",
  },
  {
    title: "DSCF7085",
    src: "/wp-content/uploads/2022/12/DSCF7085.jpg",
  },
  {
    title: "Women Empowerment Training Sessions (24)",
    src: "/wp-content/uploads/2022/12/Women-Empowerment-Training-Sessions-24.jpeg",
  },
  {
    title: "Women Empowerment Training Sessions (23)",
    src: "/wp-content/uploads/2022/12/Women-Empowerment-Training-Sessions-23.jpeg",
  },
  {
    title: "Women Empowerment Training Sessions (6)",
    src: "/wp-content/uploads/2022/12/Women-Empowerment-Training-Sessions-6.jpeg",
  },
  {
    title: "Women Empowerment Training Sessions (26)",
    src: "/wp-content/uploads/2022/12/Women-Empowerment-Training-Sessions-26.jpeg",
  },
  {
    title: "Women Empowerment Training Sessions (5)",
    src: "/wp-content/uploads/2022/12/Women-Empowerment-Training-Sessions-5.jpeg",
  },
  {
    title: "DSCF7021",
    src: "/wp-content/uploads/2022/12/DSCF7021.jpg",
  },
  {
    title: "Women Empowerment Training Sessions (22)",
    src: "/wp-content/uploads/2022/12/Women-Empowerment-Training-Sessions-22.jpeg",
  },
  {
    title: "Women Empowerment Training Sessions (3)",
    src: "/wp-content/uploads/2022/12/Women-Empowerment-Training-Sessions-3.jpeg",
  },
  {
    title: "Women Empowerment Training Sessions (9)",
    src: "/wp-content/uploads/2022/12/Women-Empowerment-Training-Sessions-9.jpeg",
  },
  {
    title: "Women Empowerment Training Sessions (7)",
    src: "/wp-content/uploads/2022/12/Women-Empowerment-Training-Sessions-7.jpeg",
  },
  {
    title: "Women Empowerment Training Sessions (4)",
    src: "/wp-content/uploads/2022/12/Women-Empowerment-Training-Sessions-4.jpeg",
  },
  {
    title: "Women Empowerment Training Sessions (12)",
    src: "/wp-content/uploads/2022/12/Women-Empowerment-Training-Sessions-12.jpeg",
  },
  {
    title: "Women Empowerment Training Sessions (11)",
    src: "/wp-content/uploads/2022/12/Women-Empowerment-Training-Sessions-11.jpeg",
  },
  {
    title: "Women Empowerment Training Sessions (25)",
    src: "/wp-content/uploads/2022/12/Women-Empowerment-Training-Sessions-25.jpeg",
  },
  {
    title: "DSCF6724",
    src: "/wp-content/uploads/2022/12/DSCF6724-scaled.jpg",
  },
  {
    title: "DSCF6698",
    src: "/wp-content/uploads/2022/12/DSCF6698.jpg",
  },
  {
    title: "IMG_7206",
    src: "/wp-content/uploads/2022/12/IMG_7206.jpg",
  },
  {
    title: "Women Empowerment Training Sessions (2)",
    src: "/wp-content/uploads/2022/12/Women-Empowerment-Training-Sessions-2.jpeg",
  },
  {
    title: "DSCF6776",
    src: "/wp-content/uploads/2022/12/DSCF6776.jpg",
  },
  {
    title: "Women Empowerment Training Sessions (19)",
    src: "/wp-content/uploads/2022/12/Women-Empowerment-Training-Sessions-19.jpeg",
  },
  {
    title: "Women Empowerment Training Sessions (16)",
    src: "/wp-content/uploads/2022/12/Women-Empowerment-Training-Sessions-16.jpeg",
  },
  {
    title: "Women Empowerment Training Sessions (8)",
    src: "/wp-content/uploads/2022/12/Women-Empowerment-Training-Sessions-8.jpeg",
  },
  {
    title: "Women Empowerment Training Sessions (18)",
    src: "/wp-content/uploads/2022/12/Women-Empowerment-Training-Sessions-18.jpeg",
  },
];

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = () => setLightboxIndex(null);

  const prevPhoto = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null
        ? prev === 0
          ? allGalleryPhotos.length - 1
          : prev - 1
        : null
    );
  }, []);

  const nextPhoto = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null
        ? (prev + 1) % allGalleryPhotos.length
        : null
    );
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevPhoto();
      if (e.key === "ArrowRight") nextPhoto();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, nextPhoto, prevPhoto]);

  return (
    <main style={{ backgroundColor: "#ffffff", padding: "40px 0 80px" }}>
      {/* Header Container */}
      <div
        style={{
          position: "relative",
          maxWidth: "1140px",
          margin: "0 auto 40px",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "-15px",
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "var(--font-archivo), 'Archivo', sans-serif",
            fontSize: "90px",
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-0.5px",
            color: "#ffffff",
            textShadow: "0px 0px 1px #585367",
            mixBlendMode: "multiply",
            pointerEvents: "none",
            zIndex: 1,
            opacity: 0.85,
          }}
          aria-hidden="true"
        >
          Gallery
        </span>

        <h1
          style={{
            position: "relative",
            zIndex: 2,
            fontFamily: "var(--font-archivo), 'Archivo', sans-serif",
            fontSize: "45px",
            fontWeight: 600,
            color: "#101010",
            margin: "45px 0 10px",
            letterSpacing: "-1px",
          }}
        >
          come{" "}
          <span
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', serif",
              fontWeight: 700,
              fontStyle: "italic",
              color: "#58468c",
            }}
          >
            Journey
          </span>{" "}
          with us
        </h1>
      </div>

      {/* 3-Column Image Gallery Grid */}
      <div
        style={{
          maxWidth: "1140px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "20px",
          }}
        >
          {allGalleryPhotos.map((photo, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxIndex(idx)}
              style={{
                position: "relative",
                height: "260px",
                borderRadius: "8px",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.08)";
              }}
              role="button"
              tabIndex={0}
              aria-label={`View photo ${idx + 1}: ${photo.title}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setLightboxIndex(idx);
                }
              }}
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover", display: "block" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "20px 14px 10px",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
                  color: "#ffffff",
                  fontSize: "13px",
                  fontWeight: 500,
                  fontFamily: "var(--font-roboto), 'Roboto', sans-serif",
                  opacity: 0.9,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {photo.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            zIndex: 10000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox Viewer"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "rgba(255, 255, 255, 0.2)",
              border: "none",
              color: "#ffffff",
              fontSize: "28px",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10001,
            }}
            aria-label="Close lightbox"
          >
            ✕
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            style={{
              position: "absolute",
              left: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255, 255, 255, 0.2)",
              border: "none",
              color: "#ffffff",
              fontSize: "32px",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10001,
            }}
            aria-label="Previous photo"
          >
            ‹
          </button>

          {/* Image & Title container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
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
                width: "min(85vw, 1000px)",
                height: "min(75vh, 650px)",
              }}
            >
              <Image
                src={allGalleryPhotos[lightboxIndex].src}
                alt={allGalleryPhotos[lightboxIndex].title}
                fill
                sizes="90vw"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <p
              style={{
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: 600,
                marginTop: "12px",
                textAlign: "center",
                fontFamily: "var(--font-roboto), 'Roboto', sans-serif",
              }}
            >
              {allGalleryPhotos[lightboxIndex].title} ({lightboxIndex + 1} of{" "}
              {allGalleryPhotos.length})
            </p>
          </div>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            style={{
              position: "absolute",
              right: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255, 255, 255, 0.2)",
              border: "none",
              color: "#ffffff",
              fontSize: "32px",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10001,
            }}
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      )}
    </main>
  );
}
