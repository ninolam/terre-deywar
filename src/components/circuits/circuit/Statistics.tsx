import React from 'react';
import Button from '@/components/common/Button';

const Statistics = () => {
  return (
    <section className='Statistics-circuit'>
      <div className='Statistics-circuit__container'>
        <div className='Statistics-circuit__container-left'>
          <p>Aventure</p>
          <h1>Découvrez les chiffres clés de notre circuit</h1>
          <p>
            Notre circuit offre une expérience inoubliable à travers le désert
            algérien. Avec des paysages à couper le souffle et une immersion
            dans la culture touareg, chaque participant vit une aventure unique.
          </p>
          <div>
            <Button text='Je réserve' />
          </div>
          <p className='Statistics-circuit__container-information'>
            *Le montant peut être amené à évoluer en fonction des dates.
          </p>
        </div>
        <div className='Statistics-circuit__container-right'>
          <div>
            <h1>15</h1>
            <p>15 places disponible</p>
          </div>
          <div>
            <h1>10</h1>
            <p>Durée du circuit : 10 jours</p>
          </div>
          <div>
            <h1>550</h1>
            <p>Tarif : 550, 00 €*</p>
          </div>
          <div>
            <h1>20</h1>
            <p>Distance parcourus : 20 Km</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
