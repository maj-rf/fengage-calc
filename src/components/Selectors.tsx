import { CharData } from '@/data';
import { Info } from './Info';
import { SelectDropdown } from './SelectDropdown';

type SelectorsProps = {
  handleCharacter: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleClass: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  classData: CharData[];
  characterData: CharData[];
};

export const Selectors = ({
  handleCharacter,
  handleClass,
  classData,
  characterData,
}: SelectorsProps) => {
  return (
    <div className="selectors">
      <div className="dropdowns">
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
      <Info />
    </div>
  );
};
