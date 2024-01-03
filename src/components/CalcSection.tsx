'use client';
import { useState } from 'react';
import { characterData, classData } from '@/data';
import { SelectDropdown } from '@/components/SelectDropdown';
import {
  getSelectedClass,
  getFinalGrowth,
  getStarsphere,
  getMaxStats,
} from '@/app/utils/utils';
import { StatTable } from './stattable/StatTable';
import { cols } from '@/components/stattable/columns';
import WeaponsSection from './WeaponsSection';

export default function CalcSection() {
  const [currentChar, setCurrentChar] = useState(characterData[1]);
  const [currentClass, setCurrentClass] = useState(classData[0]);
  const selectedClass = getSelectedClass(currentChar.name, currentClass);
  const totalGrowth = getFinalGrowth(currentChar, selectedClass);
  const starsphere = getStarsphere(totalGrowth);
  const maxStats = getMaxStats(currentChar, selectedClass);

  const handleCharacter = (value: string) => {
    const char = characterData.find((obj) => obj.name === value);
    if (char) setCurrentChar(char);
  };

  const handleClass = (value: string) => {
    const cls = classData.find((obj) => obj.name === value);
    if (cls) setCurrentClass(cls);
  };

  return (
    <section className="space-y-4 py-8">
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
      <WeaponsSection currentClass={currentClass} />
      <StatTable
        columns={cols}
        data={[currentChar, selectedClass, totalGrowth, starsphere, maxStats]}
      />
    </section>
  );
}
