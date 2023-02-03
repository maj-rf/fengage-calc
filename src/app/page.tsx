'use client';
import { StatTable } from '@/components/StatTable';
import { characterData, classData } from '@/data';
import { useState } from 'react';
import { Selectors } from '@/components/Selectors';
import {
  getFinalGrowth,
  getMaxStats,
  getSelectedClass,
  getStarsphere,
} from '@/utils';

export default function Home() {
  const [currentChar, setCurrentChar] = useState(characterData[1]);
  const [currentClass, setCurrentClass] = useState(classData[0]);

  const selectedClass = getSelectedClass(currentChar, currentClass);
  const finalGrowth = getFinalGrowth(currentChar, selectedClass);
  const starsphere = getStarsphere(finalGrowth);
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
    <main>
      <Selectors
        handleCharacter={handleCharacter}
        handleClass={handleClass}
        characterData={characterData}
        classData={classData}
      />
      <div className="info-tables">
        <StatTable
          data={[
            currentChar,
            selectedClass,
            { name: 'Total%', growth: finalGrowth, mods: currentChar.mods },
            { name: 'Starsphere%', growth: starsphere, mods: currentChar.mods },
            { name: 'Stat Caps', growth: maxStats, mods: currentChar.mods },
          ]}
          title="Computed Growth"
        />
        <StatTable data={characterData} title="Character Growths" />
        <StatTable data={classData} title="Class Growths" />
      </div>
    </main>
  );
}
