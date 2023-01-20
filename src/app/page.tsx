'use client';
import { StatTable } from '@/components/StatTable';
import { characterData, classData } from '@/data';
import { useState } from 'react';

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
      <h1>FE: Engage Calculator</h1>
      <select
        name="currentChar"
        id="char-select"
        onChange={handleCharacter}
        defaultValue="Alear"
      >
        <option value="">--Please choose a Character--</option>
        {characterData.map((char) => {
          return (
            <option key={char.name} value={char.name}>
              {char.name}
            </option>
          );
        })}
      </select>
      <select
        name="currentClass"
        id="class-select"
        onChange={handleClass}
        defaultValue="Archer"
      >
        <option value="">--Please choose a Class--</option>
        {classData.map((cls) => {
          return (
            <option key={cls.name} value={cls.name}>
              {cls.name}
            </option>
          );
        })}
      </select>
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
      <div className="tables">
        <StatTable data={characterData} title="Character Growths" />
        <StatTable data={classData} title="Class Growths" />
      </div>
    </main>
  );
}
