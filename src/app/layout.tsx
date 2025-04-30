import type {Metadata} from 'next';
import { Inter as FontSans } from 'next/font/google'; // Using Inter as a clean sans-serif font
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-geist-sans", // Keep variable name for consistency if preferred
})

export const metadata: Metadata = {
  title: 'Galaxy View Tower - Hotel in Nagarkot',
  description: 'Experience breathtaking Himalayan views and comfortable stays at Galaxy View Tower, Nagarkot. Book your room today!',
  keywords: ['hotel nagarkot', 'galaxy view tower', 'himalayan view hotel', 'nagarkot booking', 'nepal travel'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
          {/* Basic Meta Tags managed by Next.js Metadata API */}
       </head>
      <body
         className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
        <Toaster /> {/* Add Toaster here */}
      </body>
    </html>
  );
}
