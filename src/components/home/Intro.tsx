import Button from '../common/Button';

const Intro = () => {
  return (
    <section className='Intro'>
      <div className='Intro__container'>
        <h1 className='Intro__title'>
          Découvrez l&apos;authenticité du désert algérien
        </h1>
        <p className='Intro__description'>
          Partez pour une aventure inoubliable au cœur des paysages époustouflants de l&apos;Algérie. Vivez la culture des Touaregs et laissez-vous envoûter par la musique du désert.
        </p>
        <div className='Intro__buttons'>
          <Button text="Explorer" classNameModifier='whiteSand' />
          <Button text="Réserver" classNameModifier='white20' />
        </div>
      </div>
    </section>
  );
};

export default Intro;