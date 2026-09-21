import React from "react";
import type { Metadata } from "next";
import BraveHeartContent from "./BraveHeartContent";

export const metadata: Metadata = {
  title: "BRAVE HEART - Global Relief Consult",
  description:
    "Welcome to Brave Heart Kids Haven and Montessori, a comprehensive plaza that offers a range of services for children, including transport, after school care, and early education.",
  alternates: {
    canonical: "https://globalreliefconsult.com/brave-heart/",
  },
};

export default function BraveHeartPage() {
  return <BraveHeartContent />;
}
