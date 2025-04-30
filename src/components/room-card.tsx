import Image from 'next/image';
import type { Room, Amenity } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

interface RoomCardProps {
  room: Room;
}

function AmenityIcon({ amenity }: { amenity: Amenity }) {
  const Icon = amenity.icon;
  return (
    <div className="flex items-center gap-1 text-xs text-muted-foreground" title={amenity.name}>
      <Icon className="h-4 w-4" />
      <span className="sr-only">{amenity.name}</span> {/* Keep accessible */}
    </div>
  );
}


export function RoomCard({ room }: RoomCardProps) {
  return (
    <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-48 w-full">
        <Image
          src={room.imageUrl}
          alt={`Image of ${room.name}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{room.name}</CardTitle>
        <CardDescription className="text-sm line-clamp-3">{room.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          {room.amenities.map((amenity) => (
            <AmenityIcon key={amenity.name} amenity={amenity} />
          ))}
        </div>
        <p className="text-lg font-semibold text-primary">
          ${room.pricePerNight} <span className="text-sm font-normal text-muted-foreground">/ night</span>
        </p>
      </CardContent>
      <CardFooter>
         <Link href="#booking" className="w-full">
            <Button variant="default" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Book Now
            </Button>
         </Link>
      </CardFooter>
    </Card>
  );
}
