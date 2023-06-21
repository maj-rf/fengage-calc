import { StatTable } from '@/components/StatTable';
import { characterData } from '@/data';

export default function CharacterPage() {
  return <StatTable initialData={characterData} />;
}
