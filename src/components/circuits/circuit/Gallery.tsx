import Slider from '@/components/common/slider/Slider';
import { images } from '@/utils/data/slider';
import React from 'react';

const CircuitGallery = () => {
  return (
    <section className='CircuitGallery'>
      <div className='CircuitGallery__container'>
        <h1 className='CircuitGallery__title'>Plus de photos du circuit</h1>
        <p className='CircuitGallery__text'>
          Découvrez les paysages et moments inoubliables du circuit TADRAT.
        </p>
        <Slider items={images} context='image' classNameModifier='dark' />
      </div>
    </section>
  );
};

export default CircuitGallery;
