import Slider from '@/components/common/slider/Slider';
import React from 'react';

const Gallery = () => {
  const images = [
    '/images/section-circuits/image-circuit-1.jpg',
    '/images/section-circuits/image-circuit-2.jpg',
    '/images/section-circuits/image-circuit-3.jpg',
    '/images/section-circuits/image-circuit-1.jpg',
    '/images/section-circuits/image-circuit-2.jpg',
    '/images/section-circuits/image-circuit-3.jpg',
  ];
  return (
    <section className='Gallery-circuit'>
      <div className='Gallery-circuit__container'>
        <h1 className='Gallery-circuit__title'>Plus de photos du circuit</h1>
        <p className='Gallery-circuit__text'>Découvrez les paysages et moments inoubliables du circuit TADRAT.</p>
        <Slider items={images} context='image' classNameModifier='dark' />
      </div>
    </section>
  );
};

export default Gallery;
