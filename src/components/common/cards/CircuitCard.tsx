import React from 'react';
import Button from '../Button';
import Link from 'next/link';
import { Circuit } from '@/types/types';

interface CircuitCardProps {
  circuit: Circuit;
  withButton?: boolean;
  classNameModifier?: string;
}

const CircuitCard = ({ circuit, withButton, classNameModifier = '' }: CircuitCardProps) => {
  const { title, description, image, slug } = circuit;
  return (
    <Link href={`/circuits/${slug}`} className={`CircuitCard ${classNameModifier ? `CircuitCard--${classNameModifier}` : ''}`} style={{ backgroundImage: `url(${image})` }}>
      <span className='CircuitCard__description'>{description}</span>
      <div className='CircuitCard__flexItems'>
        <h3 className='CircuitCard__title'>{title}</h3>
        {withButton && <Button text='Découvrir' classNameModifier='whiteSand' />}
      </div>
    </Link>
  );
};

export default CircuitCard;