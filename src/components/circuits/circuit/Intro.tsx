import React from 'react';
import Button from '@/components/common/Button';
import Image from 'next/image';

const CircuitIntro = () => {
  return (
    <section className='CircuitIntro'>
      <div className='CircuitIntro__container'>
        <div className='CircuitIntro__container-left'>
          <div className='CircuitIntro__container-top'>
            <p>Aventure</p>
            <h1>Explorez les merveilles de djanet avec le circuit TADRAT</h1>
            <p>
              Ce circuit vous emmène à travers des paysages époustouflants, où
              vous découvrirez la culture fascinante des Touaregs. Participez à
              des activités immersives, telles que des concerts de musiciens du
              désert et des visites de villages traditionnels.
            </p>
          </div>
          <div className='CircuitIntro__container-bottom'>
            <div>
              <h2>Lieux</h2>
              <p>
                Visitez les dunes de sable et les oasis, les peintures rupestres
                datant de 10000 ans et pleins d’autres.
              </p>
            </div>
            <div>
              <h2>Activités</h2>
              <p>
                Volley ball, randonnées et immersion culturelle, jeux de
                sociétés, music avec les touaregs, rencontres avec les nomades.
              </p>
            </div>
          </div>
          <div className='CircuitIntro__container-buttons'>
            <Button text='Voir les dates disponible de ce circuit' />
            <Button text='Voir plus de photos' />
          </div>
        </div>
        <div className='CircuitIntro__gallery'>
          <Image
            className='CircuitIntro__top'
            src={'/images/0FC13B24-5FBC-47D1-BDC4-A2F4F74A01CD.jpg'}
            alt=''
            width={240}
            height={120}
          />
          <Image
            className='CircuitIntro__bottomLeft'
            src={'/images/0FC13B24-5FBC-47D1-BDC4-A2F4F74A01CD.jpg'}
            alt=''
            width={120}
            height={120}
          />
          <Image
            className='CircuitIntro__bottomRight'
            src={'/images/0FC13B24-5FBC-47D1-BDC4-A2F4F74A01CD.jpg'}
            alt=''
            width={120}
            height={120}
          />
        </div>
      </div>
    </section>
  );
};

export default CircuitIntro;
