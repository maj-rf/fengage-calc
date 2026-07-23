import { columns } from '../../components/table/columns';
import { classData } from '@/lib/data';
import { DataTable } from '../../components/table/data-table';

export default async function CharacterPage() {
  return (
    <div>
      <DataTable columns={columns} data={classData} />
    </div>
  );
}
