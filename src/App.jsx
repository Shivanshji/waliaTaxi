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
import { localBusinessSchema, FAQSchema } from './seo/schema';

export default function App() {
  const faqs = [
    {
      q: "How do I book a taxi in Jalandhar with WaliaTaxi?",
      a: "You can book a taxi easily by calling us at +91-98722-00267 or by using our online booking form on the website. We offer 24/7 service."
    },
    {
      q: "Do you provide airport transfers from Jalandhar?",
      a: "Yes, we specialize in punctual airport transfers from Jalandhar to Delhi Airport (IGI), Amritsar Airport, and Chandigarh Airport at fixed rates."
    },
    {
      q: "What are your taxi rates in Jalandhar?",
      a: "Our rates are highly competitive. Local trips start at affordable prices, and we offer transparent pricing for outstation and airport journeys with no hidden costs."
    },
    {
      q: "Is WaliaTaxi available for outstation trips from Jalandhar?",
      a: "Absolutely! We provide reliable outstation cab services from Jalandhar to all major cities including Ludhiana, Amritsar, Chandigarh, and Delhi."
    },
    {
      q: "Are your drivers verified and professional?",
      a: "Yes, all our drivers are experienced professionals who are well-versed with routes across Punjab and neighboring states, ensuring a safe and comfortable ride."
    }
  ];

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
