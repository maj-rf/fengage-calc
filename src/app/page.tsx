'use client';
import { StatTable } from '@/components/StatTable';
import { characterData, classData } from '@/data';
import { useState } from 'react';
import { Selectors } from '@/components/Selectors';

export default function Home() {
  const [currentChar, setCurrentChar] = useState(characterData[1]);
  const [currentClass, setCurrentClass] = useState(classData[0]);
  const selectedClass =
    currentChar.name === 'Jean'
      ? {
          ...currentClass,
          growth: currentClass.growth.map((c) => c * 2),
        }
      : currentClass;
  const finalGrowth = currentChar.growth.map(
    (v, i) => v + selectedClass.growth[i]
  );
  const starsphere = finalGrowth.map((v) => v + 15);
  const maxStats = currentChar.mods.map((v, i) => v + selectedClass.mods[i]);

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
