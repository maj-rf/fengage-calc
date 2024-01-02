'use client';

import { CharData } from '@/data';
import { ColumnDef, type Column } from '@tanstack/react-table';
import { Button } from '../ui/button';
import { ArrowUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const cols = [
  {
    accessorKey: 'name',
    // column: Column<CharData, unknown>
    header: 'Name',
  },
  {
    accessorKey: 'growth.HP',
    header: 'HP',
  },
  {
    accessorKey: 'growth.STR',
    header: 'STR',
  },
  {
    accessorKey: 'growth.MAG',
    header: 'MAG',
  },
  {
    accessorKey: 'growth.DEX',
    header: 'DEX',
  },
  {
    accessorKey: 'growth.SPD',
    header: 'SPD',
  },
  {
    accessorKey: 'growth.DEF',
    header: 'DEF',
  },
  {
    accessorKey: 'growth.RES',
    header: 'RES',
  },
  {
    accessorKey: 'growth.LCK',
    header: 'LCK',
  },
  {
    accessorKey: 'growth.BLD',
    header: 'BLD',
  },
  {
    accessorKey: 'growth.RTG',
    header: 'RTG',
  },
];

export const columns: ColumnDef<CharData>[] = cols.map((col) => {
  return {
    accessorKey: col.accessorKey,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className={cn(
            'hover:text-none hover:bg-none',
            column.getIsSorted() ? 'text-emerald-400' : '',
          )}
        >
          {col.header}
          <ArrowUpDown className="ml-1 h-3 w-3" />
        </Button>
      );
    },
  };
});
