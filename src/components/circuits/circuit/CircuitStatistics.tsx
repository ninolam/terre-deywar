import React from 'react';
import Button from '@/components/common/Button';
import { Circuit } from '@/types/types';

interface CircuitStatisticsProps {
  circuit: Circuit;
}

const CircuitStatistics = ({ circuit }: CircuitStatisticsProps) => {
  const { subtitle, stats } = circuit;
  return (
    <section className='CircuitStatistics'>
      <div className='CircuitStatistics__container'>
        <div className='CircuitStatistics__discover'>
          <p className='CircuitStatistics__discover__label'>{subtitle}</p>
          {stats && <>
            <h1>{stats.title}</h1>
            <p>
              {stats.description}
            </p>
          </>
          }
          <div>
            <Button text='Je réserve' />
          </div>
          <p className='CircuitStatistics__info'>
            *Le montant peut être amené à évoluer en fonction des dates.
          </p>
        </div>
        <div className='CircuitStatistics__stats'>
          {stats && stats.items.map((stat) => (
            <div className='CircuitStatistics__stat' key={stat.title}>
              <h1 className='CircuitStatistics__stat__title'>{stat.title}</h1>
              <p className='CircuitStatistics__stat__text'>{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CircuitStatistics;
