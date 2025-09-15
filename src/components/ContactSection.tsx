import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import OrnamentDivider from "@/components/accents/OrnamentDivider";
import BotanicalVines from "@/components/accents/BotanicalVines";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredStyle: '',
    size: '',
    placement: '',
    budget: '',
    message: '',
    consent: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      toast({
        title: "Consent Required",
        description: "Please agree to the consultation terms before submitting.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Consultation Request Sent!",
        description: "We'll get back to you within 24 hours to discuss your project.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferredStyle: '',
        size: '',
        placement: '',
        budget: '',
        message: '',
        consent: false
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="pt-24 bg-background relative overflow-hidden">
      <BotanicalVines className="absolute -right-8 -top-4 w-[360px] h-[220px] text-accent opacity-20" />
      <div className="container mx-auto px-2 sm:px-4">
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
              Ta Kontakt
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Klar til å starte tatoveringsreisen din? Ta kontakt for å diskutere ideene dine,
              bestille en konsultasjon, eller stille spørsmål om våre tjenester.
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

          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 mb-16 min-w-0">
            {/* Contact Information & Hours */}
            <div className="space-y-6 sm:space-y-8 min-w-0">
              {/* Contact Info */}
              <div className="transform sm:rotate-1 hover:rotate-0 transition-transform duration-300">
                <Card className="bg-card/90 border-4 border-accent hover:border-primary transition-all duration-300 mx-2 sm:mx-0">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-foreground font-heading">
                      Ta Kontakt
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 overflow-hidden">
                    <div className="flex items-start gap-3 sm:gap-4 text-muted-foreground">
                      <div className="p-2 sm:p-3 bg-accent/10 rounded-full text-accent flex-shrink-0">
                        <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-foreground text-lg">Telefon</p>
                        <div className="space-y-1">
                          <a href="tel:+4769251008" className="block text-lg sm:text-xl hover:text-accent transition-fast">
                            69 25 10 08
                          </a>
                          <a href="tel:+4790092109" className="block text-lg sm:text-xl hover:text-accent transition-fast">
                            900 92 109
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4 text-muted-foreground">
                      <div className="p-2 sm:p-3 bg-accent/10 rounded-full text-accent flex-shrink-0">
                        <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-foreground text-lg">E-post</p>
                        <a href="mailto:skoggata@hotmail.com" className="text-lg sm:text-xl hover:text-accent transition-fast break-all">
                          skoggata@hotmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4 text-muted-foreground">
                      <div className="p-2 sm:p-3 bg-accent/10 rounded-full text-accent flex-shrink-0">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-foreground text-lg">Adresse</p>
                        <p className="text-lg sm:text-xl">Skoggata 10<br />1530 MOSS</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Opening Hours */}
              <div className="transform sm:-rotate-1 hover:rotate-0 transition-transform duration-300">
                <Card className="bg-card/90 border-4 border-primary hover:border-accent transition-all duration-300 mx-2 sm:mx-0">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-foreground font-heading flex items-center gap-3">
                      <Clock className="w-6 h-6 text-primary" />
                      Åpningstider
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-base sm:text-lg overflow-hidden">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-card/50 rounded-lg gap-1 sm:gap-0">
                      <span className="font-medium">Mandag - Fredag</span>
                      <span className="font-bold text-accent">12:00 - 17:00</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-card/50 rounded-lg gap-1 sm:gap-0">
                      <span className="font-medium">Lørdag</span>
                      <span className="font-bold text-accent">12:00 - 15:00</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-card/50 rounded-lg gap-1 sm:gap-0">
                      <span className="font-medium">Søndag</span>
                      <span className="font-bold text-muted-foreground/70">Stengt</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="min-w-0">
              <Card className="bg-card/90 border-4 border-destructive hover:border-primary transition-all duration-300 mx-2 sm:mx-0">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-foreground font-heading">
                    Bestill en Konsultasjon
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid md:grid-cols-2 gap-2 sm:gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-base font-medium">Fullt Navn *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                          placeholder="Ditt fulle navn"
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-base font-medium">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          placeholder="din.epost@eksempel.com"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-2 sm:gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-base font-medium">Telefon</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+47 xxx xx xxx"
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="preferredStyle" className="text-base font-medium">Foretrukket Kunstner</Label>
                        <Select value={formData.preferredStyle} onValueChange={(value) => handleInputChange('preferredStyle', value)}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Velg en kunstner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="remi">Remi Sølvberg</SelectItem>
                            <SelectItem value="frida">Frida Grasto</SelectItem>
                            <SelectItem value="kelvin">Kelvin Halberg</SelectItem>
                            <SelectItem value="any">Hvilken som helst kunstner</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-base font-medium">Prosjektbeskrivelse</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Beskriv tatoveringsideen din, inspirasjon, størrelse, plassering og eventuelle spesifikke krav..."
                        className="min-h-[140px]"
                      />
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => handleInputChange('consent', checked as boolean)}
                        className="mt-1"
                      />
                      <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                        Jeg samtykker til å bli kontaktet angående min tatoveringsforespørsel og forstår at referansebilder hjelper med å gi nøyaktige tilbud.
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground shadow-strong text-sm lg:text-md font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Sender...</>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2 " />
                          Send
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Google Maps */}
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2028.8455715286357!2d10.6658937!3d59.435650100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4641529df4290605%3A0x4601085a5728562d!2sSkoggata%20Tattoo%20Parlour!5e0!3m2!1sen!2sph!4v1757907110987!5m2!1sen!2sph"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Skoggata Tattoo Parlour Location"
        />
      </div>
    </section>
  );
};