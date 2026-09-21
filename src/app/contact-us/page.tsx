"use client";

import React, { useState } from "react";

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div className="subpage-hero">
        <h1 className="subpage-hero-title">Contact Us</h1>
        <p className="subpage-hero-crumb">Home &gt; Contact Us</p>
      </div>

      <div className="subpage-content">
        <h2>Get In Touch! We Would Love to Hear from You!</h2>
        <p>
          Do not hesitate to talk to us or make enquiries at any time. Our doors are open to individuals, groups, and organizations willing to engage our services. Expect a reply within 24 hours.
        </p>

        <div className="contact-grid">
          {/* Left: Office Locations & Contact Info */}
          <div className="contact-info-card">
            <div className="contact-info-item">
              <h3 className="contact-info-label">Global Presence &amp; Offices</h3>
              <p style={{ margin: "8px 0", color: "#292929", fontWeight: 500 }}>
                🇺🇸 <strong>United States:</strong> New Jersey (NJ)<br />
                🇬🇧 <strong>United Kingdom:</strong> Barking, London<br />
                🇿🇦 <strong>South Africa:</strong> Johannesburg &amp; Durban<br />
                🇬🇭 <strong>Ghana:</strong> Accra, Kumasi, Koforidua, Tamale<br />
                🇷🇼 <strong>Rwanda:</strong> Kigali<br />
                🇰🇪 <strong>Kenya:</strong> Nairobi
              </p>
            </div>

            <div className="contact-info-item">
              <h3 className="contact-info-label">Phone &amp; Direct Lines</h3>
              <p style={{ margin: "4px 0" }}>
                <a href="tel:+18482137670" style={{ color: "#0E209C", fontWeight: 600 }}>
                  +1 848-213-7670
                </a>
              </p>
              <p style={{ margin: "4px 0" }}>
                <a href="tel:+233558191919" style={{ color: "#0E209C", fontWeight: 600 }}>
                  +233 558 191919
                </a>
              </p>
            </div>

            <div className="contact-info-item">
              <h3 className="contact-info-label">Email Inquiries</h3>
              <p style={{ margin: "4px 0" }}>
                <a
                  href="mailto:info@globalreliefconsult.com"
                  style={{ color: "#0E209C", fontWeight: 600 }}
                >
                  info@globalreliefconsult.com
                </a>
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            {submitted ? (
              <div
                style={{
                  background: "#e8f5e9",
                  border: "1px solid #c8e6c9",
                  borderRadius: "8px",
                  padding: "30px",
                  textAlign: "center",
                }}
              >
                <h3 style={{ color: "#2e7d32", marginBottom: "8px" }}>
                  Thank you for contacting us!
                </h3>
                <p style={{ color: "#1b5e20" }}>
                  Your message has been received. One of our professionals will get back to you shortly.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="your.email@domain.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="subject">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    placeholder="Inquiry / Service request"
                    className="form-input"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    placeholder="How can our professionals assist you?"
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button type="submit" className="form-submit-btn">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
