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
              <DropdownMenuItem asChild>
                 <Link href="#hero"> {/* Scroll to top/hero for views */}
                   <Sunrise className="mr-2 h-4 w-4" />
                   <span>Sunrise & Sunset Views</span>
                 </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                 <Link href="#nearby-attractions">
                    <MapPin className="mr-2 h-4 w-4" />
                    <span>Nearby Attractions</span>
                 </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                 <Link href="#activities-hiking">
                    <Bike className="mr-2 h-4 w-4" />
                    <span>Activities & Hiking</span>
                 </Link>
              </DropdownMenuItem>
               <DropdownMenuItem asChild>
                 <Link href="#gallery">
                    <Camera className="mr-2 h-4 w-4" />
                    <span>Photo Gallery</span>
                 </Link>
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
              <DropdownMenuItem asChild>
                 <Link href="#about-us">
                    <Building className="mr-2 h-4 w-4" />
                    <span>About Us</span>
                 </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                 <Link href="#restaurant-facilities">
                    <Utensils className="mr-2 h-4 w-4" />
                    <span>Restaurant & Facilities</span>
                 </Link>
              </DropdownMenuItem>
              {/* Free Parking/Wifi mentioned in Facilities section */}
               <DropdownMenuItem disabled>
                 <ParkingCircle className="mr-2 h-4 w-4 text-muted-foreground" />
                 <span className="text-muted-foreground">Free Parking</span>
              </DropdownMenuItem>
               <DropdownMenuItem disabled>
                 <Wifi className="mr-2 h-4 w-4 text-muted-foreground" />
                 <span className="text-muted-foreground">Free Wi-Fi</span>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                 <Link href="#house-rules">
                    <BookOpen className="mr-2 h-4 w-4" />
                    <span>House Rules & Policies</span>
                 </Link>
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
                 {/* TODO: Replace with actual phone number */}
                 <a href="tel:+9771234567890">
                    <Phone className="mr-2 h-4 w-4" />
                    <span>Call Us (+977-1234567890)</span>
                 </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                 {/* TODO: Replace with actual email address */}
                 <a href="mailto:info@galaxyviewtower.com">
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Email Us</span>
                 </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                 {/* TODO: Replace with correct Google Maps link if different */}
                 <a href="https://maps.app.goo.gl/o5f48dZJqVd3J9Qd9" target="_blank" rel="noopener noreferrer">
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
