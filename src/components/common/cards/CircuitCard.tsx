import React from 'react';
import Button from '../Button';

const CircuitCard = ({ circuit, withButton, classNameModifier = '' }: { circuit: { title: string, description: string, image: string }, withButton?: boolean, classNameModifier?: string }) => {
  const { title, description, image } = circuit;
  return (
    <div className={`CircuitCard ${classNameModifier ? `CircuitCard--${classNameModifier}` : ''}`} style={{ backgroundImage: `url(${image})` }}>
      <span className='CircuitCard__description'>{description}</span>
      <div className='CircuitCard__flexItems'>
        <h3 className='CircuitCard__title'>{title}</h3>
        {withButton && <Button text='Découvrir' classNameModifier='whiteSand' />}
      </div>
    </div>
  );
};

export default CircuitCard;