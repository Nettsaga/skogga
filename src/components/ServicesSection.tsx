import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Calendar } from "lucide-react";
import OrnamentDivider from "@/components/accents/OrnamentDivider";
import WaveCrest from "@/components/accents/WaveCrest";
import BarbedWire from "@/components/accents/BarbedWire";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  details?: string[];
  icon: React.ReactNode;
  image: string;
  imageAlt: string;
  rotation: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  details,
  icon,
  image,
  imageAlt,
  rotation
}) => (
  <motion.div 
    className={`transform ${rotation} hover:rotate-0 transition-all duration-500 group`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6 }}
    whileHover={{ scale: 1.02, rotate: 0 }}
  >
    <Card className="bg-card/90 border-4 border-accent hover:border-primary hover:shadow-strong transition-all duration-300 h-full overflow-hidden">
      {/* Image Header */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute top-4 left-4">
          <div className="p-3 bg-accent/90 rounded-full text-accent-foreground shadow-lg">
            {icon}
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <CardTitle className="text-3xl font-bold text-white font-heading drop-shadow-lg">
            {title}
          </CardTitle>
        </div>
      </div>

      <CardContent className="p-6">
        <p className="text-muted-foreground leading-relaxed text-lg mb-6">
          {description}
        </p>
        
        {details && (
          <div className="space-y-3 bg-card/50 rounded-lg p-4 border border-border">
            <h4 className="font-semibold text-accent text-sm uppercase tracking-wide">Alderskrav:</h4>
            {details.map((detail, index) => (
              <p key={index} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                {detail}
              </p>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  </motion.div>
);

export const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Tatovering",
      description: "Vi har tre talentfulle tatoveringskunstnere som jobber for oss: Remi Sølvberg, Frida Grasto og Kelvin Halberg. Naviger ned på siden for å få en smak av vårt arbeid.",
      icon: <Palette className="w-6 h-6" />,
      image: "/about-3.jpg",
      imageAlt: "Skreddersydd tatovering av Remi Sølvberg - profesjonell tatoveringskunstner i Moss, Norge",
      rotation: "rotate-2"
    },
    {
      title: "Piercing",
      description: "Det er piercing hver tirsdag og fredag fra 14-17!",
      details: [
        "Aldersgrense 16 år.",
        "12 år i følge med foreldre, kun øreflipp piercing.",
        "14 år i følge med foreldre, gjelder ikke tunge- eller kinnpiercing.",
        "Aldersgrense 18 år for brystvorte piercing."
      ],
      icon: <Calendar className="w-6 h-6" />,
      image: "/about-2.jpg",
      imageAlt: "Profesjonell piercing av Frida Grasto - sikre piercingtjenester i Moss, Norge",
      rotation: "-rotate-2"
    }
  ];

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <WaveCrest className="absolute -top-4 right-0 w-[520px] h-[180px] text-accent opacity-20" />
      <BarbedWire className="absolute bottom-0 left-0 w-full h-[80px] text-accent/80 opacity-20" />
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
              Våre Tjenester
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Vi tilbyr profesjonelle tatoverings- og piercingtjenester i hjertet av Moss, Norge.
            </motion.p>
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

          {/* Services Grid */}
          <motion.div 
            className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <ServiceCard 
                  {...service}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};