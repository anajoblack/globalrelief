import React from "react";
import type { Metadata } from "next";
import PurplePetalsContent from "./PurplePetalsContent";

export const metadata: Metadata = {
  title:
    "Purple Petals Construction, Transport and Logistics LLC - Global Relief Consult",
  description:
    "is an international brand that trains, empowers and deploys projects and programmes under Sustainability, ESG, CSR, M & E and specializes in Empowerment Training Programmes, Leadership Trainings, Skills Acquisition, Capacity Building and Content Development.",
  alternates: {
    canonical:
      "https://globalreliefconsult.com/purple-petals-construction-transport-and-logistics-llc/",
  },
  openGraph: {
    title:
      "Purple Petals Construction, Transport and Logistics LLC - Global Relief Consult",
    description:
      "is an international brand that trains, empowers and deploys projects and programmes under Sustainability, ESG, CSR, M & E and specializes in Empowerment Training Programmes, Leadership Trainings, Skills Acquisition, Capacity Building and Content Development.",
    url: "https://globalreliefconsult.com/purple-petals-construction-transport-and-logistics-llc/",
    siteName: "Global Relief Consult",
    type: "article",
  },
};

export default function PurplePetalsPage() {
  return <PurplePetalsContent />;
}
