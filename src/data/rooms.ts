import type { Room } from '@/lib/types';
import { Wifi, Tv, Utensils, BedDouble, MountainSnow, Coffee } from 'lucide-react';

export const rooms: Room[] = [
  {
    id: 'deluxe-mountain-view',
    name: 'Deluxe Mountain View',
    description: 'Spacious room with breathtaking panoramic views of the Himalayas. Perfect for couples or solo travelers seeking tranquility.',
    pricePerNight: 120,
    imageUrl: 'https://picsum.photos/seed/room1/600/400',
    amenities: [
      { name: 'King Bed', icon: BedDouble },
      { name: 'Mountain View', icon: MountainSnow },
      { name: 'Free Wi-Fi', icon: Wifi },
      { name: 'Flat-screen TV', icon: Tv },
      { name: 'Room Service', icon: Utensils },
      { name: 'Coffee Maker', icon: Coffee },
    ],
  },
  {
    id: 'standard-twin',
    name: 'Standard Twin Room',
    description: 'Comfortable room with two single beds, ideal for friends or colleagues traveling together. Offers partial mountain views.',
    pricePerNight: 85,
    imageUrl: 'https://picsum.photos/seed/room2/600/400',
    amenities: [
      { name: 'Two Single Beds', icon: BedDouble }, // Using BedDouble as placeholder icon
      { name: 'Free Wi-Fi', icon: Wifi },
      { name: 'Flat-screen TV', icon: Tv },
    ],
  },
  {
    id: 'family-suite',
    name: 'Family Suite',
    description: 'Large suite with a separate living area and multiple beds, suitable for families. Enjoy valley views and modern comforts.',
    pricePerNight: 180,
    imageUrl: 'https://picsum.photos/seed/room3/600/400',
    amenities: [
      { name: 'Queen Bed & Sofa Bed', icon: BedDouble }, // Using BedDouble as placeholder icon
      { name: 'Valley View', icon: MountainSnow }, // Using MountainSnow as placeholder icon
      { name: 'Free Wi-Fi', icon: Wifi },
      { name: 'Flat-screen TV', icon: Tv },
      { name: 'Mini Fridge', icon: Coffee }, // Using Coffee as placeholder icon
      { name: 'Room Service', icon: Utensils },
    ],
  },
    {
    id: 'economy-single',
    name: 'Economy Single Room',
    description: 'A cozy and affordable option for the solo traveler. Basic amenities provided for a comfortable stay.',
    pricePerNight: 60,
    imageUrl: 'https://picsum.photos/seed/room4/600/400',
    amenities: [
      { name: 'Single Bed', icon: BedDouble }, // Using BedDouble as placeholder icon
      { name: 'Free Wi-Fi', icon: Wifi },
    ],
  },
];
