import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import OrnamentDivider from "@/components/accents/OrnamentDivider";
import BotanicalVines from "@/components/accents/BotanicalVines";
import studioInterior from "@/assets/studio-interior-1.jpg";
import { motion } from "framer-motion";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <BotanicalVines className="absolute -top-6 -left-10 w-[380px] h-[240px] text-accent opacity-25" />
      <BotanicalVines className="absolute bottom-0 right-0 w-[320px] h-[200px] rotate-180 text-accent opacity-20" />
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
              {/* Header */}
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <motion.h2 
                  className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Velkommen til Skoggata Tattoo Parlour!
                </motion.h2>
                <motion.div 
                  className="mt-6 flex justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <OrnamentDivider className="w-72 text-accent" />
                </motion.div>
              </motion.div>

          {/* Main Story Section */}
          <motion.div 
            className="grid lg:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            {/* Story Text */}
            <motion.div 
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="bg-card/50 border border-border rounded-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                    <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                      Street Style Tattoo ble etablert i <span className="text-accent font-semibold">1999</span> på Skoggata 8.
                      I <span className="text-accent font-semibold">2006</span> flyttet vi til Skoggata 10, hvor vi nå heter
                      <span className="text-primary font-semibold"> Skoggata Tattoo Parlour</span>.
                    </p>
                    <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                      Eier av lokalene og butikken er <span className="text-accent font-semibold">Remi Sølvberg</span>.
                    </p>
                    <p className="text-2xl font-bold text-foreground font-heading">
                      Velkommen til oss - vi elsker <span className="text-destructive">dristig blekk</span>!
                    </p>
              </motion.div>
            </motion.div>

            {/* Owner Image */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div 
                className="relative transform -rotate-2 hover:rotate-0 transition-transform duration-300"
                whileHover={{ scale: 1.05, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-card border-4 border-accent rounded-2xl p-4 shadow-strong">
                  <img 
                    src="/remi/25.jpeg" 
                    alt="Remi Sølvberg - Eier og profesjonell tatoveringskunstner ved Skoggata Tattoo Parlour i Moss, Norge"
                    className="w-full h-80 object-cover rounded-lg"
                    loading="lazy"
                  />
                      <p className="text-center mt-4 font-heading text-lg text-accent">Remi Sølvberg</p>
                      <p className="text-center text-sm text-muted-foreground">Eier & Kunstner</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Studio Images Grid */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="transform rotate-1 hover:rotate-0 transition-transform duration-300"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.03, rotate: 0 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-medium border-4 border-primary">
                <img 
                  src="/parlor.png" 
                  alt="Interiør av Skoggata Tattoo Parlour - profesjonelt tatoveringsstudio i Moss med moderne utstyr"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white font-heading text-lg">Vårt Studio</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="transform -rotate-1 hover:rotate-0 transition-transform duration-300"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.03, rotate: 0 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-medium border-4 border-accent">
                <img 
                  src="/kelvin/15.jpg" 
                  alt="Tatoveringsarbeid pågår hos Skoggata Tattoo Parlour - dristig blekk og profesjonell utførelse"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white font-heading text-lg">Dristig Blekk i Aksjon</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          
        </div>
      </div>
    </section>
  );
};