import { columns } from '../../components/table/columns';
import { classData } from '@/lib/data';
import { DataTable } from '../../components/table/data-table';

export default async function CharacterPage() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={classData} />
    </div>
  );
}
