import Adventure from '@/components/home/Adventure';
import Discover from '@/components/home/discover/Discover';
import Intro from '@/components/home/Intro';
import Gallery from '@/components/home/Gallery';

const Home = () => {
  return (
    <>
      <Intro />
      <Discover />
      <Adventure />
      <Gallery />
    </>
  );
};

export default Home;
