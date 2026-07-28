import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { CharData, Stats, Mods, ClassData, BaseData } from './data';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SPECIAL_TYPES = [
  'Dancer',
  'Enchanter',
  'Fell Child',
  'Fell Child(N)',
  'Fell Child(R)',
  'Mage Cannoneer',
  'Melusine',
  'Thief',
];

export function getSelectedClassGrowth(name: string, currentClass: ClassData): BaseData {
  const growth = {} as Stats;
  for (const x in currentClass.growth) {
    growth[x as keyof Stats] = (currentClass.growth[x as keyof Stats] as number) * 2;
  }
  const { weapons, ...current } = currentClass;
  return name !== 'Jean' ? current : { ...current, growth: { ...growth } };
}

export function getFinalGrowth(currentChar: CharData, selectedClass: BaseData): BaseData {
  const growth = {} as Stats;
  for (const x in selectedClass.growth) {
    growth[x as keyof Stats] = currentChar.growth[x as keyof Stats]! + selectedClass.growth[x as keyof Stats]!;
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
      x === 'RTG' ? total.growth[x as keyof Stats]! + 135 : total.growth[x as keyof Stats]! + 15;
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
    mods[x as keyof Mods] = currentChar.mods[x as keyof Mods] + selectedClass.mods[x as keyof Mods];
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
  mult: number;
  max: Stats;
  promotionBase?: Stats;
  primaryBase?: Stats;
}) {
  const { base, char, cls, mult, max, promotionBase, primaryBase } = obj;
  const result = { ...base };
  const primary = primaryBase ?? { HP: 0, STR: 0, MAG: 0, DEX: 0, SPD: 0, DEF: 0, RES: 0, BLD: 0, LCK: 0, RTG: 0 };
  const promotion = promotionBase ?? { HP: 0, STR: 0, MAG: 0, DEX: 0, SPD: 0, DEF: 0, RES: 0, BLD: 0, LCK: 0, RTG: 0 };
  for (const key of Object.keys(result) as (keyof Stats)[]) {
    if (
      result[key] !== null &&
      char[key] !== null &&
      cls[key] !== null &&
      max[key] !== null &&
      primary[key] !== null &&
      promotion[key] !== null
    ) {
      result[key] += (mult * (char[key] + cls[key])) / 100 + promotion[key] - primary[key];
      result[key] = result[key] >= max[key] ? max[key] : result[key];
    }
  }
  return result;
}

export function getLevelUps(currentChar: CharData, selectedClass: BaseData, className: string, to: number): CharData[] {
  const arr = [];
  const { initLevel } = currentChar;
  const base = currentChar.baseStats;
  const char = currentChar.growth;
  const cls = selectedClass.growth;
  const max = { ...getMaxStats(currentChar, selectedClass).mods, RTG: 0 };
  const classMax = SPECIAL_TYPES.includes(className) ? 40 : 20;
  const maxLevel = to >= classMax ? classMax : to;
  for (let i = initLevel - 1; i < maxLevel; i++) {
    const stat = calculateStat({ base, char, cls, mult: i - initLevel + 1, max });
    arr.push({ ...currentChar, name: `${i + 1}`, baseStats: stat });
  }

  return arr;
}

export function getPromotionLevelUps(
  prepromote: CharData,
  selectedClass: BaseData,
  primaryBase: Stats,
  promotionBase: Stats,
  to: number,
): CharData[] {
  if (!prepromote) return [];
  const arr = [];
  const base = prepromote.baseStats;
  const char = prepromote.growth;
  const cls = selectedClass.growth;
  const maxLevel = to >= 20 ? 20 : to;
  const max = { ...getMaxStats(prepromote, selectedClass).mods, RTG: 0 };
  for (let i = 0; i < maxLevel; i++) {
    const stat = calculateStat({ base, char, cls, mult: i, max, primaryBase, promotionBase });
    arr.push({ ...prepromote, name: `${i + 1}`, baseStats: stat });
  }
  return arr;
}
