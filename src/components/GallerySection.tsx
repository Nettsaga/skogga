import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import OrnamentDivider from "@/components/accents/OrnamentDivider";
import MandalaBurst from "@/components/accents/MandalaBurst";
import SacredRing from "@/components/accents/SacredRing";
import { Eye, X, Instagram } from "lucide-react";
import { motion } from "framer-motion";

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  artist: 'remi' | 'kelvin' | 'frida';
  artistName: string;
}

// Generate gallery items from public folder images
const generateGalleryItems = (): GalleryItem[] => {
  const items: GalleryItem[] = [];

  // Remi Silverberg - All works
  const remiImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
  remiImages.forEach((num) => {
    const ext = num <= 25 ? 'jpeg' : (num === 26 ? 'png' : 'jpg');
    items.push({
      id: `remi-${num}`,
      src: `/remi/${num}.${ext}`,
      alt: `Tatoveringsarbeid av Remi Sølvberg - profesjonell tatoveringskunstner ved Skoggata Tattoo Parlour`,
      artist: 'remi',
      artistName: 'Remi Sølvberg'
    });
  });

  // Kelvin Halberg - All works  
  const kelvinImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38];
  kelvinImages.forEach((num) => {
    const ext = [22, 23, 27, 32].includes(num) ? 'JPG' : 'jpg';
    items.push({
      id: `kelvin-${num}`,
      src: `/kelvin/${num}.${ext}`,
      alt: `Tatoveringsarbeid av Kelvin Halberg - ekspert tatoveringskunstner ved Skoggata Tattoo Parlour`,
      artist: 'kelvin',
      artistName: 'Kelvin Halberg'
    });
  });

  // Frida - All works
  const fridaImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
  fridaImages.forEach((num) => {
    items.push({
      id: `frida-${num}`,
      src: `/frida/${num}.jpeg`,
      alt: `Tatoveringsarbeid av Frida Grasto - talentfull tatoveringskunstner ved Skoggata Tattoo Parlour`,
      artist: 'frida',
      artistName: 'Frida'
    });
  });

  return items;
};

const galleryItems = generateGalleryItems();

export const GallerySection: React.FC = () => {
  const [selectedArtist, setSelectedArtist] = useState<'remi' | 'kelvin' | 'frida' | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const groupedItems = {
    remi: galleryItems.filter(item => item.artist === 'remi'),
    kelvin: galleryItems.filter(item => item.artist === 'kelvin'),
    frida: galleryItems.filter(item => item.artist === 'frida'),
  };

  // Preview items - 4 from each artist
  const previewItems = {
    remi: groupedItems.remi.slice(4, 8), // Images 5-8
    kelvin: groupedItems.kelvin.slice(6, 10), // Images 7-10  
    frida: groupedItems.frida.slice(2, 6), // Images 3-6
  };

  return (
    <section id="gallery" className="py-24 bg-background relative overflow-hidden">
      <MandalaBurst className="absolute -left-24 top-24 w-[420px] h-[420px] text-accent opacity-15" petals={10} />
      <SacredRing className="absolute -right-24 bottom-10 w-[360px] h-[360px] text-accent opacity-15" />
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
              Kunstnerportefølje
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Utforsk det særegne arbeidet til våre tre talentfulle kunstnere: Remi Sølvberg, Kelvin Halberg og Frida.
              Hver bringer sin unike stil og ekspertise for å skape eksepsjonelle tatoveringer.
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

          {/* Remi Silverberg Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="transform rotate-1 hover:rotate-0 transition-transform duration-300 mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02, rotate: 0 }}
            >
              <div className="bg-card/90 border-4 border-accent rounded-2xl p-6 shadow-strong">
                <div className="flex items-center gap-3 md:gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src="/remi-pic.jpg"
                      alt="Remi Sølvberg - Profesjonell tatoveringskunstner og eier av Skoggata Tattoo Parlour"
                      className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-accent shadow-strong"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 md:gap-4 flex-wrap">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground font-heading">Remi Sølvberg</h3>
                      <a
                        href="https://www.instagram.com/skoggata_tattoo/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-accent/10 hover:bg-accent hover:text-accent-foreground rounded-lg transition-all duration-300 text-accent"
                        aria-label="Følg Remi på Instagram"
                      >
                        <Instagram className="w-5 h-5" />
                        <span className="text-sm font-medium">@skoggata_tattoo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {previewItems.remi.map((item, index) => (
                <div
                  key={item.id}
                  className={`group cursor-pointer overflow-hidden rounded-2xl bg-card border-4 border-accent hover:border-primary hover:shadow-strong transition-all duration-500 transform ${index % 2 === 0 ? 'rotate-2 hover:rotate-0' : '-rotate-1 hover:rotate-0'
                    }`}
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-80 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="bg-accent/90 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-bold text-accent-foreground shadow-lg">
                        Se Bilde
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button
                onClick={() => setSelectedArtist('remi')}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-strong font-semibold"
              >
                <Eye className="w-5 h-5 mr-2" />
                Se mer arbeid av Remi
              </Button>
            </div>
          </motion.div>

          {/* Kelvin Halberg Section */}
          <div className="mb-20">
            <div className="transform -rotate-1 hover:rotate-0 transition-transform duration-300 mb-8">
              <div className="bg-card/90 border-4 border-primary rounded-2xl p-6 shadow-strong">
                <div className="flex items-center gap-3 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full bg-primary/20 border-4 border-primary shadow-strong flex items-center justify-center">
                      <span className="text-xl md:text-3xl lg:text-4xl font-bold text-primary font-heading">KH</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 md:gap-4 flex-wrap">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground font-heading">Kelvin Halberg</h3>
                      <a
                        href="https://www.instagram.com/human_nature369/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 text-primary"
                        aria-label="Følg Kelvin på Instagram"
                      >
                        <Instagram className="w-5 h-5" />
                        <span className="text-sm font-medium">@human_nature369</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {previewItems.kelvin.map((item, index) => (
                <div
                  key={item.id}
                  className={`group cursor-pointer overflow-hidden rounded-2xl bg-card border-4 border-primary hover:border-accent hover:shadow-strong transition-all duration-500 transform ${index % 2 === 0 ? '-rotate-2 hover:rotate-0' : 'rotate-1 hover:rotate-0'
                    }`}
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-80 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="bg-primary/90 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-bold text-primary-foreground shadow-lg">
                        Se Bilde
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button
                onClick={() => setSelectedArtist('kelvin')}
                size="lg"
                className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-strong font-semibold"
              >
                <Eye className="w-5 h-5 mr-2" />
                Se mer arbeid av Kelvin
              </Button>
            </div>
          </div>

          {/* Frida Section */}
          <div className="mb-20">
            <div className="transform rotate-2 hover:rotate-0 transition-transform duration-300 mb-8">
              <div className="bg-card/90 border-4 border-destructive rounded-2xl p-6 shadow-strong">
                <div className="flex items-center gap-3 md:gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src="/frida-pic.jpg"
                      alt="Frida Grasto - Talentfull tatoveringskunstner ved Skoggata Tattoo Parlour"
                      className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-destructive shadow-strong"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 md:gap-4 flex-wrap">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground font-heading">Frida</h3>
                      <a
                        href="https://www.instagram.com/grasto_tattoo/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-destructive/10 hover:bg-destructive hover:text-destructive-foreground rounded-lg transition-all duration-300 text-destructive"
                        aria-label="Følg Frida på Instagram"
                      >
                        <Instagram className="w-5 h-5" />
                        <span className="text-sm font-medium">@grasto_tattoo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {previewItems.frida.map((item, index) => (
                <div
                  key={item.id}
                  className={`group cursor-pointer overflow-hidden rounded-2xl bg-card border-4 border-destructive hover:border-primary hover:shadow-strong transition-all duration-500 transform ${index % 2 === 0 ? 'rotate-1 hover:rotate-0' : '-rotate-2 hover:rotate-0'
                    }`}
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-80 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="bg-destructive/90 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-bold text-destructive-foreground shadow-lg">
                        Se Bilde
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button
                onClick={() => setSelectedArtist('frida')}
                size="lg"
                className="bg-destructive hover:bg-destructive/90 text-destructive-foreground shadow-strong font-semibold"
              >
                <Eye className="w-5 h-5 mr-2" />
                Se mer arbeid av Frida
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Individual Image Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
          {selectedImage && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold">
                  {selectedImage.artistName}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full rounded-lg shadow-medium object-contain max-h-[70vh]"
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Individual Artist Gallery Modal */}
      <Dialog open={!!selectedArtist} onOpenChange={() => setSelectedArtist(null)}>
        <DialogContent className="max-w-7xl max-h-[90vh] overflow-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold">
              {selectedArtist === 'remi' && 'Remi Sølvberg - Komplett Portefølje'}
              {selectedArtist === 'kelvin' && 'Kelvin Halberg - Komplett Portefølje'}
              {selectedArtist === 'frida' && 'Frida - Komplett Portefølje'}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {selectedArtist && groupedItems[selectedArtist].map((item) => (
                <div
                  key={item.id}
                  className="cursor-pointer overflow-hidden rounded-lg hover:shadow-medium transition-all duration-300"
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-32 object-cover object-center hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};