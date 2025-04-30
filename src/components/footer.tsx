import { Mountain } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-secondary">
      <div className="container py-8 text-center text-sm text-secondary-foreground">
         <div className="flex justify-center items-center mb-4">
             <Mountain className="h-5 w-5 mr-2 text-primary" />
             <span>Galaxy View Tower - Nagarkot</span>
         </div>
        <p>&copy; {currentYear} Galaxy View Tower. All rights reserved.</p>
        <p className="mt-1">Experience the Himalayas like never before.</p>
      </div>
    </footer>
  );
}
