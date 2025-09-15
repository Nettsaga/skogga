import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MessageSquare } from "lucide-react";
import OrnamentDivider from "@/components/accents/OrnamentDivider";
import MandalaBurst from "@/components/accents/MandalaBurst";
import BotanicalVines from "@/components/accents/BotanicalVines";
import { motion } from "framer-motion";

interface TestimonyCardProps {
  name: string;
  review: string;
  service?: string;
  cleanliness?: string;
  stylist?: string;
  rotation: string;
  borderColor: string;
}

const TestimonyCard: React.FC<TestimonyCardProps> = ({
  name,
  review,
  service,
  cleanliness,
  stylist,
  rotation,
  borderColor
}) => (
  <motion.div
    className={`transform ${rotation} group`}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.4 }}
  >
    <Card className={`bg-card/90 border-3 ${borderColor} h-full`}>
      <CardContent className="p-4">
        {/* 5 Stars */}
        <div className="flex gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
          ))}
        </div>

        {/* Review Text */}
        <p className="text-muted-foreground leading-relaxed text-base mb-4 italic">
          "{review}"
        </p>

        {/* Service Details (if provided) */}
        {(service || cleanliness || stylist) && (
          <div className="space-y-1 mb-3 p-3 bg-card/50 rounded-lg border border-border">
            {service && (
              <div className="flex justify-between text-sm">
                <span className="font-medium text-accent">Service:</span>
                <span className="text-muted-foreground">{service}</span>
              </div>
            )}
            {cleanliness && (
              <div className="flex justify-between text-sm">
                <span className="font-medium text-accent">Cleanliness:</span>
                <span className="text-muted-foreground">{cleanliness}</span>
              </div>
            )}
            {stylist && (
              <div className="flex justify-between text-sm">
                <span className="font-medium text-accent">Stylist:</span>
                <span className="text-muted-foreground">{stylist}</span>
              </div>
            )}
          </div>
        )}

        {/* Customer Name */}
        <div className="text-right">
          <p className="font-bold text-foreground font-heading text-base">— {name}</p>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export const TestimonySection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const testimonies = [
    {
      name: "Tadej Logar",
      review: "Amazing experience with my nose piercing. Everything was perfect!",
      service: "Nose piercing",
      cleanliness: "10/10",
      stylist: "10/10",
      rotation: "rotate-1",
      borderColor: "border-accent"
    },
    {
      name: "Marie Kvarme",
      review: "Eneste sjappa jeg går til😊 Super flinke artister og veldig hyggelig😊 Atmosfæren er alltid god når du kommer inn.",
      rotation: "-rotate-2",
      borderColor: "border-primary"
    },
    {
      name: "Tor-Egil Haave",
      review: "Helt konge. Ble tatt godt imot. Veldig bra å få veiledning og råd ifm tatoveringen. Veldig fornøyd. Remi er dyktig.",
      rotation: "rotate-2",
      borderColor: "border-destructive"
    },
    {
      name: "Christian Assby",
      review: "Veldig hyggelige, imøtekommende og kreative folk, kjempebra service, den absolutt kuleste tattosjappa i byen.",
      rotation: "-rotate-1",
      borderColor: "border-accent"
    },
    {
      name: "Trond Timmerman",
      review: "Flott atmosfære og gode priser. Veldig fornøyd 🌞",
      rotation: "rotate-1",
      borderColor: "border-primary"
    },
    {
      name: "Yochwa Roldan",
      review: "kjempebra kundeservice og vel utført jobb☺ anbefaler dette stedet for andre folk 👍",
      rotation: "-rotate-2",
      borderColor: "border-destructive"
    },
    {
      name: "Nora Kristine Bakke-Nilsen",
      review: "Vært hos Frida. Ho er såå flink ❤",
      rotation: "rotate-2",
      borderColor: "border-accent"
    },
    {
      name: "Emobiitchn Hedda Marie",
      review: "Piercingen blir helt nydelig! Ingen problemer etterpå eller noen ting! Helt supert! Mitt nye piercingstudio fremover!",
      rotation: "-rotate-1",
      borderColor: "border-primary"
    },
    {
      name: "Ann May Noomi Aas",
      review: "Bra atmosfære, kjapp og profesjonell utføring!",
      rotation: "rotate-1",
      borderColor: "border-destructive"
    }
  ];

  const displayedTestimonies = showAll ? testimonies : testimonies.slice(0, 3);

  return (
    <section id="testimonies" className="py-24 bg-background relative overflow-hidden">
      <MandalaBurst className="absolute -right-32 top-16 w-[480px] h-[480px] text-accent opacity-10" petals={16} />
      <BotanicalVines className="absolute -left-16 bottom-0 w-[400px] h-[260px] text-accent opacity-15" />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              Hva Våre Kunder Sier
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              Ekte anmeldelser fra ekte mennesker som stolte på oss med sitt blekk og piercinger.
              Hver 5-stjerners opplevelse forteller vår historie.
            </motion.p>
            <motion.div
              className="mt-6 flex justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <OrnamentDivider className="w-72 text-accent" />
            </motion.div>
          </motion.div>

          {/* Testimonies Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
          >
            {displayedTestimonies.map((testimony, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <TestimonyCard
                  {...testimony}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Show More/Less Button */}
          {!showAll && (
            <div className="text-center mt-12">
              <Button
                onClick={() => setShowAll(true)}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-strong font-semibold"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Se flere anmeldelser
              </Button>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="inline-block">
              <Card className="bg-card/90 border-4 border-primary p-8">
                <h3 className="text-3xl font-bold text-foreground font-heading mb-4">
                  Klar til å Bli Med Dem?
                </h3>
                <p className="text-muted-foreground text-lg mb-6">
                  Bestill konsultasjonen din i dag og bli vår neste fornøyde kunde!
                </p>
                <div className="flex gap-1 justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Bli med hundrevis av fornøyde kunder
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
