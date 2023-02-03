'use client';
import { CharData } from '@/data';
import { Rows } from './Rows';
import { useState } from 'react';
type TableProps = {
  data: CharData[];
  title: string;
};

export const StatTable = ({ data, title }: TableProps) => {
  const [sorted, setSorted] = useState([...data]);
  const [active, setActive] = useState('name');
  const dataToShow = title === 'Computed Growth' ? data : sorted;
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
  const handleSort = (head: string) => {
    const index = tableHeaders.findIndex((e) => e === head);
    const newData = sorted.sort((a, b) =>
      a.growth[index] > b.growth[index] ? -1 : 1
    );
    setSorted([...newData]);
    setActive(head);
  };

  return (
    <table>
      <caption>{title}</caption>
      <thead>
        <tr>
          <th>Name</th>
          {tableHeaders.map((head) => (
            <th
              onClick={
                title === 'Computed Growth' ? undefined : () => handleSort(head)
              }
              key={head}
            >
              <p className={active === head ? 'active' : ''}>{head}</p>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataToShow.map((obj) => (
          <Rows key={obj.name} obj={obj} tableHeaders={tableHeaders} />
        ))}
      </tbody>
    </table>
  );
};
