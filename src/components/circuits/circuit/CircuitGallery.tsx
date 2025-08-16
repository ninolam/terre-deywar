import Slider from '@/components/common/slider/Slider';
import React from 'react';
import { Circuit } from '@/types/types';

interface CircuitGalleryProps {
  circuit: Circuit;
}

const CircuitGallery = ({ circuit }: CircuitGalleryProps) => {
  const { images } = circuit;
  return (
    <section className='CircuitGallery'>
      <div className='CircuitGallery__container'>
        <h1 className='CircuitGallery__title'>Plus de photos du circuit</h1>
        <p className='CircuitGallery__text'>
          Découvrez les paysages et moments inoubliables du circuit TADRAT.
        </p>
        {images && <Slider items={images} context='image' classNameModifier='dark' />}
      </div>
    </section>
  );
};

export default CircuitGallery;
