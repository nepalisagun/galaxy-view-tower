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
import { Mountain, MapPin, Bike, Info, Utensils, Wifi, ParkingCircle, BookOpen, ChevronDown, Image as ImageIcon, Phone, Mail, Sunrise, Camera, Building, Landmark } from 'lucide-react'; // Added relevant icons

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
        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center space-x-1 md:flex sm:justify-end">
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
              <DropdownMenuItem>
                 <Sunrise className="mr-2 h-4 w-4" />
                 {/* TODO: Add link/scroll target */}
                <span>Sunrise & Sunset Views</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                 <MapPin className="mr-2 h-4 w-4" />
                 {/* TODO: Add link/scroll target or page */}
                <span>Nearby Attractions</span>
                 {/* <span className="text-xs text-muted-foreground ml-auto">(e.g., Bhaktapur)</span> */}
              </DropdownMenuItem>
              <DropdownMenuItem>
                 <Bike className="mr-2 h-4 w-4" />
                 {/* TODO: Add link/scroll target or page */}
                <span>Activities & Hiking</span>
              </DropdownMenuItem>
               <DropdownMenuItem>
                 <Camera className="mr-2 h-4 w-4" />
                 {/* TODO: Add link/scroll target or page */}
                <span>Photo Gallery</span>
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
                 <Building className="mr-2 h-4 w-4" />
                 {/* TODO: Add link/scroll target or page */}
                 <span>About Us</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                 <Utensils className="mr-2 h-4 w-4" />
                 {/* TODO: Add link/scroll target or page */}
                <span>Restaurant & Facilities</span>
                 {/* <span className="text-xs text-muted-foreground ml-auto">(e.g., Rooftop)</span> */}
              </DropdownMenuItem>
               <DropdownMenuItem>
                 <ParkingCircle className="mr-2 h-4 w-4" />
                <span>Free Parking</span>
              </DropdownMenuItem>
               <DropdownMenuItem>
                 <Wifi className="mr-2 h-4 w-4" />
                <span>Free Wi-Fi</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BookOpen className="mr-2 h-4 w-4" />
                 {/* TODO: Add link/scroll target or page */}
                <span>House Rules & Policies</span>
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
              <DropdownMenuItem asChild>
                 {/* TODO: Add correct phone number */}
                 <a href="tel:+977-XXXXXXXXXX">
                    <Phone className="mr-2 h-4 w-4" />
                    <span>Call Us</span>
                 </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                 {/* TODO: Add correct email address */}
                 <a href="mailto:info@galaxyviewtower.com">
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Email Us</span>
                 </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                 {/* TODO: Add correct Google Maps link */}
                 <a href="https://maps.google.com/?q=Galaxy+View+Tower+Nagarkot" target="_blank" rel="noopener noreferrer">
                     <Landmark className="mr-2 h-4 w-4" />
                     <span>Find Us on Map</span>
                 </a>
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
         {/* Mobile Menu Trigger - Placeholder */}
          <div className="ml-auto flex items-center md:hidden">
              {/* TODO: Implement Mobile Menu (e.g., using Sheet component) */}
              <Button variant="ghost" size="icon">
                 <Mountain className="h-6 w-6" /> {/* Use a menu icon later */}
                 <span className="sr-only">Open Menu</span>
              </Button>
          </div>
      </div>
    </header>
  );
}
