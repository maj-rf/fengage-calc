'use client';
import { characterData, classData } from '@/data';
import { SelectDropdown } from '@/components/SelectDropdown';
import { useState } from 'react';
import { CalcTable } from '@/components/CalcTable';
import {
  getFinalGrowth,
  getMaxStats,
  getSelectedClass,
  getStarsphere,
} from '@/utils';

export default function Home() {
  const [currentChar, setCurrentChar] = useState(characterData[1]);
  const [currentClass, setCurrentClass] = useState(classData[0]);

  const selectedClass = getSelectedClass(currentChar.name, currentClass);
  const totalGrowth = getFinalGrowth(currentChar, selectedClass);
  const starsphere = getStarsphere(totalGrowth);
  const maxStats = getMaxStats(currentChar, selectedClass);

  const handleCharacter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const char = characterData.find((obj) => obj.name === e.target.value);
    if (char) setCurrentChar(char);
  };

  const handleClass = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const cls = classData.find((obj) => obj.name === e.target.value);
    if (cls) setCurrentClass(cls);
  };
  return (
    <section className="min-h-screen">
      <CalcTable
        initialData={[
          currentChar,
          selectedClass,
          totalGrowth,
          starsphere,
          maxStats,
        ]}
      />
      <div className="mt-8 flex flex-col items-center gap-2">
        <SelectDropdown
          name="character"
          handleChange={handleCharacter}
          data={characterData}
          value="Alear"
        />
        <SelectDropdown
          name="class"
          handleChange={handleClass}
          data={classData}
          value="Archer"
        />
      </div>
    </section>
  );
}
