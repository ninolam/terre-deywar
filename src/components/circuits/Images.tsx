import Slider from '../common/slider/Slider';

const Images = () => {

  const images = [
    '/images/section-circuits/image-circuit-1.jpg',
    '/images/section-circuits/image-circuit-2.jpg',
    '/images/section-circuits/image-circuit-3.jpg',
    '/images/section-circuits/image-circuit-1.jpg',
    '/images/section-circuits/image-circuit-2.jpg',
    '/images/section-circuits/image-circuit-3.jpg',

  ];
  return (
    <section className='CircuitsImages'>
      <div className='CircuitsImages__container'>
        <h2 className='CircuitsImages__title'>Un aperçu des circuits en photo...</h2>
        <p className='CircuitsImages__description'>Découvrez les paysages et moments inoubliables de nos circuits.</p>
        <Slider
          items={images}
          context='image'
          classNameModifier='dark'
        />
      </div>

    </section>
  );
};

export default Images;