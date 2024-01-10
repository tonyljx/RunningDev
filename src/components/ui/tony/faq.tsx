import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionFAQ() {
  return (
    <div className="w-full">
      <h2 className="mt-[10rem] text-center text-3xl font-bold tracking-tight duration-1000 animate-in slide-in-from-bottom-6 lg:text-5xl">
        Questions & Answers
      </h2>
      <p className="text-center text-[16px] leading-7 text-muted-foreground">
        If you have any other questions - please get in touch
      </p>

      <Accordion type="single" collapsible className="mx-auto mt-10 w-3/4">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
