import { AverageSection } from '@/components/average-section';
import { characterData, classData } from '@/lib/data';
export default function AveragePage() {
  return (
    <div>
      <AverageSection characterData={characterData} classData={classData} />
    </div>
  );
}
