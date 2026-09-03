import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Github01Icon, KoFiIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { buttonVariants } from './ui/button';

const items = [
  {
    value: 'item-1',
    trigger: 'How do I use the tool?',
    content: `- Home Page: Pick any combination of character and class in-game using the dropdowns and the calculator will do the magic.
      - Characters & Classes Page: Show Character and Class Data.
      - Average Page: Show Average Stats for Base Class and/or Promotion Class
      Note: Average Page is still in development, some computations can be wrong especially for Characters in Special Class.`,
  },
  {
    value: 'item-2',
    trigger: 'What are Total, Starsphere, and Max Stats?',
    content: `-TOTAL: the character + class growths. 
       -STARSPHERE: value after adding the 15% bonus to each stat. 
       -MAX STATS: the highest possible attainable value for each stat.
       Note: Jean's Expertise bonuses are already applied when Jean is selected.`,
  },
  {
    value: 'item-3',
    trigger: 'What are the abbreviations like M or Ca?',
    content: `Class Types give different units distinct combat styles. Depending on the type, you gain bonuses like +1 MOV for Cavalry or 2x stat-boosts from terrain for Covert.
    
    Class Types: Backup(B), Covert(C), Cavalry(Ca), Mystical(M), Flying(F), Qi Adept(Q), Dragon(D), Armor(A). 
      Special Units: Rafal(R), Nel(N)`,
  },
];

export function Faqs() {
  return (
    <section className="mt-8 bg-background/90 p-2 rounded-sm">
      <h1 className="font-heading font-bold text-md px-1">FAQs</h1>
      <Accordion className="w-full">
        {items.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger className="font-heading">{item.trigger}</AccordionTrigger>
            <AccordionContent className="whitespace-pre-line">{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="flex gap-1 items-center justify-end">
        <a
          href="https://ko-fi.com/bananabreadstix"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ variant: 'ghost', size: 'icon-lg' })}
        >
          <HugeiconsIcon icon={KoFiIcon} className="size-6 text-mauve-700" />
        </a>

        <a
          href="https://github.com/maj-rf/fengage-calc"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ variant: 'ghost', size: 'icon-lg' })}
        >
          <HugeiconsIcon icon={Github01Icon} className="size-5 text-mauve-700" size={25} />
        </a>
      </div>
    </section>
  );
}
