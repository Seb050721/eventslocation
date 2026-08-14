import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import EventTypes from "@/components/EventTypes";
import Packs from "@/components/Packs";
import QuoteForm from "@/components/QuoteForm";
import TrustBar from "@/components/TrustBar";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer/Footer";
import LocalSEO from "@/components/LocalSEO";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <section id="services">
        <Services />
        <LocalSEO />
      </section>

      <WhyChooseUs />

      <section id="packs">
        <Packs />
      </section>

      <Stats />

      <section id="gallery">
        <Gallery />
      </section>

      <TrustBar />

      <EventTypes />

      <Testimonials />

      <section id="contact">
        <QuoteForm />
      </section>

      <Footer />
    </>
  );
}