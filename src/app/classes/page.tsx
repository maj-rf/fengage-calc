import { StatTable } from '@/components/stattable/StatTable';
import { columns } from '@/components/stattable/columns';
import { classData } from '@/data';

export default function ClassPage() {
  return <StatTable columns={columns} data={classData} />;
}
