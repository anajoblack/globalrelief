import React from "react";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="contact-cta-section" aria-label="Contact Call to Action">
      <div className="contact-cta-container">
        <div className="cta-text-col">
          <span className="cta-subtitle">CONTACT US</span>
          <h2 className="cta-title">Speak to one of our Professionals</h2>
        </div>
        <div className="cta-btn-col">
          <Link href="/contact-us" className="cta-action-btn">
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
