'use client';
import { CharData, ClassData } from '@/lib/data';
import { useState } from 'react';
import { SelectDropdown } from './select-dropdown';
import { getLevelUps, getPromotionLevelUps, getSelectedClassGrowth } from '@/lib/utils';
import { AverageTable } from './table/average-table';
import { averageColumns } from './table/average-columns';
import { Input } from './ui/input';

export const AverageSection = ({ characterData, classData }: { characterData: CharData[]; classData: ClassData[] }) => {
  const [currentChar, setCurrentChar] = useState(characterData[1]);
  const [primary, setPrimary] = useState({ class: classData[10], baseLevel: 20 });
  const [promotion, setPromotion] = useState({ class: classData[2], baseLevel: 20 });
  const selectedClassGrowth = getSelectedClassGrowth(currentChar.name, primary.class);
  const data = getLevelUps(currentChar, selectedClassGrowth, primary.class.name, primary.baseLevel);
  const selectedPromotionGrowth = getSelectedClassGrowth(currentChar.name, promotion.class);
  const promotionData = getPromotionLevelUps(
    data.at(-1)!,
    selectedPromotionGrowth,
    primary.class.baseStats,
    promotion.class.baseStats,
    promotion.baseLevel,
  );

  const handleCharacter = (value: string) => {
    const char = characterData.find((obj) => obj.name === value);
    if (char) {
      setCurrentChar(char);
      setPrimary((prev) => {
        const current = classData.find((c) => c.name === char.baseClass);
        return current ? { class: current, baseLevel: current.type === 'Special' ? 40 : 20 } : prev;
      });
    }
  };

  const handleClass = (value: string) => {
    const cls = classData.find((obj) => obj.name === value);
    if (cls) {
      setPrimary((prev) => {
        return { ...prev, class: cls };
      });
    }
  };

  const handlePromotion = (value: string) => {
    const cls = classData.find((obj) => obj.name === value);
    if (cls) {
      setPromotion((prev) => {
        return { ...prev, class: cls };
      });
    }
  };

  return (
    <section className="flex flex-col gap-4">
      <div className="mx-auto w-full flex flex-col items-center justify-center gap-2">
        <SelectDropdown
          currentChar={currentChar}
          data={characterData}
          handleChange={handleCharacter}
          title="Character"
        />
        <div className="flex items-end gap-2">
          <SelectDropdown currentChar={primary.class} data={classData} handleChange={handleClass} title="Class" />
          <Input
            className="bg-background/80 w-16"
            type="number"
            min={1}
            max={primary.class.type === 'Special' ? 40 : 20}
            step={1}
            placeholder="Enter a number"
            value={primary.baseLevel}
            onChange={(e) =>
              setPrimary((prev) => {
                const level = !e.target.value ? 1 : e.target.valueAsNumber;
                return { ...prev, baseLevel: level };
              })
            }
          />
        </div>

        <div className="flex items-end gap-2">
          <SelectDropdown
            currentChar={promotion.class}
            data={classData.filter((c) => c.type === 'Advanced')}
            handleChange={handlePromotion}
            title="Class"
          />
          <Input
            className="bg-background/80 w-16"
            type="number"
            min={1}
            max={promotion.class.type === 'Special' ? 40 : 20}
            step={1}
            placeholder="Enter a number"
            value={promotion.baseLevel}
            onChange={(e) =>
              setPromotion((prev) => {
                const level = !e.target.value ? 1 : e.target.valueAsNumber;
                return { ...prev, baseLevel: level };
              })
            }
          />
        </div>
      </div>
      <AverageTable columns={averageColumns} data={data} label={`${currentChar.name}(${primary.class.name})`} />

      <AverageTable
        columns={averageColumns}
        data={promotionData}
        label={`${currentChar.name}(${primary.class.name}->${promotion.class.name})`}
      />
    </section>
  );
};
