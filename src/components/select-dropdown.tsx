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
import { BaseData } from '@/lib/data';

type Props<T extends BaseData> = {
  currentChar: T;
  data: T[];
  handleChange: (value: string) => void;
  title: 'Character' | 'Class';
  disabled?: boolean;
};

export const SelectDropdown = <T extends BaseData>({
  currentChar,
  data,
  handleChange,
  title,
  disabled,
}: Props<T>) => {
  return (
    <Select
      value={currentChar.name}
      onValueChange={(value) => handleChange(value ?? 'none')}
      disabled={disabled}
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
