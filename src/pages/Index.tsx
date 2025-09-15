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
import { useSidebar } from '@/hooks/useSidebar';

const Index = () => {
  const activeSection = useActiveSection();
  const { isCollapsed } = useSidebar();

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeSection={activeSection} />
      
      {/* Main content with left margin for desktop sidebar */}
      <main className={`transition-all duration-300 ${isCollapsed ? 'lg:ml-20' : 'lg:ml-80'}`}>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <TestimonySection />
        <ContactSection />
      </main>
      
      <div className={`transition-all duration-300 ${isCollapsed ? 'lg:ml-20' : 'lg:ml-80'}`}>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
