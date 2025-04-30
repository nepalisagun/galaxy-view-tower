import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { RoomShowcase } from '@/components/room-showcase';
import { BookingForm } from '@/components/booking-form';
import { TestimonialCarousel } from '@/components/testimonial-carousel';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <RoomShowcase />
        <BookingForm />
        <TestimonialCarousel />
        {/* Add other sections like Gallery, About, Contact in the future */}
      </main>
      <Footer />
    </div>
  );
}
