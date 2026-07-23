import { columns } from '@/components/table/columns';
import { DataTable } from '@/components/table/data-table';
import { characterData } from '@/lib/data';

export default async function CharacterPage() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={characterData} />
    </div>
  );
}
