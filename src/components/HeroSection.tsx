import React from 'react';
import { Button } from "@/components/ui/button";
// Using hero image from public folder
import { CornerOrnament } from "@/components/accents/CornerOrnament";
import MandalaBurst from "@/components/accents/MandalaBurst";
import DaggerRose from "@/components/accents/DaggerRose";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    const contactElement = document.querySelector('#contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 parallax"
        style={{
          backgroundImage: `url(/hero/1.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{ background: 'var(--gradient-overlay)' }}
        />
        {/* Unique motif */}
        <div className="absolute inset-0 flex items-center justify-center">
          <MandalaBurst className="w-[520px] h-[520px] text-accent opacity-20" />
          <DaggerRose className="absolute bottom-10 right-10 w-[180px] h-[180px] text-accent opacity-25" />
        </div>
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CornerOrnament className="absolute -top-8 -left-8 w-16 h-16 text-accent" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <CornerOrnament className="absolute -bottom-8 -right-8 w-16 h-16 rotate-180 text-accent" />
        </motion.div>
        <motion.h1 
          className="text-3xl md:text-4xl lg:text-6xl font-bold text-foreground font-heading mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Tatovering med presisjon.
          <br />
          <span className="text-destructive">Båret for livet.</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Skreddersydde tatoveringer av spesialistkunstnere.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-6 text-lg font-semibold shadow-strong"
          >
            Bestill konsultasjon
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};