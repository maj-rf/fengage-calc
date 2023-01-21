type Growth = number;
type Stats = Growth[];
export type CharData = {
  name: string;
  growth: Stats;
};

// +10 Jean [60, 30, 30, 45, 50, 30, 35, 35, 15]
// +20 Jean  [70, 40, 40, 55, 60, 40, 45, 45, 25]

export const characterData: CharData[] = [
  { name: 'Alear', growth: [60, 35, 20, 45, 50, 25, 40, 25, 5] },
  { name: 'Clanne', growth: [40, 35, 10, 40, 50, 20, 30, 25, 5] },
  { name: 'Framme', growth: [55, 30, 25, 35, 55, 25, 25, 30, 0] },
  { name: 'Vander', growth: [60, 25, 10, 25, 35, 10, 35, 20, 5] },
  { name: 'Alfred', growth: [65, 40, 5, 35, 40, 40, 40, 20, 10] },
  { name: 'Boucheron', growth: [85, 20, 0, 50, 45, 15, 35, 20, 20] },
  { name: 'Celine', growth: [50, 35, 25, 30, 45, 50, 30, 40, 5] },
  { name: 'Chloe', growth: [75, 25, 35, 40, 55, 25, 30, 25, 5] },
  { name: 'Etie', growth: [45, 40, 0, 25, 35, 25, 25, 30, 5] },
  { name: 'Jean', growth: [50, 20, 20, 35, 40, 25, 25, 20, 5] },
  { name: 'Louie', growth: [75, 40, 0, 25, 25, 25, 50, 20, 15] },
  { name: 'Alcryst', growth: [65, 30, 10, 40, 45, 15, 30, 20, 10] },
  { name: 'Amber', growth: [65, 45, 0, 25, 30, 35, 35, 5, 15] },
  { name: 'Citrinne', growth: [45, 10, 40, 25, 30, 25, 20, 40, 5] },
  { name: 'Diamant', growth: [75, 30, 15, 20, 40, 20, 40, 25, 15] },
  { name: 'Jade', growth: [55, 35, 25, 35, 30, 20, 40, 30, 10] },
  { name: 'Lapis', growth: [55, 25, 20, 35, 55, 25, 35, 30, 5] },
  { name: 'Yunaka', growth: [50, 35, 25, 40, 45, 25, 15, 45, 5] },
  { name: 'Bunet', growth: [65, 30, 10, 40, 35, 40, 45, 25, 10] },
  { name: 'Fogado', growth: [60, 30, 25, 30, 55, 25, 30, 35, 10] },
  { name: 'Merrin', growth: [55, 25, 25, 40, 50, 25, 30, 30, 10] },
  { name: 'Pandreo', growth: [60, 5, 30, 45, 45, 30, 15, 55, 15] },
  { name: 'Panette', growth: [75, 45, 10, 40, 25, 20, 30, 15, 15] },
  { name: 'Seadall', growth: [55, 25, 15, 25, 50, 35, 25, 25, 10] },
  { name: 'Timerra', growth: [55, 25, 25, 45, 45, 30, 30, 30, 10] },
  { name: 'Anna', growth: [55, 15, 50, 50, 50, 45, 20, 35, 5] },
  { name: 'Goldmary', growth: [65, 30, 5, 25, 25, 25, 55, 25, 5] },
  { name: 'Hortensia', growth: [40, 20, 20, 35, 50, 50, 25, 55, 0] },
  { name: 'Ivy', growth: [55, 25, 30, 25, 40, 15, 30, 35, 10] },
  { name: 'Kagetsu', growth: [60, 30, 15, 50, 50, 40, 40, 25, 10] },
  { name: 'Rosado', growth: [75, 45, 25, 40, 45, 20, 30, 30, 5] },
  { name: 'Zelkov', growth: [65, 35, 15, 40, 35, 25, 35, 15, 10] },
  { name: 'Lindon', growth: [65, 25, 25, 25, 40, 15, 25, 40, 10] },
  { name: 'Mauvier', growth: [70, 35, 40, 40, 35, 15, 50, 45, 15] },
  { name: 'Saphir', growth: [80, 35, 0, 25, 30, 20, 30, 5, 10] },
  { name: 'Veyle', growth: [40, 25, 45, 35, 30, 20, 25, 35, 0] },
];

export const classData: CharData[] = [
  { name: 'Archer', growth: [10, 15, 0, 25, 10, 5, 5, 0, 0] },
  { name: 'Armor', growth: [20, 15, 0, 10, 0, 0, 30, 0, 5] },
  { name: 'Cavalier', growth: [10, 10, 0, 10, 10, 10, 10, 10, 0] },
  { name: 'DragonChild', growth: [10, 10, 0, 10, 15, 10, 5, 10, 5] },
  { name: 'Fighter', growth: [25, 20, 0, 5, 10, 0, 5, 0, 5] },
  { name: 'Flier', growth: [5, 10, 5, 10, 10, 10, 0, 10, 0] },
  { name: 'Lord(B)', growth: [15, 20, 0, 10, 10, 5, 10, 0, 0] },
  { name: 'Lord(C)', growth: [10, 10, 0, 25, 10, 5, 10, 0, 0] },
  { name: 'Mage', growth: [0, 0, 25, 5, 0, 5, 0, 25, 0] },
  { name: 'MartialMonk', growth: [0, 10, 25, 0, 0, 10, 10, 20, 0] },
  { name: 'Noble(C)', growth: [15, 15, 0, 5, 5, 15, 20, 5, 0] },
  { name: 'Noble(M)', growth: [0, 5, 10, 5, 5, 20, 5, 10, 0] },
  { name: 'Sentinel(B)', growth: [10, 10, 0, 10, 5, 5, 20, 0, 0] },
  { name: 'Sentinel(C)', growth: [10, 5, 0, 15, 15, 0, 5, 15, 0] },
  { name: 'WingTamer', growth: [0, 0, 15, 10, 10, 10, 0, 25, 0] },
  { name: 'WingTamer(D)', growth: [5, 0, 20, 0, 0, 0, 10, 20, 0] },
  { name: 'Avenir', growth: [15, 15, 0, 5, 10, 20, 25, 5, 5] },
  { name: 'Berserker', growth: [30, 30, 0, 5, 10, 0, 5, 0, 10] },
  { name: 'BowKnight', growth: [10, 10, 0, 20, 20, 15, 0, 15, 0] },
  { name: 'Cupido', growth: [10, 5, 5, 20, 20, 0, 5, 20, 0] },
  { name: 'DivineDragon', growth: [10, 10, 0, 10, 15, 15, 10, 15, 5] },
  { name: 'General', growth: [25, 20, 0, 10, 0, 0, 30, 0, 10] },
  { name: 'GreatKnight', growth: [20, 15, 0, 15, 0, 5, 25, 10, 5] },
  { name: 'GriffinKnight', growth: [0, 10, 15, 15, 20, 15, 0, 15, 0] },
  { name: 'Halberdier', growth: [10, 15, 5, 20, 10, 5, 15, 5, 0] },
  { name: 'Hero', growth: [15, 15, 0, 10, 15, 15, 0, 10, 0] },
  { name: 'HighPriest', growth: [0, 0, 25, 0, 5, 30, 0, 30, 0] },
  { name: 'Lindwurm', growth: [5, 0, 25, 5, 0, 0, 15, 25, 0] },
  { name: 'MageKnight', growth: [5, 5, 25, 0, 5, 5, 10, 25, 0] },
  { name: 'MartialMaster', growth: [5, 10, 20, 0, 0, 10, 15, 25, 0] },
  { name: 'Paladin', growth: [15, 15, 0, 10, 15, 10, 15, 15, 0] },
  { name: 'Picket', growth: [10, 15, 0, 10, 10, 5, 20, 5, 5] },
  { name: 'RoyalKnight', growth: [5, 10, 15, 15, 15, 10, 5, 20, 0] },
  { name: 'Sage', growth: [0, 0, 30, 5, 0, 0, 15, 30, 0] },
  { name: 'SleipnirRider', growth: [0, 0, 20, 15, 15, 15, 0, 30, 0] },
  { name: 'Sniper', growth: [15, 15, 0, 30, 10, 10, 10, 0, 0] },
  { name: 'Successeur', growth: [15, 20, 0, 10, 15, 10, 15, 0, 5] },
  { name: 'Swordmaster', growth: [10, 10, 0, 15, 20, 15, 0, 15, 0] },
  { name: 'Thief', growth: [5, 10, 0, 20, 15, 15, 15, 5, 0] },
  { name: 'Tireurd’elite', growth: [10, 10, 0, 30, 10, 5, 15, 5, 0] },
  { name: 'Vidame', growth: [5, 10, 15, 5, 5, 20, 5, 15, 0] },
  { name: 'Warrior', growth: [25, 20, 0, 10, 15, 0, 10, 5, 5] },
  { name: 'WolfKnight', growth: [10, 5, 0, 15, 20, 20, 5, 20, 0] },
  { name: 'WyvernKnight', growth: [20, 20, 0, 10, 5, 5, 20, 5, 5] },
];
