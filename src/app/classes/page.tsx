import { StatTable } from '@/components/StatTable';
import { classData } from '@/data';

export default function Characters() {
  return <StatTable data={classData} title="Class Growths" />;
}
