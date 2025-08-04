import Button from '@/components/common/Button';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';


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
      <div></div>
      <div>
        <Button text='Réserver' />
        <Button text='En savoir plus' icon={<ChevronRight/>}/> 
      </div>
    </section>
  );
};

export default Discover;
