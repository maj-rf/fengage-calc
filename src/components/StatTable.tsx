import { CharData } from '@/data';

type TableProps = {
  data: CharData[];
  title: string;
};

export const StatTable = ({ data, title }: TableProps) => {
  const tableHeaders = [
    'HP',
    'STR',
    'MAG',
    'SKL',
    'SPD',
    'LCK',
    'DEF',
    'RES',
    'BLD',
  ];
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          {tableHeaders.map((head) => (
            <th key={head}>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((obj) => {
          return (
            <tr key={obj.name}>
              <td>{obj.name}</td>
              {obj.growth.map((stat, index) => (
                <td key={obj.name + tableHeaders[index]}>{stat} </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
