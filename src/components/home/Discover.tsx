import React from 'react';
import Image from 'next/image';
import Button from '@/components/common/Button';
import { ChevronRight } from 'lucide-react';
import { cardsDiscover } from '@/utils/data';

const Discover = () => {
  return (
    <section>
      <div>
        <h1>Découvrez notre expérience de voyage unique</h1>
        <p>
          Avec Terre d&apos;Eywar, chaque voyage commence par une réservation
          simple et rapide. Vous serez ensuite guidé à travers une immersion
          totale dans la culture Touareg.
        </p>
      </div>
      {/* <div>
        {cardsDiscover.map((card) => (
          <div>
            <h1>{card.title}</h1>
            <Image src={} alt='image-' />
            <p>{card.p}</p>
          </div>
        ))}
      </div> */}
      <div>
        <Button text='Réserver' />
        <Button text='En savoir plus' icon={<ChevronRight />} />
      </div>
    </section>
  );
};

export default Discover;
