import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "What We Do - Global Relief Consult",
  description:
    "We operate the biggest Warehouses and Storage Space in West Africa. We are Global Consultants That Deploy Prolific Events, Programs And Projects Considering : UNSDG Goals.",
};

const servicesList = [
  "Sustainability",
  "Corporate Social Responsibility (CSR)",
  "Environmental, Social, and Governance (ESG)",
  "Monitoring and Evaluation (M&E)",
  "Leadership",
  "SDGs",
  "Construction & Logistics",
  "Warehouse & Storage Management",
  "Lifetime Achievements",
  "Nuptials/ Weddings/ Proposals",
  "Everything Relationship & Family Life",
  "Awards",
  "Etc",
];

const funfacts = [
  {
    number: "165",
    suffix: "+",
    label: "Support Given",
    icon: "/wp-content/uploads/2022/12/funfact_img-1.png",
  },
  {
    number: "15",
    suffix: "+",
    label: "Project Done",
    icon: "/wp-content/uploads/2022/12/funfact_img-2.png",
  },
  {
    number: "7",
    suffix: "+",
    label: "Awards Received",
    icon: "/wp-content/uploads/2022/12/funfact_img-3.png",
  },
  {
    number: "150",
    suffix: "+",
    label: "Trainings Offered",
    icon: "/wp-content/uploads/2022/12/funfact_img-4-1.png",
  },
];

export default function WhatWeDoPage() {
  return (
    <main className="what-we-do-page">
      {/* Section 1: Yellow Top Section with 2 columns */}
      <section
        style={{
          backgroundColor: "#ECD812",
          padding: "45px 20px 50px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1140px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "1 1 520px" }}>
            <h3
              style={{
                fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                fontSize: "18px",
                fontWeight: 600,
                color: "#333333",
                textTransform: "capitalize",
                margin: "0 0 12px 0",
              }}
            >
              What We Do
            </h3>
            <h1
              style={{
                fontFamily: "var(--font-lato), 'Lato', sans-serif",
                fontSize: "26px",
                fontWeight: 700,
                color: "#333333",
                lineHeight: "1.4",
                margin: "0 0 20px 0",
              }}
            >
              We operate the biggest Warehouses and Storage Space in West Africa.
              We are Global Consultants That Deploy Prolific Events, Programs And
              Projects Considering : UNSDG Goals;
            </h1>
            <ul
              className="bullet-list"
              style={{
                fontFamily: "var(--font-roboto), 'Roboto', sans-serif",
                fontSize: "16px",
                color: "#222222",
                lineHeight: 1.8,
                paddingLeft: "28px",
                listStyleType: "disc",
                margin: "0 0 16px 0",
              }}
            >
              {servicesList.map((item, index) => (
                <li
                  key={index}
                  style={{
                    listStyleType: "disc",
                    display: "list-item",
                    marginBottom: "4px",
                  }}
                >
                  <strong>{item}</strong>
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{
              flex: "1 1 380px",
              maxWidth: "500px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src="/wp-content/uploads/2022/12/about_img-1-1.png"
              alt="What We Do - Global Relief Consult"
              width={576}
              height={536}
              style={{ width: "100%", height: "auto", display: "block" }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Section 2: White 2-column Interventions Section */}
      <section
        style={{
          backgroundColor: "#FFFFFF",
          padding: "70px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1140px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "50px",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "var(--font-lato), 'Lato', sans-serif",
                fontSize: "19px",
                fontWeight: 700,
                color: "#222222",
                lineHeight: "1.4",
                margin: "0 0 16px 0",
                textTransform: "uppercase",
              }}
            >
              GIRLS IN ICT (INFORMATION AND COMMUNICATIONS TECHNOLOGY) &amp; (STEM)
              SCIENCE, TECHNOLOGY, ENGINEERING, AND MATHEMATICS
            </h2>
            <p
              style={{
                fontFamily: "var(--font-roboto), 'Roboto', sans-serif",
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#555555",
                marginBottom: "16px",
              }}
            >
              <b>Global Relief Consult (GRC)</b> is also committed to those who
              have dropped out of school or have become despondent for their
              successful integration into the society.
            </p>
            <p
              style={{
                fontFamily: "var(--font-roboto), 'Roboto', sans-serif",
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#555555",
                margin: 0,
              }}
            >
              We create value for them, teach them and guide other people or
              agencies that want to drive Technical and Vocational Education and
              Training (T-VET) through Intergovernmental Organizations (IGOs),
              Government institutions to drive girls in the vocational space
              into the STEM integration so that they have &apos;technology meeting
              ideology&apos;.
            </p>
          </div>

          <div>
            <h2
              style={{
                fontFamily: "var(--font-lato), 'Lato', sans-serif",
                fontSize: "19px",
                fontWeight: 700,
                color: "#222222",
                lineHeight: "1.4",
                margin: "0 0 16px 0",
                textTransform: "uppercase",
              }}
            >
              GLOBAL RELIEF CONSULT INTERVENTIONS
            </h2>
            <p
              style={{
                fontFamily: "var(--font-roboto), 'Roboto', sans-serif",
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#555555",
                marginBottom: "16px",
              }}
            >
              <b>Global Relief Consult</b> was birthed in 2015 when a group of
              spirited friends determined to enhance the living conditions and
              economic wellbeing of the underprevileged collaborated to share
              knowledge on how to cushion impoverished people via strategic
              empowerments.
            </p>
            <p
              style={{
                fontFamily: "var(--font-roboto), 'Roboto', sans-serif",
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#555555",
                margin: 0,
              }}
            >
              In 7 years, GRC’s consultancy interventions have benefitted
              orphanages, aged homes, schools, parents (capital to start
              trade), students (scholarships) and artisans (introduced
              technology to their craft to better make sales.)
              <br />
              <br />
              Some beneficiaries are on attachment, internships and
              apprenticeship.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Target Group (Dark Charcoal) */}
      <section
        style={{
          backgroundColor: "#212121",
          padding: "60px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1140px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
          }}
        >
          <div style={{ maxWidth: "340px" }}>
            <h2
              style={{
                color: "#FFFFFF",
                fontSize: "32px",
                fontWeight: 700,
                margin: "0 0 12px 0",
                fontFamily: "var(--font-lato), 'Lato', sans-serif",
              }}
            >
              Target Group
            </h2>
            <div
              style={{
                width: "100px",
                height: "2px",
                backgroundColor: "#BDBDBD",
                marginBottom: "20px",
              }}
            />
          </div>

          <div>
            <p
              style={{
                color: "#BDBDBD",
                fontFamily: "var(--font-roboto), 'Roboto', sans-serif",
                fontSize: "16px",
                lineHeight: "1.8",
                margin: 0,
              }}
            >
              Non-governmental organizations (NGOs), Government Community Support
              Groups (GCSG), Volunteering Programme Support Groups (VPSG),
              Volunteer Service Overseas(VSO) as well as various humanitarian
              bodies and groups who seek to support the disadvantaged and
              vulnerable in societies especially women and girls have the needed
              trainings, data base and Continuity Management Roadmaps to guide
              their implementations and project deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Diversity & Inclusion (Deep Navy) */}
      <section
        style={{
          backgroundColor: "#001856",
          padding: "60px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1140px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
          }}
        >
          <div style={{ maxWidth: "340px" }}>
            <h2
              style={{
                color: "#FFFFFF",
                fontSize: "32px",
                fontWeight: 700,
                margin: "0 0 12px 0",
                fontFamily: "var(--font-lato), 'Lato', sans-serif",
              }}
            >
              Diversity &amp; Inclusion
            </h2>
            <div
              style={{
                width: "100px",
                height: "2px",
                backgroundColor: "#BDBDBD",
                marginBottom: "20px",
              }}
            />
          </div>

          <div>
            <p
              style={{
                color: "#BDBDBD",
                fontFamily: "var(--font-roboto), 'Roboto', sans-serif",
                fontSize: "18px",
                fontWeight: 500,
                lineHeight: "1.8",
                margin: 0,
              }}
            >
              We ensure the deprived are able to integrate into the society.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Stat Counters / Funfacts */}
      <section
        style={{
          backgroundColor: "#f9f9ff",
          backgroundImage: 'url("/wp-content/uploads/2022/12/funfact_img.png")',
          backgroundRepeat: "repeat-x",
          backgroundSize: "cover",
          padding: "50px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1140px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "30px",
          }}
        >
          {funfacts.map((fact, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                padding: "15px",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={fact.icon}
                  alt={fact.label}
                  width={46}
                  height={46}
                  style={{ objectFit: "contain" }}
                />
              </div>

              <div>
                <div
                  style={{
                    color: "#333333",
                    fontFamily: "var(--font-lato), 'Lato', sans-serif",
                    fontSize: "44px",
                    fontWeight: 700,
                    lineHeight: 1,
                    marginBottom: "6px",
                  }}
                >
                  {fact.number}
                  <span
                    style={{
                      fontSize: "22px",
                      verticalAlign: "super",
                      marginLeft: "2px",
                    }}
                  >
                    {fact.suffix}
                  </span>
                </div>
                <div
                  style={{
                    color: "#696969",
                    fontFamily: "var(--font-lato), 'Lato', sans-serif",
                    fontSize: "15px",
                    fontWeight: 700,
                    lineHeight: "22px",
                  }}
                >
                  {fact.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
