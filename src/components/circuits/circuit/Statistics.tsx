import React from 'react';
import Button from '@/components/common/Button';
import { dataStatistics } from '@/utils/data/circuits';

const CircuitStatistics = () => {
  return (
    <section className='CircuitStatistics'>
      <div className='CircuitStatistics__container'>
        <div className='CircuitStatistics__container-left'>
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
          <p className='CircuitStatistics__container-information'>
            *Le montant peut être amené à évoluer en fonction des dates.
          </p>
        </div>
        <div className='CircuitStatistics__container-right'>
          {dataStatistics.map((stats) => (
            <div key={stats.title}>
              <h1>{stats.title}</h1>
              <p>{stats.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CircuitStatistics;
