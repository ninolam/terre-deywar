'use client';
import React, { useState } from 'react';
import Button from '../common/Button';
import { circuits } from '@/utils/data/circuits';
import Overlay from '../common/Overlay';
import IntroSlider from './IntroSlider';

const Intro = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const indexToShow = activeSlide - 1 < 0 ? circuits.length - 1 : activeSlide - 1;
  return (
    <section className='CircuitsIntro' style={{ backgroundImage: `url(${circuits[indexToShow].image})` }}>
      <Overlay className='dark' />
      <div className='CircuitsIntro__container'>
        <div className='CircuitsIntro__infos'>
          <h1 className='CircuitsIntro__title'>{circuits[indexToShow].title}</h1>
          <p className='CircuitsIntro__text'>{circuits[indexToShow].longDescription}</p>
          <div className='CircuitsIntro__buttons'>
            <Button text='Découvrir le détail de ce circuit' classNameModifier='white20' />
            <Button text='Réserver ce circuit' classNameModifier='white20' />
          </div>
        </div>
        <div className='CircuitsIntro__separator' />
        <div className='CircuitsIntroSlider'>
          <IntroSlider circuits={circuits} setActiveSlide={setActiveSlide} activeSlide={activeSlide} />
        </div>
      </div>
    </section>
  );
};

export default Intro;