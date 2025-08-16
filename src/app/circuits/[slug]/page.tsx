import { circuits } from '@/utils/data/circuits';
import CircuitIntro from '@/components/circuits/circuit/Intro';
import CircuitStatistics from '@/components/circuits/circuit/Statistics';
import CircuitGallery from '@/components/circuits/circuit/Gallery';
import { Circuit } from '@/types/types';

const CircuitPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const currentCircuit = circuits.find((circuit: Circuit) => circuit.slug === slug);

  if (!currentCircuit) {
    return null;
  }
  // Passer le circuit en props pour chaque composant
  return (
    <>
      <CircuitIntro circuit={currentCircuit} />
      <CircuitStatistics circuit={currentCircuit} />
      <CircuitGallery circuit={currentCircuit} />
    </>
  );
};

export default CircuitPage;
