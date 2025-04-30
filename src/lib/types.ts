import type { LucideIcon } from 'lucide-react';

export interface Amenity {
  name: string;
  icon: LucideIcon;
}

export interface Room {
  id: string;
  name: string;
  description: string;
  pricePerNight: number;
  imageUrl: string;
  amenities: Amenity[];
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  avatarUrl?: string; // Optional avatar image
}
