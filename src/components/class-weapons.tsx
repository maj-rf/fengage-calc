import type { Weapons } from '@/lib/data';
import Image from 'next/image';

function isWeaponsArray(arr: unknown): arr is Weapons[] {
  if (!Array.isArray(arr)) {
    return false;
  }
  return arr.every((item) => typeof item === 'string' && (item as Weapons));
}

function isWeapons2DArray(arr: unknown): arr is Weapons[][] {
  if (!Array.isArray(arr)) {
    return false;
  }
  return arr.every((innerArr) => isWeaponsArray(innerArr));
}

function WeaponImage({ weapon, name }: { weapon: string; name: string }) {
  return <Image src={`/weapons/${weapon}.png`} alt={`${name} weapons`} width={20} height={20} />;
}

export default function ClassWeapons({ weapons, name }: { name: string; weapons: Weapons[] | Weapons[][] }) {
  if (isWeapons2DArray(weapons)) {
    return (
      <div className="flex w-full items-center justify-center gap-2">
        {weapons.map((arr, idx) => {
          return (
            <div key={`${name} weapons set ${idx}`} className="flex gap-2">
              {arr.map((weapon, index) => {
                return <WeaponImage weapon={weapon} name={name} key={`${weapon} ${index}`} />;
              })}
              {weapons.length !== idx + 1 ? <span className="border-2 border-r border-muted-foreground"></span> : null}
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div className="flex w-full items-center justify-center gap-2">
      {weapons.map((weapon, index) => {
        return <WeaponImage weapon={weapon} name={name} key={`${weapon} ${index}`} />;
      })}
    </div>
  );
}
