import React from 'react';
import Button from '@/components/common/Button';
import { ChevronRight } from 'lucide-react';
import { cardsDiscover } from '@/utils/data/home';
import Card from './Card';

const Discover = () => {
  return (
    <section className='Discover'>
      <div className='Discover__container'>
        <h1 className='Discover__title'>
          Découvrez notre expérience de voyage unique
        </h1>
        <p className='Discover__description'>
          Avec Terre d&apos;Eywar, chaque voyage commence par une réservation
          simple et rapide.
          <br />
          Vous serez ensuite guidé à travers une immersion totale dans la
          culture Touareg.
        </p>

        <div className='Discover__cards'>
          {cardsDiscover.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              text={card.text}
              image={card.image}
            />
          ))}
        </div>
        <div>
          <Button text='Réserver' />
          <Button
            text='En savoir plus'
            icon={<ChevronRight />}
            classNameModifier='transparent'
          />
        </div>
      </div>
    </section>
  );
};

export default Discover;
