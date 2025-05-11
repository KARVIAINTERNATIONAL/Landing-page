// src/app/page.tsx
import Hero from '@/components/Hero';
import Snapshot from '@/components/Snapshot';
import UNSDG from '@/components/UNSDG';
import HowItWorks from '@/components/HowItWorks';
import WhyPartner from '@/components/WhyPartner';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Snapshot />
      <UNSDG />
      <HowItWorks />
      <WhyPartner />
      <ContactForm />
      <Footer />
    </main>
  );
}