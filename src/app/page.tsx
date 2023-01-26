'use client';
import { StatTable } from '@/components/StatTable';
import { characterData, classData } from '@/data';
import { useState } from 'react';
import { SelectDropdown } from '@/components/SelectDropdown';
import { Info } from '@/components/Info';

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
      <div className="selectors">
        <div className="dropdowns">
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
        <Info />
      </div>
      <div className="info-tables">
        <div>
          <StatTable
            data={[
              currentChar,
              selectedClass,
              { name: 'Total', growth: finalGrowth },
              { name: 'Starsphere', growth: starsphere },
            ]}
            title="Computed Growth"
          />
        </div>
        <div className="other-tables">
          <StatTable data={characterData} title="Character Growths" />
          <StatTable data={classData} title="Class Growths" />
        </div>
      </div>
    </main>
  );
}
