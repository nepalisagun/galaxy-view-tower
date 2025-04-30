import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Wifi, ParkingCircle, Sun, Coffee, GlassWater } from 'lucide-react';

export function RestaurantFacilities() {
  return (
    <section id="restaurant-facilities" className="py-16 bg-secondary">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary">Dining & Facilities</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Restaurant Card */}
          <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
             <div className="relative h-48 w-full">
                <Image
                    src="https://picsum.photos/seed/restaurantView/600/400"
                    alt="Restaurant at Galaxy View Tower with mountain view"
                    layout="fill"
                    objectFit="cover"
                    quality={75}
                />
             </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Utensils className="h-5 w-5 text-accent" />
                Rooftop Restaurant
              </CardTitle>
              <CardDescription>Dine with a View</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our rooftop restaurant offers a delightful culinary experience with stunning panoramic views of the Himalayas. Enjoy a variety of local Nepali, Indian, and Continental dishes prepared with fresh ingredients. Perfect for sunrise breakfasts or sunset dinners.
              </p>
            </CardContent>
          </Card>

          {/* Facilities Card */}
          <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
             <div className="relative h-48 w-full">
                <Image
                    src="https://picsum.photos/seed/hotelLobby/600/400"
                    alt="Comfortable seating area at Galaxy View Tower"
                    layout="fill"
                    objectFit="cover"
                    quality={75}
                />
             </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sun className="h-5 w-5 text-accent" />
                 Hotel Amenities
              </CardTitle>
              <CardDescription>Comfort & Convenience</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Wifi className="h-4 w-4 text-primary" /> Free High-Speed Wi-Fi
                </li>
                <li className="flex items-center gap-2">
                  <ParkingCircle className="h-4 w-4 text-primary" /> Ample Free Parking
                </li>
                <li className="flex items-center gap-2">
                  <Coffee className="h-4 w-4 text-primary" /> 24-Hour Front Desk
                </li>
                 <li className="flex items-center gap-2">
                  <GlassWater className="h-4 w-4 text-primary" /> Room Service Available
                </li>
                <li className="flex items-center gap-2">
                  <Sun className="h-4 w-4 text-primary" /> Sunny Terrace & Garden
                </li>
              </ul>
            </CardContent>
          </Card>

           {/* Bar/Lounge Card */}
          <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
             <div className="relative h-48 w-full">
                <Image
                    src="https://picsum.photos/seed/hotelBar/600/400"
                    alt="Bar area at Galaxy View Tower"
                    layout="fill"
                    objectFit="cover"
                    quality={75}
                />
             </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GlassWater className="h-5 w-5 text-accent" />
                Bar & Lounge
              </CardTitle>
              <CardDescription>Relax and Unwind</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Unwind after a day of exploring at our cozy bar and lounge area. Enjoy a selection of local and international beverages, snacks, and a relaxed atmosphere. It's the perfect spot to socialize or simply enjoy a quiet drink.
              </p>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
