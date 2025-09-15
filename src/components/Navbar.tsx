import React, { useState, useEffect } from 'react';
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
      const navbar = document.querySelector('[data-navbar="true"]') as HTMLElement | null;
      const navHeight = navbar?.offsetHeight ?? 0;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY - navHeight - 8;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Navigation - Horizontal */}
      <nav
        data-navbar="true"
        className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'bg-background/95 border-b border-border shadow-medium' : 'bg-transparent'
          } transition-shadow duration-300`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-24 lg:h-24 items-center">
            {/* Left: Logo */}
            <div className="flex flex-1 items-center justify-start">
              <button
                onClick={() => scrollToSection('#home')}
                className="flex items-center gap-3 hover:opacity-90 transition-opacity"
                aria-label="Go to home"
              >
                <img
                  src="/l2.png"
                  alt="Skoggata Tattoo Parlour"
                  className="h-24 lg:h-24"
                />
              </button>
            </div>

            {/* Center: Links - Desktop */}
            <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-sm xl:text-base font-medium font-heading transition-fast hover:text-accent ${activeSection === link.href.slice(1)
                    ? 'text-accent'
                    : 'text-muted-foreground'
                    }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right: Social icons (desktop) and Menu (mobile) */}
            <div className="flex flex-1 items-center justify-end gap-3">
              <div className="hidden md:flex items-center gap-2">
                <a
                  href="https://www.facebook.com/skoggatatattooparlour"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-accent/10 text-muted-foreground hover:text-accent transition-fast"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/skoggata_tattoo/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-accent/10 text-muted-foreground hover:text-accent transition-fast"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 lg:hidden rounded-lg border border-border hover:bg-accent/10 transition-fast"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="p-6 border-b border-border">
                <button
                  onClick={() => scrollToSection('#home')}
                  className="flex items-center justify-center w-full hover:opacity-80 transition-opacity duration-300"
                >
                  <img
                    src="/logo_stp.png"
                    alt="Skoggata Tattoo Parlour Logo"
                    className="h-20 w-auto max-w-full"
                  />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 py-6 px-6">
                <div className="space-y-4">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollToSection(link.href)}
                      className={`block w-full text-left py-3 px-4 text-xl font-medium font-heading transition-fast hover:text-accent hover:bg-accent/10 rounded-lg ${activeSection === link.href.slice(1)
                        ? 'text-accent bg-accent/10'
                        : 'text-muted-foreground'
                        }`}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Info and Social Links */}
              <div className="border-t border-border p-6">
                <div className="space-y-4">
                  {/* Contact Information */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>Skoggata 10, 1530 MOSS</span>
                    </div>
                    <a href="tel:+4769251008" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-fast">
                      <Phone className="w-4 h-4" />
                      <span>69 25 10 08</span>
                    </a>
                    <a href="mailto:skoggata@hotmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-fast">
                      <Mail className="w-4 h-4" />
                      <span>skoggata@hotmail.com</span>
                    </a>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-4 pt-4">
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
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};