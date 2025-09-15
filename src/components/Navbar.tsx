import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";

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
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Utility Bar - Always Sticky */}
      <div className={`fixed top-0 left-0 right-0 z-50 h-10 bg-primary/95 backdrop-blur-sm transition-all duration-300 ${isScrolled ? 'shadow-soft' : ''}`}>
        <div className="container mx-auto px-4 h-full flex items-center justify-between text-sm">
          <div className="flex items-center gap-4 text-primary-foreground">
            <div className="hidden sm:flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>Skoggata 10, Moss, Norway</span>
            </div>
            <div className="sm:hidden flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>Moss, Norway</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-primary-foreground">
            <a href="tel:+4700000000" className="flex items-center gap-1 hover:text-accent transition-fast">
              <Phone className="w-3 h-3" />
              <span className="hidden sm:inline">+47 00 00 00 00</span>
            </a>
            <a href="mailto:hello@skogga.no" className="flex items-center gap-1 hover:text-accent transition-fast">
              <Mail className="w-3 h-3" />
              <span className="hidden sm:inline">hello@skogga.no</span>
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
                    className={`text-sm font-medium transition-fast hover:text-primary ${
                      activeSection === link.href.slice(1) 
                        ? 'text-primary' 
                        : 'text-muted-foreground'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              <Button 
                onClick={() => scrollToSection('#contact')} 
                className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-soft"
              >
                Book a Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-foreground hover:text-primary transition-fast"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`block w-full text-left py-2 text-base font-medium transition-fast hover:text-primary ${
                      activeSection === link.href.slice(1) 
                        ? 'text-primary' 
                        : 'text-muted-foreground'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <Button 
                  onClick={() => scrollToSection('#contact')} 
                  className="w-full bg-primary hover:bg-primary-hover text-primary-foreground shadow-soft mt-4"
                >
                  Book a Consultation
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};