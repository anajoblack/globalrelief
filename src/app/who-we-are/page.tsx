import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Who We Are - Global Relief Consult",
  description:
    "Global Relief Consult (GRC) organizes and manages global events, trains, empowers and deploys projects and programmes under Sustainability, ESG, CSR, M & E.",
};

export default function WhoWeArePage() {
  return (
    <main className="who-we-are-page">
      {/* Section 1: Yellow Header Section */}
      <section
        style={{
          backgroundColor: "#E1C224",
          padding: "46px 20px 79px 20px",
        }}
      >
        <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
          <div style={{ marginBottom: "15px" }}>
            <h3
              style={{
                fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                fontSize: "18px",
                fontWeight: 600,
                color: "#333333",
                textTransform: "capitalize",
                margin: "0 0 13px 0",
              }}
            >
              Who We Are
            </h3>
            <h1
              style={{
                fontFamily: "var(--font-lato), 'Lato', sans-serif",
                fontSize: "36px",
                fontWeight: 700,
                color: "#333333",
                margin: "0 0 22px 0",
                lineHeight: "52px",
                textTransform: "capitalize",
              }}
            >
              Global Relief Consult (GRC)
            </h1>
          </div>
          <p
            style={{
              textAlign: "justify",
              fontFamily: "var(--font-roboto), 'Roboto', sans-serif",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "33px",
              color: "#4C4141",
              margin: 0,
            }}
          >
            that organizes and manages global events, trains, empowers and
            deploys projects and programmes under Sustainability, ESG, CSR, M &amp;
            E and specializes in Empowerment Training Programmes, Leadership
            Trainings, Skills Acquisition, Capacity Building and Content
            Development. Our pool also delivers on Technology (STEM/STEAM,
            STEMVoc, AI/IoT), Vocational (T-VET), Risk and Project Management
            portfolios amongst others.
          </p>
        </div>
      </section>

      {/* Section 2: Cream / Light Yellow Footprints Section */}
      <section
        style={{
          backgroundColor: "#FEF8DA",
          padding: "56px 20px 39px 20px",
        }}
      >
        <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
          <p
            style={{
              textAlign: "justify",
              fontFamily: "var(--font-roboto), 'Roboto', sans-serif",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "33px",
              color: "#4C4141",
              margin: 0,
            }}
          >
            <b>Global Relief Consult</b> has footprints across Africa, Europe,
            United Kingdom and the United States of America.
            <br />
            <br />
            With our regional managers in Rwanda, East Africa; Ghana in West
            Africa; Limpopo and Durban in South Africa; London, UK and New
            Jersey in the United States we keep expanding our services across the
            globe with distinct leaders who drive our services to serve various
            organizations and individuals. With our unique expertise, we are able
            to create business goals for desert places out of nothing. We make
            time to build visions and missions as well as attainable goals for
            our clients all over the world. At every GRC empowerment session, we
            build EVERYTHING out of NOTHING. Engage our services and experience
            absolute precision and results. We are accountable to our
            commitments.
          </p>
        </div>
      </section>

      {/* Section 3: Entities We Support & Illustration */}
      <section
        style={{
          backgroundColor: "#F5F5F4",
          padding: "40px 20px 50px 20px",
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
            <p
              style={{
                fontFamily: "var(--font-roboto), 'Roboto', sans-serif",
                fontSize: "20px",
                fontWeight: "bold",
                lineHeight: "33px",
                color: "#4C4141",
                marginBottom: "16px",
              }}
            >
              Our Team ensures that all entities we work with such as:
            </p>
            <ul
              className="bullet-list"
              style={{
                fontFamily: "var(--font-roboto), 'Roboto', sans-serif",
                fontSize: "18px",
                fontWeight: 500,
                lineHeight: "1.8",
                color: "#4C4141",
                paddingLeft: "28px",
                listStyleType: "disc",
                marginBottom: "20px",
              }}
            >
              <li style={{ listStyleType: "disc", display: "list-item", marginBottom: "4px" }}>
                Non-governmental organizations (NGOs)
              </li>
              <li style={{ listStyleType: "disc", display: "list-item", marginBottom: "4px" }}>
                Government Community Support Groups (GCSG)
              </li>
              <li style={{ listStyleType: "disc", display: "list-item", marginBottom: "4px" }}>
                Volunteering Programme Support Groups (VPSG)
              </li>
              <li style={{ listStyleType: "disc", display: "list-item", marginBottom: "4px" }}>
                Volunteer Service Overseas (VSO)
              </li>
            </ul>
            <p
              style={{
                textAlign: "justify",
                fontFamily: "var(--font-roboto), 'Roboto', sans-serif",
                fontSize: "18px",
                fontWeight: 500,
                lineHeight: "1.6",
                color: "#4C4141",
                margin: 0,
              }}
            >
              as well as various humanitarian bodies and groups who seek to
              support the disadvantaged and vulnerable in societies especially
              women and girls have the needed trainings, data base and Continuity
              Management Roadmaps to guide their implementations and project
              deployment.
            </p>
          </div>

          <div
            style={{
              flex: "1 1 380px",
              maxWidth: "460px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src="/wp-content/uploads/2022/12/consulting-concept-illustration_114360-2579.webp"
              alt="Consulting Concept Illustration"
              width={460}
              height={460}
              style={{ width: "100%", height: "auto", display: "block" }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Section 4: Needs Assessment, ESG, Deliveries */}
      <section
        style={{
          backgroundColor: "#FFFFFF",
          padding: "42px 20px 40px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1140px",
            margin: "0 auto",
            fontFamily: "var(--font-roboto), 'Roboto', sans-serif",
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: "26px",
            color: "#5B5B5B",
          }}
        >
          <p style={{ marginBottom: "20px" }}>
            <b style={{ color: "#333333" }}>Needs Assessment: </b>
            Global Relief Consult mobilizes persons and resources to detect
            peculiar needs of identifiable groups. Upon being contacted by our
            clients, we conduct a needs assessment and conclude on a deployable
            monitoring and evaluation plan subject to the agreement.
          </p>
          <p style={{ marginBottom: "20px" }}>
            <b style={{ color: "#333333" }}>ESG Disclosure:</b> Global Relief
            Consult makes use of the Environmental, Social, and Governance (ESG)
            Disclosure. We go into the client’s ideology to develop strategic
            directions that yield ROI (Return on Investment) based on corporate
            positioning and to encourage companies to act responsibly. We also
            draw Sustainability Programmes with an eye on Corporate Social
            Investment/ Responsibility.
          </p>
          <p style={{ marginBottom: "20px" }}>
            We organize trainings for teams and groups that sign up to bring
            them to speed on project management and related protocols.
          </p>
          <p style={{ marginBottom: "20px" }}>
            <b style={{ color: "#333333" }}>Thematic Deliveries: </b>works
            specifically with different themes to ensure clients do not ‘just’
            make wholesale giving or donations but rather ensure the
            intervention by the person or organisation is relevant to a
            continuity strategy. Eg. a telecom company’s theme vis-a-vis its
            project would be different from that of an oil and gas company. GRC
            has expertise in guiding all these delivery protocols and rendering
            accountability.
          </p>
          <p style={{ margin: 0 }}>
            We run training programmes for clients in Sustainability/ESG/CSR,
            knowledge acquisition and deployment, Artificial Intelligence (AI),
            STEM/STEAM, Digital Marketing (Awareness Creation), technological
            innovations of the times. We ensure the deprived are able to
            integrate into the society.
          </p>
        </div>
      </section>

      {/* Section 5: Vision & Mission */}
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
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "50px",
          }}
        >
          <div>
            <h2
              style={{
                color: "#FFFFFF",
                fontSize: "32px",
                fontWeight: 700,
                margin: "0 0 12px 0",
                fontFamily: "var(--font-lato), 'Lato', sans-serif",
              }}
            >
              Vision
            </h2>
            <div
              style={{
                width: "100px",
                height: "2px",
                backgroundColor: "#BDBDBD",
                marginBottom: "20px",
              }}
            />
            <p
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "17px",
                fontWeight: "bold",
                color: "#BDBDBD",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              To be a global brand of self-driven people actively impacting a
              just democratic and sustainable world where empowerments and
              resources are deployed, everyone strives in dignity, and poverty
              and inequalities are no more.
            </p>
          </div>

          <div>
            <h2
              style={{
                color: "#FFFFFF",
                fontSize: "32px",
                fontWeight: 700,
                margin: "0 0 12px 0",
                fontFamily: "var(--font-lato), 'Lato', sans-serif",
              }}
            >
              Mission
            </h2>
            <div
              style={{
                width: "100px",
                height: "2px",
                backgroundColor: "#BDBDBD",
                marginBottom: "20px",
              }}
            />
            <p
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "17px",
                fontWeight: "bold",
                color: "#BDBDBD",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              Our mission is to help our clients make distinctive, lasting,
              <br />
              and substantial decisions in their strategic deliveries and to
              build an enviable brand that attracts, develops, excites, and
              retains exceptional stake-holders.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Funding */}
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
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "50px",
          }}
        >
          <div>
            <h2
              style={{
                color: "#FFFFFF",
                fontSize: "32px",
                fontWeight: 700,
                margin: "0 0 12px 0",
                fontFamily: "var(--font-lato), 'Lato', sans-serif",
              }}
            >
              Funding
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
                fontSize: "16px",
                lineHeight: "1.7",
                marginBottom: "20px",
                fontFamily: "var(--font-roboto), 'Roboto', sans-serif",
              }}
            >
              We are a team of experts/business owners (friends) across various
              fields of work such as Cyber Security, Nursing, Project
              Management Professionals, Technology, Agile, Aged Management,
              Home Care Givers, etc. across various countries such as Rwanda,
              United Kingdom, Liberia, United States, Ghana and still counting
              who mobilizes funds to train and empower stakeholders that
              require our field of expertise. We also get contracted by
              organisations and agencies to deploy our services.
            </p>
            <p
              style={{
                color: "#BDBDBD",
                fontSize: "16px",
                lineHeight: "1.7",
                margin: 0,
                fontFamily: "var(--font-roboto), 'Roboto', sans-serif",
              }}
            >
              ‘<b>Friends Aligned</b>’ is our unofficial group which was started
              in 2015 and has today grown into <b>GLOBAL RELIEF CONSULT</b>.
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
