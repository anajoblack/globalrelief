import React from "react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Leadership - Global Relief Consult",
  description:
    "Team Global Relief Consult (#TeamGRC) is prestigious and dedicated to integrity and impact. Meet some members of the team.",
};

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const leadershipMembers: TeamMember[] = [
  {
    name: "Shiv Jing",
    role: "CEO",
    image: "/wp-content/uploads/2024/03/c.jpg",
  },
  {
    name: "Dr. Hannah Amoabea M. Simpson",
    role: "Deputy CEO & VP - Medical Research & Women Health Advisory",
    image: "/wp-content/uploads/2025/05/samp.jpg",
  },
  {
    name: "Dr. Will Kaiser",
    role: "Global Vice President (Management)",
    image: "/wp-content/uploads/2024/03/1-716x1024.jpeg",
  },
  {
    name: "Jonathan Mawuli Dzaisu, ESQ.",
    role: "Global Head, Legal & External Affairs",
    image: "/wp-content/uploads/2022/12/Dzaisu.jpg",
  },
  {
    name: "Hannah Amoabea",
    role: "VP- HR & Core-Culture Custody",
    image: "/wp-content/uploads/2024/03/g.jpg",
  },
  {
    name: "Joshua Nketia",
    role: "Construction & Portfolio Management Director",
    image: "/wp-content/uploads/2025/05/nke-768x1024.jpeg",
  },
  {
    name: "Akwesi Obeng-Adjei",
    role: "VP- Strategic Advancement & Director of Audits (Saudi Arabia)",
    image: "/wp-content/uploads/2024/03/b.jpg",
  },
  {
    name: "Dr. Amaris Nana Adjei Perbi, PMP; MSc. Rev",
    role: "Director of Operations (Africa & Global Events Project)",
    image: "/wp-content/uploads/2022/12/rev.jpeg",
  },
  {
    name: "Annica Nsiah-Apau",
    role: "Global Head, Event Marketing & Penetration Mgt",
    image: "/wp-content/uploads/2025/04/ani.jpg",
  },
  {
    name: "Dusabimana O'keefe Apollos",
    role: "Associate Consultant & East Africa Vice President",
    image: "/wp-content/uploads/2022/12/rr.jpeg",
  },
  {
    name: "Adwoa Asare",
    role: "Logistics & Supply Chain Director",
    image: "/wp-content/uploads/2025/04/cas.jpg",
  },
  {
    name: "Bright Dordzi",
    role: "Operations & Central Systems Manager- WECA Region",
    image: "/wp-content/uploads/2025/05/4P0A0234-683x1024.jpg",
  },
  {
    name: "Afriyie Wutah",
    role: "Talent Sourcing & Youth Integration Manager",
    image: "/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-20-at-10.17.17-PM.jpeg",
  },
];

const boardMembers: TeamMember[] = [
  {
    name: "Dr. Sujith JayaprakaSh",
    role: "Lead Consultant (Global)",
    image: "/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-07-at-9.43.39-AM.jpeg",
  },
  {
    name: "Elsie Effah Kaufmann, PhD PE-GhIE DhPMP FBSE FGA",
    role: "Lead Consultant (Africa)",
    image: "/wp-content/uploads/2022/12/drghana-news-1.jpg",
  },
];

export default function OurTeamPage() {
  return (
    <main className="our-team-page">
      {/* Top Header Section (Yellow #ECD812) */}
      <section
        style={{
          backgroundColor: "#ECD812",
          padding: "45px 20px 35px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "var(--font-roboto), 'Roboto', sans-serif",
              fontSize: "15px",
              fontWeight: 700,
              color: "#333333",
              marginBottom: "8px",
            }}
          >
            #TeamGRC
          </p>
          <h1
            style={{
              fontFamily: "var(--font-lato), 'Lato', sans-serif",
              fontSize: "36px",
              fontWeight: 700,
              color: "#222222",
              margin: "0 0 20px 0",
              lineHeight: 1.2,
            }}
          >
            The Leadership
          </h1>
          <p
            style={{
              fontFamily: "var(--font-roboto), 'Roboto', sans-serif",
              fontSize: "15px",
              lineHeight: 1.6,
              color: "#333333",
              margin: "0 0 10px 0",
            }}
          >
            Team Global Relief Consult (#TeamGRC) is prestigious and dedicated
            to integrity and impact.
          </p>
          <p
            style={{
              fontFamily: "var(--font-roboto), 'Roboto', sans-serif",
              fontSize: "15px",
              lineHeight: 1.6,
              color: "#333333",
              margin: "0 0 10px 0",
            }}
          >
            Over the years, we have ensured that our commitment to our clients
            evolve the best strategies and delivers accountable solutions to our
            client’s call.
          </p>
          <p
            style={{
              fontFamily: "var(--font-roboto), 'Roboto', sans-serif",
              fontSize: "15px",
              lineHeight: 1.6,
              color: "#333333",
              margin: "0 0 10px 0",
            }}
          >
            Our team of experts ensures that we deliver practical consultancy
            that works with the sector being consulted on.
          </p>
          <p
            style={{
              fontFamily: "var(--font-roboto), 'Roboto', sans-serif",
              fontSize: "15px",
              lineHeight: 1.6,
              color: "#333333",
              fontWeight: 600,
              margin: 0,
            }}
          >
            Meet some members of the team:
          </p>
        </div>
      </section>

      {/* Leadership Grid Section (#F4F5F6) */}
      <section
        style={{
          backgroundColor: "#F4F5F6",
          padding: "60px 20px 80px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "26px",
          }}
        >
          {leadershipMembers.map((member, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "15px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                padding: "12px",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "260px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  backgroundColor: "#eaeaea",
                  marginBottom: "14px",
                }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  style={{ objectFit: "cover", display: "block" }}
                />
              </div>

              <div style={{ padding: "0 4px 8px 4px" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-lato), 'Lato', sans-serif",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#1a1a1a",
                    margin: "0 0 6px 0",
                    lineHeight: 1.3,
                  }}
                >
                  {member.name}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-roboto), 'Roboto', sans-serif",
                    fontSize: "13px",
                    color: "#666666",
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Board Section (Yellow #ECD812) */}
      <section
        style={{
          backgroundColor: "#ECD812",
          padding: "50px 20px 70px 20px",
        }}
      >
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <p
              style={{
                fontFamily: "var(--font-roboto), 'Roboto', sans-serif",
                fontSize: "15px",
                fontWeight: 700,
                color: "#333333",
                marginBottom: "8px",
              }}
            >
              #TeamGRC
            </p>
            <h2
              style={{
                fontFamily: "var(--font-lato), 'Lato', sans-serif",
                fontSize: "36px",
                fontWeight: 700,
                color: "#222222",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              The Board
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "26px",
            }}
          >
            {boardMembers.map((member, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "15px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  padding: "12px",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "260px",
                    borderRadius: "10px",
                    overflow: "hidden",
                    backgroundColor: "#eaeaea",
                    marginBottom: "14px",
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    style={{ objectFit: "cover", display: "block" }}
                  />
                </div>

                <div style={{ padding: "0 4px 8px 4px" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-lato), 'Lato', sans-serif",
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#1a1a1a",
                      margin: "0 0 6px 0",
                      lineHeight: 1.3,
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-roboto), 'Roboto', sans-serif",
                      fontSize: "13px",
                      color: "#666666",
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
