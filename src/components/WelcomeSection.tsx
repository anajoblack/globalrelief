import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function WelcomeSection() {
  return (
    <section className="welcome-section" aria-label="Welcome and Overview">
      <div className="welcome-container">
        {/* Left Column: Content */}
        <div className="welcome-content">
          <div className="welcome-header">
            <h4 className="welcome-subtitle">Welcome to</h4>
            <h2 className="welcome-title">Global Relief Consult (GRC)</h2>
          </div>

          <div className="welcome-body">
            <div className="empower-group">
              <h3 className="group-heading">
                We empower organizations, groups, and individuals in areas of:
              </h3>
              <ul className="bullet-list">
                <li>Sustainability</li>
                <li>Corporate Social Responsibility (CSR)</li>
                <li>Environmental, Social, and Governance (ESG)</li>
                <li>Monitoring and Evaluation (M&amp;E)</li>
              </ul>
            </div>

            <div className="empower-group">
              <h3 className="group-heading">
                Our Consultants are well-vested in:
              </h3>
              <ul className="bullet-list">
                <li>Educational Projects, Programs, and Activities</li>
              </ul>
            </div>

            <div className="empower-group">
              <h3 className="group-heading">
                With a strong drive and practical leadership in:
              </h3>
              <ul className="bullet-list">
                <li>STEM (Science, Technology, Engineering, and Mathematics )</li>
                <li>STEAM (Science, Technology, Engineering, Arts, and Mathematics)</li>
                <li>AI (Artificial Intelligence)</li>
                <li>T-VET (Technical and Vocational Education and Training)</li>
              </ul>
            </div>
          </div>

          <div className="welcome-btn-wrap">
            <Link href="/what-we-do" className="learn-more-btn">
              <span>Learn more</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 448 512"
                width="14"
                height="14"
                fill="currentColor"
              >
                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Column: Collage Image */}
        <div className="welcome-media">
          <div className="collage-wrapper">
            <Image
              src="/images/Education-Schoogalleryl-2.png"
              alt="Global Relief Consult Training and Educational Activities"
              width={635}
              height={577}
              priority
              className="collage-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
