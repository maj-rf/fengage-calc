import { CalcSection } from '@/components/calc-section';
import { characterData, classData } from '@/lib/data';
export default function Home() {
  return (
    <div>
      <CalcSection characterData={characterData} classData={classData} />
    </div>
  );
}
