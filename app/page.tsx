import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";

import Services from "@/components/Services";
import LocalSEO from "@/components/LocalSEO";
import WhyChooseUs from "@/components/WhyChooseUs";
import Packs from "@/components/Packs";


import EventTypes from "@/components/EventTypes";
import Testimonials from "@/components/Testimonials";

import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer/Footer";

import { Realisations } from "@/components/realisation/Realisations";

export default function Home() {
  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <Header />

      <main>
        {/* =====================================================
            HERO
        ===================================================== */}

        <Hero />

        {/* =====================================================
            PRESTATIONS
        ===================================================== */}

        <section id="services">
          <Services />
          <LocalSEO />
        </section>

        {/* =====================================================
            POURQUOI NOUS CHOISIR
        ===================================================== */}

        <WhyChooseUs />

        {/* =====================================================
            PACKS
        ===================================================== */}

        <section id="packs">
          <Packs />
        </section>

          {/* =====================================================
            NOS RÉALISATIONS
        ===================================================== */}

        <Realisations />

        
        {/* =====================================================
            TYPES D'ÉVÉNEMENTS
        ===================================================== */}

        <EventTypes />

        {/* =====================================================
            AVIS CLIENTS
        ===================================================== */}

        <Testimonials />

        {/* =====================================================
            DEMANDE DE DEVIS
        ===================================================== */}

        <section id="contact">
          <QuoteForm />
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />
    </>
  );
}