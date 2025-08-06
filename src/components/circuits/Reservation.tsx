import React from 'react';
import Button from '@/components/common/Button';
import { CalendarClock } from 'lucide-react';
import { ClipboardPen } from 'lucide-react';
import { Plane } from 'lucide-react';

const Reservation = () => {
  return (
    <section className='Reservation'>
      <div className='Reservation__container'>
        <div className='Reservation__presentation'>
          <p className='Reservation__text'>Réservez</p>
          <h1 className='Reservation__title'>
            Comment réserver votre circuit avec nous
          </h1>
          <p className='Reservation__text'>
            Réserver un circuit avec Terre d&apos;Eywar est simple et rapide.
            Suivez notre processus en quelques étapes pour une expérience
            inoubliable.
          </p>{' '}
        </div>
        <div className='Reservation__items'>
          <div className='Reservation__item'>
            <CalendarClock className='Reservation__icon' />
            <h1 className='Reservation__title'>
              Étapes de réservation de votre circuit
            </h1>
            <p className='Reservation__text'>
              Choisissez votre circuit et vérifiez les disponibilités. Je vous
              contacterai rapidement afin de vous fournir les détails.
            </p>
          </div>
          <div className='Reservation__item'>
            <ClipboardPen className='Reservation__icon' />
            <h1 className='Reservation__title'>
              Préparatifs avant votre départ
            </h1>
            <p className='Reservation__text'>
              Assurez-vous d&apos;avoir tous les documents nécessaires.
            </p>
          </div>
          <div className='Reservation__item'>
            <Plane className='Reservation__icon' />
            <h1 className='Reservation__title'>Profiter de votre expérience</h1>
            <p className='Reservation__text'>
              Profitez de votre expérience, notre équipe organise tout, les
              repas, les sites, le transport,
            </p>
          </div>
        </div>
        <div className='Reservation__button'>
          <Button text='Je réserve une date !' classNameModifier='whiteSand' />
        </div>
      </div>
    </section>
  );
};

export default Reservation;
