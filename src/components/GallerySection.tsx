import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, Filter } from "lucide-react";

// Import portfolio images
import portfolioRealism1 from "@/assets/portfolio-realism-1.jpg";
import portfolioFineline1 from "@/assets/portfolio-fineline-1.jpg";
import portfolioJapanese1 from "@/assets/portfolio-japanese-1.jpg";
import portfolioGeometric1 from "@/assets/portfolio-geometric-1.jpg";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string;
  color: 'color' | 'blackgrey';
  size: 'small' | 'medium' | 'large';
  caption: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: portfolioRealism1,
    alt: "Detailed black and grey realism tattoo with intricate shading",
    category: "realism",
    color: "blackgrey",
    size: "large",
    caption: "Black & Grey Portrait - 8 hour session"
  },
  {
    id: 2,
    src: portfolioFineline1,
    alt: "Fine line floral tattoo with delicate botanical elements",
    category: "fineline",
    color: "blackgrey",
    size: "medium",
    caption: "Fine Line Botanicals - 4 hour session"
  },
  {
    id: 3,
    src: portfolioJapanese1,
    alt: "Traditional Japanese tattoo with waves and koi fish motifs",
    category: "japanese",
    color: "blackgrey",
    size: "large",
    caption: "Japanese Traditional - 10 hour session"
  },
  {
    id: 4,
    src: portfolioGeometric1,
    alt: "Geometric mandala tattoo with sacred geometry patterns",
    category: "geometric",
    color: "blackgrey",
    size: "medium",
    caption: "Sacred Geometry Mandala - 6 hour session"
  }
];

type FilterType = 'all' | 'realism' | 'fineline' | 'japanese' | 'geometric' | 'color' | 'blackgrey' | 'small' | 'medium' | 'large';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filterButtons = [
    { key: 'all' as FilterType, label: 'All Work' },
    { key: 'realism' as FilterType, label: 'Realism' },
    { key: 'fineline' as FilterType, label: 'Fine Line' },
    { key: 'japanese' as FilterType, label: 'Japanese' },
    { key: 'geometric' as FilterType, label: 'Geometric' },
    { key: 'color' as FilterType, label: 'Color' },
    { key: 'blackgrey' as FilterType, label: 'Black & Grey' },
    { key: 'small' as FilterType, label: 'Small' },
    { key: 'medium' as FilterType, label: 'Medium' },
    { key: 'large' as FilterType, label: 'Large' },
  ];

  const filteredItems = galleryItems.filter(item => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter || 
           item.color === activeFilter || 
           item.size === activeFilter;
  });

  return (
    <section id="gallery" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-6">
              Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A selection of our recent work showcasing various styles and techniques. 
              Each piece tells a unique story and represents our commitment to artistic excellence.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6"></div>
          </div>

          {/* Filter Buttons */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 justify-center">
              {filterButtons.map((filter) => (
                <Button
                  key={filter.key}
                  variant={activeFilter === filter.key ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter.key)}
                  className={`transition-all duration-300 ${
                    activeFilter === filter.key 
                      ? 'bg-primary text-primary-foreground shadow-soft' 
                      : 'hover:bg-primary/10'
                  }`}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer overflow-hidden rounded-xl bg-card border border-border hover:shadow-medium transition-all duration-300"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-primary">
                      View Details
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No items found for the selected filter. Try a different category.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
          {selectedImage && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold">
                  {selectedImage.caption}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full rounded-lg shadow-medium"
                />
                <p className="mt-4 text-muted-foreground">
                  {selectedImage.alt}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};