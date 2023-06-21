import { CharData } from '@/data';

type DropdownProps = {
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  data: CharData[];
  value: string;
};

export const SelectDropdown = ({
  name,
  handleChange,
  data,
  value,
}: DropdownProps) => {
  return (
    <select
      name={name}
      id={name + 'select'}
      onChange={handleChange}
      defaultValue={value}
      className="w-full max-w-xs py-2 px-2 font-semibold rounded-xl border-gray-400 outline-red-400"
    >
      <option value="">--Please choose a {name}--</option>
      {data.map((char) => {
        return (
          <option key={char.name} value={char.name}>
            {char.name}
          </option>
        );
      })}
    </select>
  );
};
