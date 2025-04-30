import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Mountain, MapPin, Bike, Info, Utensils, Wifi, ParkingCircle, BookOpen, ChevronDown, Image as ImageIcon, Phone, Mail } from 'lucide-react'; // Replaced Hiking with Bike, added Image, Phone, Mail

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
        <nav className="hidden flex-1 items-center space-x-1 md:flex sm:justify-end"> {/* Hide nav on small screens for now */}
          <Link href="#rooms">
             <Button variant="ghost">Rooms</Button>
          </Link>

          {/* Explore Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                Explore <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Discover Nagarkot</DropdownMenuLabel>
              <DropdownMenuSeparator />
               {/* TODO: Add actual links/scroll targets when sections/pages are created */}
              <DropdownMenuItem>
                 <MapPin className="mr-2 h-4 w-4" />
                <span>Nearby Attractions</span>
                {/* Example: <Link href="/attractions">Nearby Attractions</Link> */}
              </DropdownMenuItem>
              <DropdownMenuItem>
                 <Bike className="mr-2 h-4 w-4" />
                <span>Activities & Hiking</span>
                 {/* Example: <Link href="/activities">Activities & Hiking</Link> */}
              </DropdownMenuItem>
               <DropdownMenuItem>
                 <ImageIcon className="mr-2 h-4 w-4" />
                <span>Photo Gallery</span>
                {/* Example: <Link href="/gallery">Photo Gallery</Link> */}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

           {/* About Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                About <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Hotel Information</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                 <Info className="mr-2 h-4 w-4" />
                 <span>About Us</span>
                 {/* Example: <Link href="/about">About Us</Link> */}
              </DropdownMenuItem>
              <DropdownMenuItem>
                 <Utensils className="mr-2 h-4 w-4" />
                <span>Restaurant & Facilities</span>
                {/* Example: <Link href="/facilities">Restaurant & Facilities</Link> */}
              </DropdownMenuItem>
               <DropdownMenuItem>
                 <ParkingCircle className="mr-2 h-4 w-4" />
                <span>Parking</span>
              </DropdownMenuItem>
               <DropdownMenuItem>
                 <Wifi className="mr-2 h-4 w-4" />
                <span>Wi-Fi Details</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BookOpen className="mr-2 h-4 w-4" />
                <span>House Rules</span>
                {/* Example: <Link href="/rules">House Rules</Link> */}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

           {/* Contact Dropdown */}
           <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                Contact <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Get in Touch</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                 <Phone className="mr-2 h-4 w-4" />
                <span>Call Us</span>
                {/* TODO: Add Tel Link e.g., <a href="tel:+977..."> */}
              </DropdownMenuItem>
              <DropdownMenuItem>
                 <Mail className="mr-2 h-4 w-4" />
                <span>Email Us</span>
                 {/* TODO: Add Mailto Link e.g., <a href="mailto:..."> */}
              </DropdownMenuItem>
              <DropdownMenuItem>
                 <MapPin className="mr-2 h-4 w-4" />
                 <span>Find Us</span>
                 {/* TODO: Add Google Maps Link */}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>


          <Link href="#testimonials">
             <Button variant="ghost">Reviews</Button>
          </Link>

          <Link href="#booking">
             <Button variant="default" className="ml-2 bg-accent text-accent-foreground hover:bg-accent/90">Book Now</Button>
          </Link>

        </nav>
         {/* TODO: Add Mobile Menu (Sheet component?) for smaller screens */}
          <div className="ml-auto flex items-center md:hidden">
              {/* Placeholder for mobile menu trigger */}
              <Button variant="ghost" size="icon">
                 {/* <Menu className="h-6 w-6" /> */}
                 <span className="sr-only">Open Menu</span>
              </Button>
          </div>
      </div>
    </header>
  );
}
