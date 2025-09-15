import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import studioInterior from "@/assets/studio-interior-1.jpg";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-6">
              Our Philosophy
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Two Column Content */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground font-heading">
                Craft & Artistry
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                At Skogga, every tattoo is a collaboration between artist and client. We believe in taking the time to understand your vision, creating custom designs that reflect your story while maintaining the highest standards of artistic excellence.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Our Norwegian roots inspire our approach to clean, thoughtful design. We work with intention, creating tattoos that will age beautifully and remain meaningful for years to come.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground font-heading">
                Health & Aftercare
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Your safety and the longevity of your tattoo are our top priorities. We follow strict hygiene protocols and use only premium, single-use equipment in our sterile environment.
              </p>
              
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-3">Aftercare Essentials:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Wash hands before touching your tattoo</li>
                  <li>• Use mild, unscented soap and gentle patting</li>
                  <li>• Apply thin layer of recommended moisturizer</li>
                  <li>• Avoid sun, sauna, and swimming for 2-3 weeks</li>
                  <li>• Never pick or scratch - let it heal naturally</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3 italic">
                  *This is general guidance, not medical advice. Follow your artist's specific instructions.
                </p>
              </div>
            </div>
          </div>

          {/* Studio Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-medium">
            <img 
              src={studioInterior} 
              alt="Clean, modern Scandinavian tattoo studio interior with matte black stations and natural lighting"
              className="w-full h-80 md:h-96 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};