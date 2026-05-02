import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { About } from "@/components/sections/About";
import { WhatHappens } from "@/components/sections/WhatHappens";
import { Experience } from "@/components/sections/Experience";
import { Audience } from "@/components/sections/Audience";
import { Venue } from "@/components/sections/Venue";
import { SocialProof } from "@/components/sections/SocialProof";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FloatingSymbol } from "@/components/shared/FloatingSymbol";

export default function Page() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <Manifesto />
        <About />
        <WhatHappens />
        <Experience />
        <Audience />
        <Venue />
        <SocialProof />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingSymbol />
    </>
  );
}
