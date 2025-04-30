import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Camera } from 'lucide-react';

const galleryImages = [
  { id: 'gal1', src: 'https://picsum.photos/seed/galleryView1/600/400', alt: 'Sunrise view over Himalayas from Nagarkot' },
  { id: 'gal2', src: 'https://picsum.photos/seed/galleryRoom1/600/400', alt: 'Comfortable Deluxe Room Interior' },
  { id: 'gal3', src: 'https://picsum.photos/seed/galleryRestaurant/600/400', alt: 'Dining area with mountain backdrop' },
  { id: 'gal4', src: 'https://picsum.photos/seed/galleryTerrace/600/400', alt: 'Hotel terrace overlooking the valley' },
  { id: 'gal5', src: 'https://picsum.photos/seed/galleryHills/600/400', alt: 'Rolling green hills surrounding Nagarkot' },
  { id: 'gal6', src: 'https://picsum.photos/seed/gallerySunset/600/400', alt: 'Golden sunset over the mountains' },
  { id: 'gal7', src: 'https://picsum.photos/seed/galleryFood/600/400', alt: 'Delicious local Nepali Thali set' },
  { id: 'gal8', src: 'https://picsum.photos/seed/galleryExteriorDay/600/400', alt: 'Galaxy View Tower exterior during the day' },
];

export function PhotoGallery() {
  return (
    <section id="gallery" className="py-16 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary flex items-center justify-center gap-2">
           <Camera className="h-7 w-7" /> Photo Gallery
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <Card key={image.id} className="overflow-hidden group relative shadow-sm hover:shadow-xl transition-shadow duration-300 aspect-square">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                quality={70}
                className="transition-transform duration-500 group-hover:scale-105"
              />
               <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
              {/* Optional: Add overlay or lightbox functionality here */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
