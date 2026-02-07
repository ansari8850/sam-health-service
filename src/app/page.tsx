import { Metadata } from "next";
import {
  HeroSection,
  HowItWorksSection,
  FeaturesSection,
  TestimonialsSection,
  ProductShowcaseSection,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Home - Trusted Diagnostic Services at Your Doorstep",
  description:
    "SAM Health Services offers 100+ lab tests with home sample collection. NABL certified labs, quick reports, and 24/7 support. Book your test today!",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <ProductShowcaseSection />
      <FeaturesSection />
      <TestimonialsSection />
    </>
  );
}
