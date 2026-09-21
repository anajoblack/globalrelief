import React from "react";
import Image from "next/image";

export default function QuoteSection() {
  return (
    <section className="quote-section" aria-label="Leadership Reflection">
      <div className="quote-container">
        {/* Left Quote Icon */}
        <div className="quote-icon-col left-quote" aria-hidden="true">
          <svg
            className="quote-svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            width="48"
            height="48"
          >
            <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
          </svg>
        </div>

        {/* Center Quote Content */}
        <div className="quote-center-col">
          <div className="quote-avatar-wrapper">
            <Image
              src="/images/dp.png"
              alt="Amaris Perbi"
              width={120}
              height={120}
              className="quote-avatar-img"
            />
          </div>

          <blockquote className="quote-blockquote">
            <h3 className="quote-heading">
              We are a reflection of our mental picture.
            </h3>
            <p className="quote-text">
              The mind is the most powerful tool on our body as the heart is the most essential organ. Keep these healthy and be mindful what you admit into the mind and heart.{" "}
              <span className="quote-hashtag">#AmarisPerbi #AmarisWorld</span>
            </p>
          </blockquote>
        </div>

        {/* Right Quote Icon */}
        <div className="quote-icon-col right-quote" aria-hidden="true">
          <svg
            className="quote-svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            width="48"
            height="48"
          >
            <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
