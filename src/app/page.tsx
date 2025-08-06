import Adventure from '@/components/home/Adventure';
import Discover from '@/components/home/discover/Discover';
import Intro from '@/components/home/Intro';
import SomePictures from '@/components/home/SomePictures';

const Home = () => {
  return (
    <>
      <Intro />
      <Discover />
      <Adventure />
      <SomePictures />
    </>
  );
};

export default Home;
