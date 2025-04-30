import Image from 'next/image';
import type { Testimonial } from '@/lib/types';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from 'lucide-react'; // Assuming 5-star rating visually

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const initials = testimonial.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <Card className="h-full flex flex-col shadow-sm">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <Avatar>
          {testimonial.avatarUrl && <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />}
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">{testimonial.name}</p>
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow pt-2">
        <blockquote className="text-sm italic text-muted-foreground before:content-['“'] after:content-['”']">
          {testimonial.quote}
        </blockquote>
      </CardContent>
    </Card>
  );
}
