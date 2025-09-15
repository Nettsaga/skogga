import React, { useEffect, useMemo, useState } from 'react';
import { Button } from "@/components/ui/button";
// Using hero image from public folder
import { CornerOrnament } from "@/components/accents/CornerOrnament";
import MandalaBurst from "@/components/accents/MandalaBurst";
import DaggerRose from "@/components/accents/DaggerRose";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
  const images = useMemo(() => [
    '/store.jpg',
    '/hero/1.jpg',
  ], []);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((idx) => (idx + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [images.length]);
  const scrollToContact = () => {
    const contactElement = document.querySelector('#contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image - simplified, no parallax */}
      <div className="absolute inset-0">
        {/* Crossfade backgrounds */}
        {images.map((src, idx) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-[800ms] ease-linear ${idx === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
            }}
          />
        ))}
      </div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-overlay)' }} />
      {/* Unique motif */}
      <div className="absolute inset-0 flex items-center justify-center">
        <MandalaBurst className="w-[520px] h-[520px] text-accent opacity-20" />
        <DaggerRose className="absolute bottom-10 right-10 w-[180px] h-[180px] text-accent opacity-25" />
      </div>
      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "linear" }}
      >
        {/* Large centered hero logo */}
        <motion.div
          className="mb-6 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <img src="/l2.png" alt="Skoggata Tattoo Parlour" className="h-28 md:h-36 lg:h-56 w-auto drop-shadow-2xl" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
          <CornerOrnament className="absolute -top-8 -left-8 w-16 h-16 text-accent" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
          <CornerOrnament className="absolute -bottom-8 -right-8 w-16 h-16 rotate-180 text-accent" />
        </motion.div>
        <motion.h1
          className="text-3xl md:text-4xl lg:text-6xl font-bold text-foreground font-heading mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Skoggata Tattoo Parlour
          <br />
          <span className="text-destructive">Tatovering og piercing.</span>
        </motion.h1>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-6 text-lg font-semibold shadow-strong"
          >
            Ta kontakt
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator removed to reduce motion */}
    </section>
  );
};