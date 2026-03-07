import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Cities from './components/Cities';
import HowItWorks from './components/HowItWorks';
import Fleet from './components/Fleet';
import Tours from './components/Tours';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import SEOHead from './components/SEOHead';
import FAQ from './components/FAQ';
import { faqs } from './data/faqs';
import { localBusinessSchema, FAQSchema } from './seo/schema';

export default function App() {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessSchema,
      FAQSchema(faqs)
    ]
  };

  return (
    <>
      <SEOHead
        title="Taxi in Jalandhar — 24/7 Reliable Cab Booking | WaliaTaxi"
        description="Book a reliable taxi in Jalandhar with WaliaTaxi. Affordable cab hire for airport transfers, local trips, and outstation journeys. Available 24/7. Call +91-98722-00267."
        path="/"
        schema={combinedSchema}
      />
      <Navbar />
      <main>
        <Hero />
        <Tours />
        <Fleet />
        <Cities />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
