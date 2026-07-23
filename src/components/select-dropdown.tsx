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
import { CharData } from '@/lib/data';

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
      value={currentChar.name}
      onValueChange={(value) => handleChange(value ?? 'none')}
    >
      <SelectTrigger className="w-40 max-w-full bg-background/80">
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
