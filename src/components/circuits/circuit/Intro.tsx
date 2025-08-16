import React from 'react';
import Button from '@/components/common/Button';
import Image from 'next/image';
import { Circuit } from '@/types/types';

interface CircuitIntroProps {
  circuit: Circuit;
}
const CircuitIntro = ({ circuit }: CircuitIntroProps) => {
  const { title, mainDescription, subtitle, locations, activities } = circuit;
  return (
    <section className='CircuitIntro'>
      <div className='CircuitIntro__container'>
        <div className='CircuitIntro__details'>
          <div className='CircuitIntro__explore'>
            <p className='CircuitIntro__explore__label'>{subtitle}</p>
            <h1>{title}</h1>
            <p>
              {mainDescription}
            </p>
          </div>
          <div className='CircuitIntro__sections'>
            {locations && <div>
              <h2>{locations.title}</h2>
              <p>
                {locations.description}
              </p>
            </div>
            }
            {activities && <div>
              <h2>{activities.title}</h2>
              <p>
                {activities.description}
              </p>
            </div>
            }
          </div>
          <div className='CircuitIntro__actions'>
            <Button text={`Voir les dates disponible de ${title}`} />
            <Button text='Voir plus de photos' />
          </div>
        </div>
        <div className='CircuitIntro__gallery'>
          <Image
            className='CircuitIntro__gallery__item CircuitIntro__gallery__item--large'
            src={'/images/0FC13B24-5FBC-47D1-BDC4-A2F4F74A01CD.jpg'}
            alt=''
            width={240}
            height={120}
          />
          <div className='CircuitIntro__gallery__item__row'>
            <Image
              className='CircuitIntro__gallery__item CircuitIntro__gallery__item--left'
              src={'/images/0FC13B24-5FBC-47D1-BDC4-A2F4F74A01CD.jpg'}
              alt=''
              width={120}
              height={120}
            />
            <Image
              className='CircuitIntro__gallery__item CircuitIntro__gallery__item--right'
              src={'/images/0FC13B24-5FBC-47D1-BDC4-A2F4F74A01CD.jpg'}
              alt=''
              width={120}
              height={120}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CircuitIntro;
