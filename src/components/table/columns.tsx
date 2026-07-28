'use client';

import { BaseData } from '@/lib/data';
import { ColumnDef } from '@tanstack/react-table';
import { Button } from '../ui/button';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowUpDown } from '@hugeicons/core-free-icons';

export const cols = [
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

export const columns: ColumnDef<BaseData>[] = cols.map((col) => {
  return {
    accessorKey: col.accessorKey,
    header: ({ column }) => {
      return column.getCanSort() ? (
        <Button
          size="xs"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className={`gap-0 ${column.getIsSorted() ? 'bg-muted text-black' : ''}`}
        >
          {col.header}
          <HugeiconsIcon icon={ArrowUpDown} className="size-3" />
        </Button>
      ) : (
        <div className="px-2 text-xs">{col.header}</div>
      );
    },
  };
});
