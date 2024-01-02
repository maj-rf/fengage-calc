import { CharData, Stats, Mods } from '@/data';

export function getSelectedClass(name: string, currentClass: CharData) {
  const growth = {} as Stats;
  for (let x in currentClass.growth) {
    growth[x as keyof Stats] =
      (currentClass.growth[x as keyof Stats] as number) * 2;
  }
  return name !== 'Jean'
    ? currentClass
    : { ...currentClass, growth: { ...growth } };
}

export function getFinalGrowth(currentChar: CharData, selectedClass: CharData) {
  const growth = {} as Stats;

  for (let x in selectedClass.growth) {
    growth[x as keyof Stats] =
      currentChar.growth[x as keyof Stats]! +
      selectedClass.growth[x as keyof Stats]!;
  }

  return {
    name: 'Total (%)',
    growth: { ...growth },
    mods: currentChar.mods,
  };
}

export function getStarsphere(total: CharData) {
  const growth = {} as Stats;
  for (let x in total.growth) {
    growth[x as keyof Stats] =
      x === 'RTG'
        ? total.growth[x as keyof Stats]! + 135
        : total.growth[x as keyof Stats]! + 15;
  }
  return {
    name: 'Starsphere (%)',
    growth: { ...growth },
    mods: total.mods,
  };
}

export function getMaxStats(currentChar: CharData, selectedClass: CharData) {
  const mods = {} as Mods;
  for (let x in currentChar.mods) {
    mods[x as keyof Mods] =
      currentChar.mods[x as keyof Mods] + selectedClass.mods[x as keyof Mods];
  }
  return {
    name: 'Max Stats',
    growth: { ...mods, RTG: null },
    mods,
  };
}
