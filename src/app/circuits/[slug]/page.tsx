import { circuits } from '@/utils/data/circuits';
import CircuitIntro from '@/components/circuits/circuit/Intro';
import CircuitStatistics from '@/components/circuits/circuit/Statistics';
import CircuitGallery from '@/components/circuits/circuit/Gallery';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const currentCircuit = circuits.find((circuit) => circuit.slug === slug);

  if (!currentCircuit) {
    return null;
  }
  return (
    <>
      <CircuitIntro />
      <CircuitStatistics />
      <CircuitGallery />
    </>
  );
}
