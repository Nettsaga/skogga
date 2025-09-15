import React from 'react';
import { Instagram, Facebook, Mail, Phone } from "lucide-react";

import BarbedWire from "@/components/accents/BarbedWire";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-foreground border-t border-border relative overflow-hidden">
      <BarbedWire className="absolute top-0 left-0 w-full h-[80px] text-accent opacity-15" />
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Studio Info */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold font-heading mb-4">Skoggata Tattoo Parlour</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Norsk tatoveringskunst forankret i håndverk, presisjon og autentiske klientforhold. 
              Skaper meningsfulle tatoveringer som tåler tidens tann.
            </p>
            <div className="text-sm text-muted-foreground mb-4">
              <p>Org. no. 980 495 140</p>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/skoggata_tattoo/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-fast"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/skoggatatattooparlour" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-fast"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold font-heading mb-4">Åpningstider</h4>
            <div className="space-y-2 text-muted-foreground text-sm">
              <div className="flex justify-between">
                <span>Man - Fre</span>
                <span>12:00 - 17:00</span>
              </div>
              <div className="flex justify-between">
                <span>Lørdag</span>
                <span>12:00 - 15:00</span>
              </div>
              <div className="flex justify-between">
                <span>Søndag</span>
                <span>Stengt</span>
              </div>
            </div>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-lg font-semibold font-heading mb-4">Rask Kontakt</h4>
            <div className="space-y-3 text-muted-foreground">
              <a href="tel:+4769251008" className="flex items-center gap-2 hover:text-primary transition-fast">
                <Phone className="w-4 h-4" />
                <span>69 25 10 08</span>
              </a>
              <a href="tel:+4790092109" className="flex items-center gap-2 hover:text-primary transition-fast">
                <Phone className="w-4 h-4" />
                <span>900 92 109</span>
              </a>
              <a href="mailto:skoggata@hotmail.com" className="flex items-center gap-2 hover:text-primary transition-fast">
                <Mail className="w-4 h-4" />
                <span>skoggata@hotmail.com</span>
              </a>
              <div className="text-sm">
                <p>Skoggata 10</p>
                <p>1530 MOSS</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold font-heading mb-4">Tjenester</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Svart & Grå Realisme</li>
              <li>Fine Line Tatoveringer</li>
              <li>Japansk Tradisjonell</li>
              <li>Geometriske Design</li>
              <li>Neo-Tradisjonell</li>
              <li>Skreddersydde Konsultasjoner</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {currentYear} Skoggata Tattoo Parlour. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:text-foreground transition-fast">Personvernregler</a>
              <a href="#terms" className="hover:text-foreground transition-fast">Tjenestevilkår</a>
              <a href="#aftercare" className="hover:text-foreground transition-fast">Etterbehandlingsguide</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};