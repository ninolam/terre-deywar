import React from 'react';
import Button from '../Button';

const CircuitCard = ({ card, withButton }: { card: { title: string, description: string, image: string }, withButton: boolean }) => {
  const { title, description, image } = card;
  return (
    <div className='CircuitCard' style={{ backgroundImage: `url(${image})` }}>
      <span className='CircuitCard__description'>{description}</span>
      <div className='CircuitCard__flexItems'>
        <h3 className='CircuitCard__title'>{title}</h3>
        {withButton && <Button text='Découvrir' classNameModifier='whiteSand' />}
      </div>
    </div>
  );
};

export default CircuitCard;