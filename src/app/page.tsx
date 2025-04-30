import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { RoomShowcase } from '@/components/room-showcase';
import { BookingForm } from '@/components/booking-form';
import { TestimonialCarousel } from '@/components/testimonial-carousel';
import { AboutUs } from '@/components/about-us';
import { RestaurantFacilities } from '@/components/restaurant-facilities';
import { NearbyAttractions } from '@/components/nearby-attractions';
import { ActivitiesHiking } from '@/components/activities-hiking';
import { PhotoGallery } from '@/components/photo-gallery';
import { HouseRules } from '@/components/house-rules';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <RoomShowcase />
        <AboutUs />
        <RestaurantFacilities />
        <NearbyAttractions />
        <ActivitiesHiking />
        <PhotoGallery />
        <HouseRules />
        <BookingForm />
        <TestimonialCarousel />
      </main>
      <Footer />
    </div>
  );
}
