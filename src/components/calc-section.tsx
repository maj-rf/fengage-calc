'use client';
import { characterData, classData } from '@/lib/data';
import { useState } from 'react';
import { columns } from './table/columns';
import { DataTable } from './table/data-table';
import { SelectDropdown } from './select-dropdown';

export const CalcSection = () => {
  const [currentChar, setCurrentChar] = useState(characterData[1]);
  const [currentClass, setCurrentClass] = useState(classData[0]);

  const handleCharacter = (value: string) => {
    const char = characterData.find((obj) => obj.name === value);
    if (char) setCurrentChar(char);
  };

  const handleClass = (value: string) => {
    const cls = classData.find((obj) => obj.name === value);
    if (cls) setCurrentClass(cls);
  };

  return (
    <section className="flex flex-col gap-4">
      <div className="mx-auto flex w-full flex-row items-center justify-center gap-2">
        <SelectDropdown
          currentChar={currentChar}
          data={characterData}
          handleChange={handleCharacter}
          title="Character"
        />
        <SelectDropdown
          currentChar={currentClass}
          data={classData}
          handleChange={handleClass}
          title="Class"
        />
      </div>
      <DataTable columns={columns} data={[currentChar, currentClass]} />
    </section>
  );
};
