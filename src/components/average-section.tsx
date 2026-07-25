'use client';
import { CharData, ClassData } from '@/lib/data';
import { useState } from 'react';
import { SelectDropdown } from './select-dropdown';
import { getLevelUps, getSelectedClassGrowth } from '@/lib/utils';
import { AverageTable } from './table/average-table';
import { averageColumns } from './table/average-columns';

export const AverageSection = ({
  characterData,
  classData,
}: {
  characterData: CharData[];
  classData: ClassData[];
}) => {
  const [currentChar, setCurrentChar] = useState(characterData[1]);
  const [currentClass, setCurrentClass] = useState(classData[0]);
  // const [currentPromotion, setCurrentPromotion] = useState(classData[2]);

  const selectedClassGrowth = getSelectedClassGrowth(
    currentChar.name,
    currentClass,
  );

  // const selectedPromotionGrowth = getSelectedClassGrowth(
  //   currentChar.name,
  //   currentPromotion,
  // );

  const data = getLevelUps(currentChar, selectedClassGrowth, currentClass.name);
  // const promotionData = getLevelUps(
  //   data.at(-1)!,
  //   selectedPromotionGrowth,
  //   currentClass.name,
  // );
  const handleCharacter = (value: string) => {
    const char = characterData.find((obj) => obj.name === value);
    if (char) setCurrentChar(char);
  };

  const handleClass = (value: string) => {
    const cls = classData.find((obj) => obj.name === value);
    if (cls) setCurrentClass(cls);
  };

  // const handlePromotion = (value: string) => {
  //   const cls = classData.find((obj) => obj.name === value);
  //   if (cls) setCurrentPromotion(cls);
  // };

  return (
    <section className="flex flex-col gap-4">
      <div className="mx-auto sm:flex-row w-full flex flex-col items-center justify-center gap-2">
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

        {/* <SelectDropdown
          currentChar={currentClass}
          data={classData.filter((c) => c.type !== 'Advanced')}
          handleChange={handleClass}
          title="Class"
        /> */}

        {/* <SelectDropdown
          currentChar={currentPromotion}
          data={classData.filter((c) => c.type === 'Advanced')}
          handleChange={handlePromotion}
          title="Class"
          disabled={currentClass.type === 'Special'}
        /> */}
      </div>
      <AverageTable columns={averageColumns} data={data} />
      {/* {currentClass.type !== 'Special' && (
        <AverageTable columns={averageColumns} data={promotionData} />
      )} */}
    </section>
  );
};
