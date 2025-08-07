import { circuits } from '@/utils/data/circuits';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const currentCircuit = circuits.find((circuit) => circuit.slug === slug);
  console.log(currentCircuit);

  return <div>{slug}</div>;
}