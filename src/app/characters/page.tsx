import { StatTable } from '@/components/stattable/StatTable';
import { columns } from '@/components/stattable/columns';
import { characterData } from '@/data';

export default function CharacterPage() {
  return (
    <section className="mx-auto h-[calc(100vh-4rem)] max-w-5xl overflow-scroll rounded-md border">
      <StatTable columns={columns} data={characterData} />
    </section>
  );
}
