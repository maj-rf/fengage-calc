import { StatTable } from '@/components/StatTable';
import { classData } from '@/data';

export default function ClassPage() {
  return <StatTable initialData={classData} />;
}
