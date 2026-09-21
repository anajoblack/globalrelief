import React from "react";
import HeroSlider from "@/components/HeroSlider";
import WelcomeSection from "@/components/WelcomeSection";
import QuoteSection from "@/components/QuoteSection";
import GalleryAccordion from "@/components/GalleryAccordion";
import ContactCTA from "@/components/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <WelcomeSection />
      <QuoteSection />
      <GalleryAccordion />
      <ContactCTA />
    </>
  );
}
