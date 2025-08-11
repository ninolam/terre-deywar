import CircuitSlider from '@/components/home/circuits/CircuitSlider';
import { circuits } from '@/utils/data/circuits';

const Circuits = () => {
  return (
    <section className='Circuits'>
      <div className='Circuits__infos'>
        <h2 className='Circuits__title'>
          Découvrez nos circuits uniques dans le désert ALGÉRIEN
        </h2>
        <p className='Circuits__description'>
          Nos circuits vous plongent au cœur de la culture touareg. Explorez
          des paysages à couper le souffle et vivez des expériences
          inoubliables. Chaque circuit est conçu pour vous offrir une
          immersion totale dans la magie du désert algérien.
        </p>
      </div>
      <div className='Circuits__slider'>
        <CircuitSlider cards={circuits} />
      </div>
    </section>
  );
};

export default Circuits;
