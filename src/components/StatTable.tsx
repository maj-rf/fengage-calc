'use client';

import {
  useReactTable,
  getCoreRowModel,
  createColumnHelper,
  flexRender,
} from '@tanstack/react-table';
import { CharData, characterData } from '@/data';
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

export const StatTable = () => {
  const columnHelper = createColumnHelper<CharData>();
  const columns = [
    columnHelper.accessor('name', { header: 'Name' }),
    ...tableHeaders.map((val, index) =>
      columnHelper.accessor('growth', {
        cell: (t) => t.getValue()[index],
        header: () => <span>{val}</span>,
      })
    ),
  ];

  const data = useMemo(() => characterData, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <section className="container mx-auto bg-slate-600 overflow-x-auto p-8">
      <table className="w-full text-center">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header, index) => (
                  <th
                    key={header.id + tableHeaders[index]}
                    colSpan={header.colSpan}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell, index) => (
                <td key={cell.id + tableHeaders[index]}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
