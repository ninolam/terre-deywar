import { images } from '@/utils/data/slider';
import Slider from '../common/slider/Slider';

const Images = () => {
  return (
    <section className='CircuitsImages'>
      <div className='CircuitsImages__container'>
        <h2 className='CircuitsImages__title'>
          Un aperçu des circuits en photo...
        </h2>
        <p className='CircuitsImages__description'>
          Découvrez les paysages et moments inoubliables de nos circuits.
        </p>
        <Slider items={images} context='image' classNameModifier='dark' />
      </div>
    </section>
  );
};

export default Images;
