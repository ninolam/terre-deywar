import React from 'react';
import Button from '@/components/common/Button';
import Overlay from '../common/Overlay';

const Adventure = () => {
  return (
    <section className='Adventure'>
      <Overlay />
      <div className='Adventure__container'>
        <h1 className='Adventure__title'>Réservez votre aventure maintenant</h1>
        <p className='Adventure__text'>
          Découvrez nos circuits uniques à travers le désert algérien et vivez
          une expérience inoubliable.
        </p>
        <div className='Adventure__buttons'>
          <Button text='En savoir plus' classNameModifier='whiteSand' />
          <Button text='Réserver' classNameModifier='white20' />
        </div>
      </div>
    </section>
  );
};

export default Adventure;
