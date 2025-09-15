import React from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { GallerySection } from '@/components/GallerySection';
import { TestimonySection } from '@/components/TestimonySection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { useActiveSection } from '@/hooks/useActiveSection';

const Index = () => {
  const activeSection = useActiveSection();

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeSection={activeSection} />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <TestimonySection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
