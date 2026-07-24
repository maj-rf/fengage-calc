import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { CharData, Stats, Mods } from './data';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getSelectedClass(name: string, currentClass: CharData) {
  const growth = {} as Stats;
  for (const x in currentClass.growth) {
    growth[x as keyof Stats] =
      (currentClass.growth[x as keyof Stats] as number) * 2;
  }
  return name !== 'Jean'
    ? currentClass
    : { ...currentClass, growth: { ...growth } };
}

export function getFinalGrowth(currentChar: CharData, selectedClass: CharData) {
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

export function getStarsphere(total: CharData) {
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

export function getMaxStats(currentChar: CharData, selectedClass: CharData) {
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

const roundTo = function (num: number, places: number) {
  const factor = 10 ** places;
  return Math.round(num * factor) / factor;
};

export function getLevelUps(currentChar: CharData, selectedClass: CharData) {
  const arr = [];
  for (let i = currentChar.initLevel; i! < 20; i!++) {
    const stat: Stats = arr[i!]
      ? arr[i!].baseStats
      : {
          HP: 0,
          STR: 0,
          MAG: 0,
          DEX: 0,
          SPD: 0,
          DEF: 0,
          RES: 0,
          LCK: 0,
          BLD: 0,
          RTG: null,
        };
    for (const key in currentChar.baseStats) {
      stat[key as keyof Stats] =
        currentChar.baseStats[key as keyof Stats]! +
        selectedClass.growth[key as keyof Stats]! / 100;
      currentChar.baseStats[key as keyof Stats] = stat[key as keyof Stats]!;
    }
    arr.push({ name: String(i), baseStats: stat, growth: stat, mods: stat });
  }

  return arr;
}
