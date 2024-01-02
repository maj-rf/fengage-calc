import { ClassData, type Weapons } from '@/data';
import Image from 'next/image';

function isWeaponsArray(arr: any): arr is Weapons[] {
  if (!Array.isArray(arr)) {
    return false;
  }
  return arr.every((item) => typeof item === 'string' && (item as Weapons));
}

function isWeapons2DArray(arr: any): arr is Weapons[][] {
  if (!Array.isArray(arr)) {
    return false;
  }
  return arr.every((innerArr) => isWeaponsArray(innerArr));
}

function WeaponImage({ weapon, name }: { weapon: string; name: string }) {
  return (
    <Image
      src={`/weapons/${weapon}.png`}
      alt={`${name} weapons`}
      width={20}
      height={20}
    />
  );
}

export default function WeaponsSection({
  currentClass,
}: {
  currentClass: ClassData;
}) {
  if (isWeapons2DArray(currentClass.weapons)) {
    return (
      <div className="flex gap-2">
        {currentClass.weapons.map((arr, idx) => {
          return (
            <div
              key={`${currentClass.name} weapons set ${idx}`}
              className="flex gap-2"
            >
              {arr.map((weapon, index) => {
                return (
                  <WeaponImage
                    weapon={weapon}
                    name={currentClass.name}
                    key={`${weapon} ${index}`}
                  />
                );
              })}
              {currentClass.weapons.length !== idx + 1 ? <p>or</p> : null}
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div className="flex gap-2">
      {currentClass.weapons.map((weapon, index) => {
        return (
          <WeaponImage
            weapon={weapon}
            name={currentClass.name}
            key={`${weapon} ${index}`}
          />
        );
      })}
    </div>
  );
}
