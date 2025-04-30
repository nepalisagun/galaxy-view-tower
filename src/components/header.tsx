import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mountain } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Mountain className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block">
            Galaxy View Tower
          </span>
        </Link>
        <nav className="flex flex-1 items-center space-x-4 sm:justify-end">
          <Link href="#rooms">
             <Button variant="ghost">Rooms</Button>
          </Link>
          <Link href="#booking">
             <Button variant="ghost">Book Now</Button>
          </Link>
          <Link href="#testimonials">
             <Button variant="ghost">Testimonials</Button>
          </Link>
          {/* Future: <Link href="/gallery"><Button variant="ghost">Gallery</Button></Link> */}
          {/* Future: <Link href="/contact"><Button variant="ghost">Contact</Button></Link> */}
        </nav>
      </div>
    </header>
  );
}
