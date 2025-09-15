import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, DollarSign, Palette } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  sessionLength: string;
  dayRateRange: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  sessionLength, 
  dayRateRange,
  icon 
}) => (
  <Card className="bg-card border border-border hover:shadow-medium transition-all duration-300 group">
    <CardHeader className="pb-4">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          {icon}
        </div>
        <CardTitle className="text-xl font-semibold text-foreground font-heading">
          {title}
        </CardTitle>
      </div>
    </CardHeader>
    <CardContent className="pt-0">
      <p className="text-muted-foreground leading-relaxed mb-4">
        {description}
      </p>
      
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>Session: {sessionLength}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <DollarSign className="w-4 h-4" />
          <span>Day rate: {dayRateRange}</span>
        </div>
      </div>

      <p className="text-xs text-muted-foreground mt-4 italic">
        Add reference images to your consultation inquiry for accurate pricing.
      </p>
    </CardContent>
  </Card>
);

export const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Black & Grey Realism",
      description: "Photorealistic portraits and detailed imagery brought to life through masterful shading and contrast work. Our specialty in creating lifelike representations that capture every nuance.",
      sessionLength: "4-8 hours",
      dayRateRange: "2500-4000 NOK",
      icon: <Palette className="w-5 h-5" />
    },
    {
      title: "Fine Line",
      description: "Delicate, precise linework perfect for botanical designs, minimalist concepts, and intricate details. Clean execution with lasting clarity.",
      sessionLength: "2-6 hours", 
      dayRateRange: "2000-3500 NOK",
      icon: <Palette className="w-5 h-5" />
    },
    {
      title: "Japanese Traditional",
      description: "Authentic Japanese tattooing with bold imagery, traditional motifs, and cultural significance. Koi, dragons, waves, and floral elements executed with respect for the art form.",
      sessionLength: "6-10 hours",
      dayRateRange: "3000-5000 NOK",
      icon: <Palette className="w-5 h-5" />
    },
    {
      title: "Geometric",
      description: "Mathematical precision meets artistic vision. Sacred geometry, mandalas, and abstract patterns designed for perfect symmetry and visual impact.",
      sessionLength: "3-7 hours",
      dayRateRange: "2200-3800 NOK", 
      icon: <Palette className="w-5 h-5" />
    },
    {
      title: "Neo-Traditional",
      description: "Modern interpretation of classic tattoo styles. Bold lines, vibrant colors, and contemporary subject matter with traditional foundations.",
      sessionLength: "4-8 hours",
      dayRateRange: "2600-4200 NOK",
      icon: <Palette className="w-5 h-5" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-6">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Specialized techniques crafted by experienced artists. Each service includes consultation, custom design, and comprehensive aftercare guidance.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6"></div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                {...service}
              />
            ))}
          </div>

          {/* Consultation Note */}
          <div className="mt-16 text-center">
            <Card className="bg-primary/5 border-primary/20 max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <p className="text-muted-foreground">
                  All pricing is approximate and varies based on size, complexity, and placement. 
                  Book a consultation to discuss your specific project and receive accurate pricing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};