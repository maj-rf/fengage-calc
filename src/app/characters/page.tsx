import { StatTable } from '@/components/stattable/StatTable';
import { columns } from '@/components/stattable/columns';
import { characterData } from '@/data';

export default function CharacterPage() {
  return <StatTable columns={columns} data={characterData} />;
}
