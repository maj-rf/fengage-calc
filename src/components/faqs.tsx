import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Github01Icon, KoFiIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { buttonVariants } from './ui/button';

const items = [
  {
    value: 'item-1',
    trigger: 'How do I use the tool?',
    content: `Pick any combination of character and class in-game using the dropdowns and the calculator will do the magic.
       Click Characters, Classes, or Average to navigate through each page.
       Click Fengage Calc / the icon to go back home.`,
  },
  {
    value: 'item-2',
    trigger: 'What are Total, Starsphere, and Max Stats?',
    content: `TOTAL is the character + class growths. 
       Add 15% to every stat for the STARSPHERE. 
       MAX STATS is the highest possible attainable value for each stat.
       Note: Jean's Expertise bonuses are already applied when Jean is selected.`,
  },
  {
    value: 'item-3',
    trigger: 'What are the abbreviations like M or Ca?',
    content: `Class Types give different units a distinct combat styles. Each type can give different bonuses like +1 MOV for Cavalry or double stat-boosts from terrain for Covert.
    
    Class Types: Backup(B), Covert(C), Cavalry(Ca), Mystical(M), Flying(F), Qi Adept(Q), Dragon(D), Armor(A). 
      Special Units: Rafal(R), Nel(N)`,
  },
];

export function Faqs() {
  return (
    <section className="mt-8 bg-background/90 p-2 rounded-sm">
      <h1 className="font-bold text-md">FAQs</h1>
      <Accordion multiple className="w-full">
        {items.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.trigger}</AccordionTrigger>
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
