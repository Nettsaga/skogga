import React from 'react';
import { Instagram, Facebook, Mail, Phone } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Studio Info */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold font-heading mb-4">Skogga</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              Norwegian tattoo artistry rooted in craft, precision, and authentic client relationships. 
              Creating meaningful tattoos that stand the test of time.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/skogga.tattoo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-fast"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/skogga.tattoo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-fast"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold font-heading mb-4">Opening Hours</h4>
            <div className="space-y-2 text-primary-foreground/80 text-sm">
              <div className="flex justify-between">
                <span>Mon - Fri</span>
                <span>12:00 - 17:00</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>12:00 - 15:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-lg font-semibold font-heading mb-4">Quick Contact</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <a href="tel:+4700000000" className="flex items-center gap-2 hover:text-accent transition-fast">
                <Phone className="w-4 h-4" />
                <span>+47 00 00 00 00</span>
              </a>
              <a href="mailto:hello@skogga.no" className="flex items-center gap-2 hover:text-accent transition-fast">
                <Mail className="w-4 h-4" />
                <span>hello@skogga.no</span>
              </a>
              <div className="text-sm">
                <p>Skoggata 10</p>
                <p>1530 Moss, Norway</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold font-heading mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80 text-sm">
              <li>Black & Grey Realism</li>
              <li>Fine Line Tattoos</li>
              <li>Japanese Traditional</li>
              <li>Geometric Designs</li>
              <li>Neo-Traditional</li>
              <li>Custom Consultations</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>&copy; {currentYear} Skogga Tattoo. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:text-primary-foreground transition-fast">Privacy Policy</a>
              <a href="#terms" className="hover:text-primary-foreground transition-fast">Terms of Service</a>
              <a href="#aftercare" className="hover:text-primary-foreground transition-fast">Aftercare Guide</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};