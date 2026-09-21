import React from "react";
import type { Metadata } from "next";
import DeepDreamContent from "./DeepDreamContent";

export const metadata: Metadata = {
  title: "DEEP DREAM - Global Relief Consult",
  description:
    "is an international brand that trains, empowers and deploys projects and programmes under Sustainability, ESG, CSR, M & E and specializes in Empowerment Training Programmes, Leadership Trainings, Skills Acquisition, Capacity Building and Content Development.",
  alternates: {
    canonical: "https://globalreliefconsult.com/deep-dream/",
  },
  openGraph: {
    title: "DEEP DREAM - Global Relief Consult",
    description:
      "is an international brand that trains, empowers and deploys projects and programmes under Sustainability, ESG, CSR, M & E and specializes in Empowerment Training Programmes, Leadership Trainings, Skills Acquisition, Capacity Building and Content Development.",
    url: "https://globalreliefconsult.com/deep-dream/",
    siteName: "Global Relief Consult",
    type: "article",
  },
};

export default function DeepDreamPage() {
  return <DeepDreamContent />;
}
