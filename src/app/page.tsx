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
    <section>
      <CalcTable
        initialData={[
          currentChar,
          selectedClass,
          totalGrowth,
          starsphere,
          maxStats,
        ]}
      />
      <div className="flex flex-col md:flex-row items-center justify-center gap-2">
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
      <div className="m-8">
        <details className="max-w-5xl mx-auto p-4">
          <summary className="text-white max-w-xs mx-auto bg-red-400 px-4 py-2 rounded-lg text-center">
            FAQs
          </summary>
          <ul className="list-inside flex flex-col justify-center gap-4">
            <li className="bg-white p-4 mt-4 rounded-md">
              <p className="font-semibold">Q: How can I use this?</p>
              <p>
                A: Pick any combination of character and class in-game using the
                dropdowns and the calculator will do the magic.
              </p>
            </li>
            <li className="bg-white p-4 mt-4 rounded-md">
              <p className="font-semibold">
                Q: What are Total, Starsphere, and Max Stats?{' '}
              </p>
              <p>
                A: Total growth (character + class growth), Starsphere (Total +
                15 per stat), and Max Stats for highest attainable value for
                each stat.
              </p>
            </li>
            <li className="bg-white p-4 mt-4 rounded-md">
              <p className="font-semibold">
                Q: What are the abbreviations like M or Ca?
              </p>
              <p>
                A: Class Types: Backup(B), Covert(C), Cavalry(Ca), Mystical(M),
                Flying(F), Qi Adept(Q), Dragon(D), Armor(A)
              </p>
              <p>Special Units: Rafal(R), Nel(N)</p>
            </li>
          </ul>
        </details>
      </div>
    </section>
  );
}
