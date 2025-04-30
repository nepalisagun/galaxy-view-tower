import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, MapPin, Eye } from 'lucide-react';

export function AboutUs() {
  return (
    <section id="about-us" className="py-16 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary">About Galaxy View Tower</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="border-none shadow-none">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Building className="h-6 w-6 text-accent" />
                  Your Himalayan Escape
                </CardTitle>
                <CardDescription>Experience Nagarkot&apos;s Premier Views</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Nestled atop the scenic hills of Nagarkot, Galaxy View Tower offers an unparalleled experience, combining comfortable accommodation with breathtaking panoramic views of the majestic Himalayan range, including Mount Everest on clear days.
                </p>
                <p>
                  We pride ourselves on providing a tranquil retreat from the hustle and bustle, where guests can immerse themselves in the serene beauty of nature. Whether you&apos;re here to witness the famous Nagarkot sunrise, explore local culture, or simply relax and rejuvenate, our hotel provides the perfect base.
                </p>
                <p>
                  Our dedicated staff is committed to ensuring your stay is memorable, offering warm hospitality and personalized service. Come, discover the magic of the Himalayas with us.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Prime Nagarkot Location</span>
                  </div>
                   <div className="flex items-center gap-2 text-sm">
                    <Eye className="h-5 w-5 text-primary" />
                    <span>Spectacular Mountain Vistas</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
             <Image
              src="https://picsum.photos/seed/hotelExterior/800/600"
              alt="Exterior view of Galaxy View Tower Hotel"
              layout="fill"
              objectFit="cover"
              quality={75}
              className="transition-transform duration-500 hover:scale-105"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
