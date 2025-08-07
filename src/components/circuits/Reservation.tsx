import React from 'react';
import Button from '@/components/common/Button';
import { reservations, iconMap } from '@/utils/data/circuits';

const Reservation = () => {
  return (
    <section className='Reservation'>
      <div className='Reservation__container'>
        <div className='Reservation__presentation'>
          <p>Réservez</p>
          <h1>Comment réserver votre circuit avec nous</h1>
          <p>
            Réserver un circuit avec Terre d&apos;Eywar est simple et rapide.
            Suivez notre processus en quelques étapes pour une expérience
            inoubliable.
          </p>
        </div>
        <div className='Reservation__items'>
          {reservations.map((reservation) => {
            const Icons = iconMap[reservation.icon as keyof typeof iconMap];
            return (
              <div className='Reservation__item' key={reservation.title}>
                <Icons
                  className='Reservation__icon'
                  strokeWidth={1}
                  width={150}
                  height={150}
                />
                <h1 className='Reservation__title'>{reservation.title}</h1>
                <p className='Reservation__text'>{reservation.text}</p>
              </div>
            );
          })}
        </div>
        <div className='Reservation__button'>
          <Button text='Je réserve une date !' />
        </div>
      </div>
    </section>
  );
};

export default Reservation;
