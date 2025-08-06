import Adventure from '@/components/home/Adventure';
import Circuits from '@/components/home/circuits/Circuits';
import Discover from '@/components/home/discover/Discover';
import Intro from '@/components/home/Intro';
import Gallery from '@/components/home/Gallery';

const Home = () => {
  return (
    <>
      <Intro />
      <Discover />
      <Circuits />
      <Adventure />
      <Gallery />
    </>
  );
};

export default Home;
