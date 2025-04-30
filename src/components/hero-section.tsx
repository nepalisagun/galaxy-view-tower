import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden">
      <Image
        src="https://picsum.photos/seed/hero/1920/1080"
        alt="Panoramic view from Galaxy View Tower, Nagarkot"
        layout="fill"
        objectFit="cover"
        quality={80}
        className="absolute inset-0 z-0 brightness-75"
        priority // Load hero image faster
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-center bg-black/30 text-center text-primary-foreground">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Galaxy View Tower
        </h1>
        <p className="mt-4 max-w-2xl text-lg sm:text-xl">
          Your Gateway to the Himalayas in Nagarkot. Unforgettable Views, Unmatched Comfort.
        </p>
        <Link href="#booking" className="mt-8">
          <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Book Your Stay
          </Button>
        </Link>
      </div>
    </section>
  );
}
