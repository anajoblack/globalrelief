"use client";

import React, { useState } from "react";

interface GalleryItem {
  id: number;
  image: string;
  title: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, image: "/images/DSCF7174-scaled.jpg", title: "GRC Training Sessions" },
  { id: 2, image: "/images/DSCF7085.jpg", title: "GRC Training Sessions" },
  { id: 3, image: "/images/DSCF7021.jpg", title: "GRC Training Sessions" },
  { id: 4, image: "/images/DSCF6776.jpg", title: "GRC Training Sessions" },
  { id: 5, image: "/images/DSCF6698.jpg", title: "GRC Training Sessions" },
];

export default function GalleryAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="gallery-section" aria-label="Photo Gallery">
      <div className="gallery-header-container">
        {/* Background Watermark Heading */}
        <div className="gallery-watermark" aria-hidden="true">
          Gallery
        </div>

        {/* Foreground Main Title */}
        <h2 className="gallery-title">
          come <span className="journey-accent">Journey</span> with us
        </h2>
      </div>

      {/* Accordion Panels Container */}
      <div className="gallery-container">
        <div className="accordion-grid">
          {galleryItems.map((item, index) => {
            const isHovered = activeIndex === index;
            return (
              <div
                key={item.id}
                className={`accordion-panel ${isHovered ? "panel-active" : ""}`}
                style={{ backgroundImage: `url(${item.image})` }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                role="button"
                tabIndex={0}
                aria-label={`View photo ${index + 1}: ${item.title}`}
              >
                <div className="panel-overlay">
                  <span className="panel-title">{item.title}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
