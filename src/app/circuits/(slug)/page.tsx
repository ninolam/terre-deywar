// import Image from 'next/image';
import { useParams } from 'next/navigation';

export default function Home() {
  const { slug } = useParams();

  return (
    <div>
      <h1>Circuit: {slug}</h1>
      {/* <Intro */}
    </div>
  );
}
