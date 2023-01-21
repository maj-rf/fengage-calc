'use client';
import { StatTable } from '@/components/StatTable';
import { characterData, classData } from '@/data';
import { useState } from 'react';
import { SelectDropdown } from '@/components/SelectDropdown';

export default function Home() {
  const [currentChar, setCurrentChar] = useState(characterData[0]);
  const [currentClass, setCurrentClass] = useState(classData[0]);
  const finalGrowth = currentChar.growth.map(
    (v, i) => v + currentClass.growth[i]
  );
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
      <div className="info-tables">
        <div>
          <StatTable
            data={[
              currentChar,
              currentClass,
              { name: 'Total', growth: finalGrowth },
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
