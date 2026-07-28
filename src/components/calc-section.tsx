'use client';
import { CharData, ClassData } from '@/lib/data';
import { useState } from 'react';
import { columns } from './table/columns';
import { DataTable } from './table/data-table';
import { SelectDropdown } from './select-dropdown';
import { getFinalGrowth, getMaxStats, getSelectedClassGrowth, getStarsphere } from '@/lib/utils';
import ClassWeapons from './class-weapons';

export const CalcSection = ({ characterData, classData }: { characterData: CharData[]; classData: ClassData[] }) => {
  const [currentChar, setCurrentChar] = useState(characterData[1]);
  const [currentClass, setCurrentClass] = useState(classData[10]);
  const selectedClassGrowth = getSelectedClassGrowth(currentChar.name, currentClass);
  const totalGrowth = getFinalGrowth(currentChar, selectedClassGrowth);
  const starsphere = getStarsphere(totalGrowth);
  const maxStats = getMaxStats(currentChar, selectedClassGrowth);

  const handleCharacter = (value: string) => {
    const char = characterData.find((obj) => obj.name === value);
    if (char) setCurrentChar(char);
  };

  const handleClass = (value: string) => {
    const cls = classData.find((obj) => obj.name === value);
    if (cls) setCurrentClass(cls);
  };

  return (
    <section className="flex flex-col gap-2">
      <div className="mx-auto flex w-full flex-row items-center justify-center gap-2">
        <SelectDropdown
          currentChar={currentChar}
          data={characterData}
          handleChange={handleCharacter}
          title="Character"
        />
        <SelectDropdown currentChar={currentClass} data={classData} handleChange={handleClass} title="Class" />
      </div>
      <ClassWeapons name={currentClass.name} weapons={currentClass.weapons} />

      <DataTable columns={columns} data={[currentChar, selectedClassGrowth, totalGrowth, starsphere, maxStats]} />
    </section>
  );
};
