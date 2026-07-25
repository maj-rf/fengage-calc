import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { CharData, Stats, Mods, ClassData, BaseData } from './data';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getSelectedClassGrowth(
  name: string,
  currentClass: ClassData,
): BaseData {
  const growth = {} as Stats;
  for (const x in currentClass.growth) {
    growth[x as keyof Stats] =
      (currentClass.growth[x as keyof Stats] as number) * 2;
  }
  const { weapons, ...current } = currentClass;
  return name !== 'Jean' ? current : { ...current, growth: { ...growth } };
}

export function getFinalGrowth(
  currentChar: CharData,
  selectedClass: BaseData,
): BaseData {
  const growth = {} as Stats;
  for (const x in selectedClass.growth) {
    growth[x as keyof Stats] =
      currentChar.growth[x as keyof Stats]! +
      selectedClass.growth[x as keyof Stats]!;
  }
  return {
    name: 'Total %',
    growth: { ...growth },
    mods: currentChar.mods,
  };
}

export function getStarsphere(total: BaseData): BaseData {
  const growth = {} as Stats;
  for (const x in total.growth) {
    growth[x as keyof Stats] =
      x === 'RTG'
        ? total.growth[x as keyof Stats]! + 135
        : total.growth[x as keyof Stats]! + 15;
  }
  return {
    name: 'Starsphere %',
    growth: { ...growth },
    mods: total.mods,
  };
}

export function getMaxStats(currentChar: CharData, selectedClass: BaseData) {
  const mods = {} as Mods;
  for (const x in currentChar.mods) {
    mods[x as keyof Mods] =
      currentChar.mods[x as keyof Mods] + selectedClass.mods[x as keyof Mods];
  }
  return {
    name: 'Max Stats',
    growth: { ...mods, RTG: null },
    mods,
  };
}

function calculateStat(obj: {
  base: Stats;
  char: Stats;
  cls: Stats;
  mods: Stats;
  mult: number;
  max: Stats;
}) {
  const { base, char, cls, mult, max, mods } = obj;
  const result = { ...base };

  for (const key of Object.keys(result) as (keyof Stats)[]) {
    if (
      result[key] !== null &&
      char[key] !== null &&
      cls[key] !== null &&
      max[key] !== null &&
      mods[key] !== null
    ) {
      result[key] += mods[key] + (mult * (char[key] + cls[key])) / 100;
      result[key] = result[key] >= max[key] ? max[key] : result[key];
    }
  }
  return result;
}

export function getLevelUps(
  currentChar: CharData,
  selectedClass: BaseData,
  className: string,
) {
  const arr = [{ ...currentChar, name: String(currentChar.initLevel) }];

  const special = [
    'Dancer',
    'Thief',
    'Melusine',
    'Fell Child',
    'Fell Child(R)',
    'Fell Child(N)',
  ];
  const base = currentChar.baseStats;
  const char = currentChar.growth;
  const mods = { ...currentChar.mods, RTG: 0 };
  const cls = selectedClass.growth;

  const maxLevel = special.includes(className) ? 40 : 20;
  const maxStats = getMaxStats(currentChar, selectedClass).growth;
  for (let i = currentChar.initInternalLevel; i < maxLevel; i++) {
    const stat = calculateStat({
      base,
      char,
      cls,
      mult: i,
      mods,
      max: maxStats,
    });
    arr.push({
      ...currentChar,
      name: `${currentChar.initLevel + i}`,
      baseStats: stat,
    });
  }

  return arr;
}
