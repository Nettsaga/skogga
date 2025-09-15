import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Hjem' },
    { href: '#about', label: 'Om Oss' },
    { href: '#services', label: 'Tjenester' },
    { href: '#gallery', label: 'Galleri' },
    { href: '#testimonies', label: 'Anmeldelser' },
    { href: '#contact', label: 'Kontakt' },
  ];

  const scrollToSection = (href: string) => {
    if (href === '#home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
      return;
    }

    const element = document.querySelector(href) as HTMLElement;
    if (element) {
      const navbarHeight = 104; // 40px utility bar + 64px main nav
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Utility Bar - Always Sticky */}
      <div className={`fixed top-0 left-0 right-0 z-50 h-10 bg-black/80 backdrop-blur-sm transition-all duration-300 ${isScrolled ? 'shadow-soft' : ''}`}>
        <div className="container mx-auto px-4 h-full flex items-center justify-between text-sm">
          {/* Desktop: Show address on left, contact on right */}
          <div className="hidden sm:flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>Skoggata 10, 1530 MOSS</span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-muted-foreground">
            <a href="tel:+4769251008" className="flex items-center gap-1 hover:text-primary transition-fast">
              <Phone className="w-3 h-3" />
              <span>69 25 10 08</span>
            </a>
            <a href="mailto:skoggata@hotmail.com" className="flex items-center gap-1 hover:text-primary transition-fast">
              <Mail className="w-3 h-3" />
              <span>skoggata@hotmail.com</span>
            </a>
          </div>
          
          {/* Mobile: Show only phone and email, centered */}
          <div className="sm:hidden flex items-center justify-center gap-3 text-muted-foreground w-full text-xs">
            <a href="tel:+4769251008" className="flex items-center gap-1 hover:text-primary transition-fast">
              <Phone className="w-3 h-3" />
              <span>69 25 10 08</span>
            </a>
            <a href="mailto:skoggata@hotmail.com" className="flex items-center gap-1 hover:text-primary transition-fast">
              <Mail className="w-3 h-3" />
              <span>skoggata@hotmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation - Also Sticky */}
      <nav className={`fixed top-10 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm transition-all duration-300 ${isScrolled ? 'shadow-medium border-b border-border' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary font-heading">Skogga</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`text-lg font-medium font-heading transition-fast hover:text-accent ${
                      activeSection === link.href.slice(1) 
                        ? 'text-accent' 
                        : 'text-muted-foreground'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <a 
                  href="https://www.facebook.com/skoggatatattooparlour" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-accent/10 hover:bg-accent hover:text-accent-foreground rounded-lg transition-all duration-300 text-accent"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/skoggata_tattoo/?hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-accent/10 hover:bg-accent hover:text-accent-foreground rounded-lg transition-all duration-300 text-accent"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-foreground hover:text-accent transition-fast"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`block w-full text-left py-2 text-base font-medium font-heading transition-fast hover:text-accent ${
                      activeSection === link.href.slice(1) 
                        ? 'text-accent' 
                        : 'text-muted-foreground'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <div className="flex items-center justify-center gap-4 mt-6">
                  <a 
                    href="https://www.facebook.com/skoggatatattooparlour" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-accent/10 hover:bg-accent hover:text-accent-foreground rounded-lg transition-all duration-300 text-accent"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://www.instagram.com/skoggata_tattoo/?hl=en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-accent/10 hover:bg-accent hover:text-accent-foreground rounded-lg transition-all duration-300 text-accent"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
};