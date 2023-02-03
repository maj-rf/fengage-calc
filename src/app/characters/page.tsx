import { StatTable } from '@/components/StatTable';
import { characterData } from '@/data';

export default function Characters() {
  return <StatTable data={characterData} title="Character Growths" />;
}
