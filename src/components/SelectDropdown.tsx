'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { CharData } from '@/data';

export const SelectDropdown = ({
  currentChar,
  data,
  handleChange,
  title,
}: {
  currentChar: CharData;
  data: CharData[];
  handleChange: (value: string) => void;
  title: 'Character' | 'Class';
}) => {
  return (
    <Select
      defaultValue={currentChar.name}
      onValueChange={(value) => handleChange(value)}
    >
      <SelectTrigger className="w-[160px] max-w-full">
        <SelectValue placeholder={`Select ${title}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{`${title}`}</SelectLabel>
          {data.map((char) => (
            <SelectItem key={char.name} value={char.name}>
              {char.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
