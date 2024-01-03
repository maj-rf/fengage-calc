import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function Faqs() {
  return (
    <section className="mx-auto max-w-5xl rounded-sm bg-background/80 p-4">
      <h1>FAQs</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>How can I use this?</AccordionTrigger>
          <AccordionContent>
            Pick any combination of character and class in-game using the
            dropdowns and the calculator will do the magic. Click Characters or
            Classes to navigate through each table. Click Fengage Calc to go
            back here.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            What are Total, Starsphere, and Max Stats?
          </AccordionTrigger>
          <AccordionContent>
            TOTAL is the character + class growths. Add 15% across for the
            STARSPHERE. MAX STATS is the highest possible attainable value for
            each stat.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            What are the abbreviations like M or Ca?
          </AccordionTrigger>
          <AccordionContent>
            Class Types: Backup(B), Covert(C), Cavalry(Ca), Mystical(M),
            Flying(F), Qi Adept(Q), Dragon(D), Armor(A). Special Units:
            Rafal(R), Nel(N)
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
