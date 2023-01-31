import { CharData } from '@/data';

type RowsProps = {
  obj: CharData;
  tableHeaders: string[];
};
export const Rows = ({ obj, tableHeaders }: RowsProps) => {
  const rowClass =
    obj.name === 'Stat Caps'
      ? 'caps'
      : obj.name === 'Total%'
      ? 'total'
      : obj.name === 'Starsphere%'
      ? 'total'
      : '';
  return (
    <tr key={obj.name} className={rowClass}>
      <td>{obj.name}</td>
      {obj.growth.map((stat, index) => (
        <td key={obj.name + tableHeaders[index]}>{stat} </td>
      ))}
    </tr>
  );
};
