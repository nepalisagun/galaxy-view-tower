'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { format } from 'date-fns';
import { CalendarIcon, Users, BedDouble } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { rooms } from '@/data/rooms';
import { submitBookingRequest } from '@/services/booking';
import type { BookingRequest } from '@/services/booking';

const bookingFormSchema = z.object({
  checkInDate: z.date({
    required_error: 'Check-in date is required.',
  }),
  checkOutDate: z.date({
    required_error: 'Check-out date is required.',
  }),
  numberOfGuests: z.coerce
    .number({ required_error: 'Number of guests is required.' })
    .int()
    .min(1, { message: 'Must have at least 1 guest.' })
    .max(10, { message: 'Cannot exceed 10 guests.' }), // Example limit
  roomType: z.string({
    required_error: 'Please select a room type.',
  }),
}).refine(data => data.checkOutDate > data.checkInDate, {
  message: 'Check-out date must be after check-in date.',
  path: ['checkOutDate'], // Attach error to checkOutDate field
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

// Set default values slightly in the future
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const dayAfterTomorrow = new Date(today);
dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);

const defaultValues: Partial<BookingFormValues> = {
  checkInDate: tomorrow,
  checkOutDate: dayAfterTomorrow,
  numberOfGuests: 2,
};

export function BookingForm() {
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues,
    mode: 'onChange', // Validate on change for better UX
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  async function onSubmit(data: BookingFormValues) {
     setIsSubmitting(true);
    // console.log('Form submitted:', data); // Debug log

    const bookingRequest: BookingRequest = {
        checkInDate: format(data.checkInDate, 'yyyy-MM-dd'),
        checkOutDate: format(data.checkOutDate, 'yyyy-MM-dd'),
        numberOfGuests: data.numberOfGuests,
        roomType: data.roomType,
    };

    try {
        const confirmation = await submitBookingRequest(bookingRequest);
        // console.log('Booking confirmation:', confirmation); // Debug log
        toast({
            title: 'Booking Submitted!',
            description: confirmation.confirmationMessage, // Use message from mock API
        });
        form.reset(defaultValues); // Reset form after successful submission
    } catch (error) {
        // console.error('Booking failed:', error); // Debug log
        toast({
            title: 'Booking Failed',
            description: 'Something went wrong. Please try again later.',
            variant: 'destructive',
        });
    } finally {
         setIsSubmitting(false);
    }
  }

  return (
    <section id="booking" className="py-16 bg-background">
      <div className="container max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary">Book Your Stay</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-6 border rounded-lg shadow-lg bg-card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="checkInDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Check-in Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'w-full pl-3 text-left font-normal',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            {field.value ? (
                              format(field.value, 'PPP')
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date(new Date().setHours(0,0,0,0)) } // Disable past dates
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="checkOutDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Check-out Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'w-full pl-3 text-left font-normal',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            {field.value ? (
                              format(field.value, 'PPP')
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                           disabled={(date) =>
                            date <= (form.getValues('checkInDate') || new Date(new Date().setHours(0,0,0,0)))
                          } // Disable dates before or on check-in
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <FormField
                control={form.control}
                name="numberOfGuests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Guests</FormLabel>
                    <FormControl>
                       <div className="relative">
                         <Users className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                         <Input type="number" placeholder="e.g., 2" {...field} className="pl-10"/>
                       </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="roomType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Room Type</FormLabel>
                     <Select onValueChange={field.onChange} defaultValue={field.value}>
                       <FormControl>
                        <SelectTrigger>
                            <BedDouble className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                           <span className="pl-6">
                            <SelectValue placeholder="Select a room" />
                           </span>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {rooms.map(room => (
                            <SelectItem key={room.id} value={room.id}>
                                {room.name} (${room.pricePerNight}/night)
                            </SelectItem>
                        ))}
                      </SelectContent>
                     </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
