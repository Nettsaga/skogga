import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSidebar } from "@/hooks/useSidebar";

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isCollapsed, setIsCollapsed } = useSidebar();

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
      const elementPosition = element.offsetTop - 20; // Small offset for better positioning
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button - Only visible on mobile */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-3 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-lg text-foreground hover:text-accent transition-fast"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Vertical Sidebar Navigation - Desktop */}
      <nav 
        className={`hidden lg:flex fixed left-0 top-0 h-full z-40 bg-background/95 border-r border-border transition-all duration-300 ${
          isCollapsed ? 'w-20' : 'w-80'
        } ${isScrolled ? 'shadow-medium' : ''}`}
        style={{
          backgroundImage: isCollapsed ? 'none' : 'url(/logo_stp.png)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundAttachment: 'local'
        }}
      >
        <div className="flex flex-col h-full w-full relative">
          {/* Background overlay for readability */}
          {!isCollapsed && (
            <div className="absolute inset-0 bg-background/60"></div>
          )}
          {/* Invisible clickable area for logo background */}
          {!isCollapsed && (
            <button
              onClick={() => scrollToSection('#home')}
              className="absolute inset-0 z-0 hover:bg-accent/5 transition-colors duration-300"
              aria-label="Go to home"
            />
          )}
          {/* Header with Logo and Collapse Button */}
          <div className={`${isCollapsed ? 'p-4' : 'p-6 pb-8'} border-b border-border relative z-10`}>
            {!isCollapsed && (
              <div className="flex justify-end">
                <button
                  onClick={() => setIsCollapsed(true)}
                  className="p-2 text-muted-foreground hover:text-accent transition-fast rounded-lg hover:bg-accent/10"
                  title="Collapse sidebar"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>
            )}
            {isCollapsed && (
              <button 
                onClick={() => scrollToSection('#home')}
                className="flex items-center justify-center w-full hover:opacity-80 transition-opacity duration-300"
              >
                <img 
                  src="/logo_stp.png" 
                  alt="Skoggata Tattoo Parlour Logo" 
                  className="h-12 w-auto max-w-full"
                />
              </button>
            )}
            {isCollapsed && (
              <button
                onClick={() => setIsCollapsed(false)}
                className="w-full mt-4 p-2 text-muted-foreground hover:text-accent transition-fast rounded-lg hover:bg-accent/10 flex justify-center"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Navigation Links */}
          <div className="flex-1 py-6 relative z-10">
            <div className="space-y-2 px-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`w-full flex items-center ${isCollapsed ? 'justify-center px-3' : 'px-4'} py-3 text-left font-medium font-heading transition-fast hover:text-accent hover:bg-accent/10 rounded-lg ${
                    activeSection === link.href.slice(1) 
                      ? 'text-accent bg-accent/10' 
                      : 'text-muted-foreground'
                  }`}
                  title={isCollapsed ? link.label : undefined}
                >
                  {isCollapsed ? (
                    <span className="text-lg font-bold">{link.label.charAt(0)}</span>
                  ) : (
                    <span className="text-lg">{link.label}</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info and Social Links */}
          <div className="border-t border-border p-4 relative z-10">
            {!isCollapsed && (
              <div className="space-y-4">
                {/* Contact Information */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>Skoggata 10, 1530 MOSS</span>
                  </div>
                  <a href="tel:+4769251008" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-fast">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span>69 25 10 08</span>
                  </a>
                  <a href="mailto:skoggata@hotmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-fast">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span>skoggata@hotmail.com</span>
                  </a>
                </div>
                
                {/* Social Links */}
                <div className="flex items-center gap-3 pt-2">
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
            )}
            
            {isCollapsed && (
              <div className="flex flex-col items-center gap-3">
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
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-sm"
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
                      className={`block w-full text-left py-3 px-4 text-xl font-medium font-heading transition-fast hover:text-accent hover:bg-accent/10 rounded-lg ${
                        activeSection === link.href.slice(1) 
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