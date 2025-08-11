import React from 'react';
import Button from '@/components/common/Button';

const Intro = () => {
  return (
    <section>
      <div>
        <p>Aventure</p>
        <h1>Explorez les merveilles de djanet avec le circuit IHRIR</h1>
        <p>
          Ce circuit vous emmène à travers des paysages époustouflants, où vous
          découvrirez la culture fascinante des Touaregs. Participez à des
          activités immersives, telles que des concerts de musiciens du désert
          et des visites de villages traditionnels.
        </p>
      </div>
      <div>
        <div>
          <h2>Lieux</h2>
          Visitez les dunes de sable et les oasis, les peintures rupestres
          datant de 10000 ans et pleins d’autres.
        </div>
        <div>
          <h2>Activités</h2>
          <p>
            Volley ball, randonnées et immersion culturelle, jeux de sociétés,
            music avec les touaregs, rencontres avec les nomades.
          </p>
        </div>
      </div>
      <div>
        <Button text='Voir les dates disponible de ce circuit' />
        <Button text='Voir plus de photos' />
      </div>
    </section>
  );
};

export default Intro;
