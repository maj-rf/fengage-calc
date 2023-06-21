'use client';

import {
  useReactTable,
  getCoreRowModel,
  createColumnHelper,
  flexRender,
} from '@tanstack/react-table';
import { CharData } from '@/data';
import { useMemo } from 'react';

const tableHeaders = [
  'HP',
  'STR',
  'MAG',
  'DEX',
  'SPD',
  'DEF',
  'RES',
  'LCK',
  'BLD',
  'RTG',
];

export const CalcTable = ({ initialData }: { initialData: CharData[] }) => {
  const columnHelper = createColumnHelper<CharData>();
  const columns = [
    columnHelper.accessor('name', { header: 'Name' }),
    columnHelper.accessor('growth.HP', {
      header: 'HP',
    }),
    columnHelper.accessor('growth.STR', {
      header: 'STR',
    }),
    columnHelper.accessor('growth.MAG', {
      header: 'MAG',
    }),
    columnHelper.accessor('growth.DEX', {
      header: 'DEX',
    }),
    columnHelper.accessor('growth.SPD', {
      header: 'SPD',
    }),
    columnHelper.accessor('growth.DEF', {
      header: 'DEF',
    }),
    columnHelper.accessor('growth.LCK', {
      header: 'LCK',
    }),
    columnHelper.accessor('growth.BLD', {
      header: 'BLD',
    }),
    columnHelper.accessor('growth.RTG', {
      header: 'RTG',
    }),
  ];

  const data = useMemo(() => initialData, [initialData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-8">
      <div className="max-w-5xl mx-auto overflow-x-auto shadow rounded border-b border-gray-200 relative scroll-list">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-800 text-white">
            {table.getHeaderGroups().map((headerGroup) => {
              return (
                <tr key={headerGroup.id} className="text-left">
                  {headerGroup.headers.map((header, index) => {
                    return (
                      <th
                        className={
                          'text-left py-3 px-2 uppercase font-semibold text-sm ' +
                          (index === 0 ? 'sticky left-0 z-10 bg-gray-800' : '')
                        }
                        key={header.id + tableHeaders[index]}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody className="bg-slate-200">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="relative">
                {row.getVisibleCells().map((cell, index) => (
                  <td
                    key={cell.id + tableHeaders[index]}
                    className={
                      'px-2 py-3 ' +
                      (index === 0 ? 'sticky left-0 z-10 bg-slate-200' : '')
                    }
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
