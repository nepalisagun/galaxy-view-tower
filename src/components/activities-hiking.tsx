import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bike, Mountain, Camera, Bird } from 'lucide-react'; // Use relevant icons

const activities = [
  {
    title: "Hiking & Nature Walks",
    description: "Explore numerous trails around Nagarkot, ranging from easy walks through pine forests to more challenging hikes offering stunning valley and mountain views. Popular routes include the Nagarkot Eco Trail and walks to nearby villages.",
    icon: Mountain,
    imageUrl: "https://picsum.photos/seed/hikingNagarkot/600/400",
  },
  {
    title: "Mountain Biking",
    description: "For the adventurous, Nagarkot offers exciting mountain biking trails. Rent a bike locally or bring your own to explore the hilly terrain and scenic routes.",
    icon: Bike,
    imageUrl: "https://picsum.photos/seed/bikingNagarkot/600/400",
  },
  {
    title: "Photography",
    description: "With its dramatic landscapes, sunrises, sunsets, and cultural sights, Nagarkot is a paradise for photographers. Capture the beauty of the Himalayas and the local way of life.",
    icon: Camera,
    imageUrl: "https://picsum.photos/seed/photographyNagarkot/600/400",
  },
   {
    title: "Bird Watching",
    description: "The forests around Nagarkot are home to a variety of bird species. Bring your binoculars and enjoy spotting local and migratory birds in their natural habitat.",
    icon: Bird,
    imageUrl: "https://picsum.photos/seed/birdWatching/600/400",
  },
];

export function ActivitiesHiking() {
  return (
    <section id="activities-hiking" className="py-16 bg-secondary">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary">Activities & Hiking</h2>
         <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Immerse yourself in the natural beauty and adventure that Nagarkot offers. From scenic trails to cultural exploration, there&apos;s something for everyone.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <Card key={activity.title} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full text-center">
                 <div className="relative h-48 w-full">
                  <Image
                    src={activity.imageUrl}
                    alt={`Image related to ${activity.title}`}
                    layout="fill"
                    objectFit="cover"
                     quality={75}
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-center mb-2">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
         <p className="text-center text-muted-foreground mt-10 text-sm">
            Our staff can provide more information and help arrange guides or equipment rentals for certain activities.
        </p>
      </div>
    </section>
  );
}
