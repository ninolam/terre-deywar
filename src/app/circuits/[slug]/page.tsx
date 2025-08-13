import { circuits } from '@/utils/data/circuits';
import Intro from '@/components/circuits/circuit/Intro';
import Statistics from '@/components/circuits/circuit/Statistics';
import Gallery from '@/components/circuits/circuit/Gallery';

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
      <Intro />
      <Statistics />
      <Gallery />
    </>
  );
}
