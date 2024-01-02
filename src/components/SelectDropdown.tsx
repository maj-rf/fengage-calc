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
}: {
  currentChar: CharData;
  data: CharData[];
  handleChange: (value: string) => void;
}) => {
  return (
    <Select
      defaultValue={currentChar.name}
      onValueChange={(value) => handleChange(value)}
    >
      <SelectTrigger className="w-[180px] max-w-full">
        <SelectValue placeholder="Select a character" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Characters</SelectLabel>
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
