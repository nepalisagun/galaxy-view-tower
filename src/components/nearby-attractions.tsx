import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Landmark, MapPin, MountainSnow } from 'lucide-react'; // Use relevant icons
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const attractions = [
  {
    name: "Nagarkot View Tower",
    description: "Famous viewpoint for sunrise, sunset, and panoramic Himalayan views including Everest (weather permitting). A short drive or moderate hike from the hotel.",
    imageUrl: "https://picsum.photos/seed/viewTower/600/400",
    distance: "Approx. 3 km",
    icon: MountainSnow,
  },
  {
    name: "Bhaktapur Durbar Square",
    description: "UNESCO World Heritage site showcasing ancient Newari architecture, temples, and palaces. A must-visit historical city.",
    imageUrl: "https://picsum.photos/seed/bhaktapur/600/400",
    distance: "Approx. 15 km",
    icon: Landmark,
  },
  {
    name: "Changu Narayan Temple",
    description: "One of the oldest Hindu temples in the Kathmandu Valley, dedicated to Lord Vishnu. Known for its intricate stone and wood carvings.",
    imageUrl: "https://picsum.photos/seed/changuNarayan/600/400",
    distance: "Approx. 12 km",
    icon: Landmark, // Reuse Landmark icon
  },
   {
    name: "Local Villages & Culture",
    description: "Explore the surrounding villages to experience the local Tamang culture, traditional farming practices, and daily life.",
    imageUrl: "https://picsum.photos/seed/nepaliVillage/600/400",
    distance: "Walking distance",
    icon: MapPin,
  },
];

export function NearbyAttractions() {
  return (
    <section id="nearby-attractions" className="py-16 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary">Explore Nearby</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {attractions.map((attraction) => {
            const Icon = attraction.icon;
            return (
              <Card key={attraction.name} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                <div className="relative h-48 w-full">
                  <Image
                    src={attraction.imageUrl}
                    alt={`Image of ${attraction.name}`}
                    layout="fill"
                    objectFit="cover"
                     quality={75}
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Icon className="h-5 w-5 text-accent" />
                    {attraction.name}
                  </CardTitle>
                  <CardDescription className="text-xs pt-1">{attraction.distance}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground line-clamp-3">{attraction.description}</p>
                </CardContent>
                <CardFooter>
                  {/* Optionally add a 'Learn More' button or link */}
                  {/* <Button variant="outline" size="sm" className="w-full">Learn More</Button> */}
                   <Link href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(attraction.name + ', Nagarkot')}`} target="_blank" rel="noopener noreferrer" className="w-full">
                       <Button variant="outline" size="sm" className="w-full">
                           View on Map <MapPin className="ml-2 h-4 w-4" />
                       </Button>
                   </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
