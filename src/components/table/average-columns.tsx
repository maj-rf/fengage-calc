import { BaseData } from '@/lib/data';
import { ColumnDef } from '@tanstack/react-table';

export const cols = [
  {
    accessorKey: 'name',
    // column: Column<CharData, unknown>
    header: 'Level',
  },
  {
    accessorKey: 'baseStats.HP',
    header: 'HP',
  },
  {
    accessorKey: 'baseStats.STR',
    header: 'STR',
  },
  {
    accessorKey: 'baseStats.MAG',
    header: 'MAG',
  },
  {
    accessorKey: 'baseStats.DEX',
    header: 'DEX',
  },
  {
    accessorKey: 'baseStats.SPD',
    header: 'SPD',
  },
  {
    accessorKey: 'baseStats.DEF',
    header: 'DEF',
  },
  {
    accessorKey: 'baseStats.RES',
    header: 'RES',
  },
  {
    accessorKey: 'baseStats.LCK',
    header: 'LCK',
  },
  {
    accessorKey: 'baseStats.BLD',
    header: 'BLD',
  },
];

export const averageColumns: ColumnDef<BaseData>[] = cols.map((col) => {
  return {
    ...col,
    cell: (info) => {
      const value = info.getValue();
      if (typeof value === 'number') {
        const parts = value.toString().split('.');
        const exceed = parts.length === 2 && parts[1].length > 2;
        return exceed ? value.toFixed(2) : value;
      }

      return value;
    },
  };
});
