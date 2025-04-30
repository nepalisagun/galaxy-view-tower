import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, Users, Ban, PawPrint, CreditCard, Info } from 'lucide-react'; // Relevant icons

export function HouseRules() {
  return (
    <section id="house-rules" className="py-16 bg-secondary">
      <div className="container max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary">House Rules & Policies</h2>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5 text-accent" />
              Important Information
            </CardTitle>
            <CardDescription>Please familiarize yourself with our policies for a smooth stay.</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-base">
                  <Clock className="mr-2 h-5 w-5 text-primary" /> Check-in / Check-out
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-1 pl-8">
                  <p><strong>Check-in:</strong> From 12:00 PM onwards</p>
                  <p><strong>Check-out:</strong> Until 11:00 AM</p>
                  <p>Early check-in or late check-out may be available upon request (subject to availability and potential fees).</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-base">
                  <Users className="mr-2 h-5 w-5 text-primary" /> Children & Extra Beds
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-1 pl-8">
                  <p>Children of all ages are welcome.</p>
                   <p>Policies regarding extra beds and costs for children vary. Please inquire during booking.</p>
                   {/* Add specific age/cost details if known */}
                </AccordionContent>
              </AccordionItem>

               <AccordionItem value="item-3">
                <AccordionTrigger className="text-base">
                 <PawPrint className="mr-2 h-5 w-5 text-primary" /> Pets
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-8">
                   <p>Pets are generally not allowed. Please contact us directly if you have specific requirements.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-base">
                   <Ban className="mr-2 h-5 w-5 text-primary" /> Smoking Policy
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-8">
                  <p>Smoking is prohibited in all indoor areas, including rooms. Designated smoking areas may be available outdoors.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-base">
                   <CreditCard className="mr-2 h-5 w-5 text-primary" /> Payment & Cancellation
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-1 pl-8">
                   <p>We accept major credit cards (Visa, Mastercard) and cash (NPR).</p>
                   <p>Cancellation and prepayment policies vary according to room type and rate. Please refer to the conditions of your specific booking.</p>
                    <p>A security deposit might be required upon check-in.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
