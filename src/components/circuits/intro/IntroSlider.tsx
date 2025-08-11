'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CircuitCard from '../../common/cards/CircuitCard';
import 'swiper/scss';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const IntroSlider = ({
  circuits,
  setActiveSlide,
  activeSlide,
}: {
  circuits: any[];
  setActiveSlide: (_index: number) => void;
  activeSlide: number;
}) => {
  const swiperRef = useRef<any>(null);
  const indexToShow =
    activeSlide - 1 < 0 ? circuits.length - 1 : activeSlide - 1;

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        ref={swiperRef}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.realIndex);
        }}
        watchSlidesProgress={true}
        loop={true}
        initialSlide={1}
        className='CircuitsIntroSlider__swiper'
        breakpoints={{
          360: {
            slidesPerView: 2,
          },
          580: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 3,
          },
        }}
      >
        {circuits.map((circuit, index) => {
          return (
            <SwiperSlide key={circuit.title} style={{ cursor: 'pointer' }}>
              <CircuitCard circuit={circuit} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className='CircuitsIntroSlider__navigation'>
        <div className='CircuitsIntroSlider__navigation__arrows'>
          <ArrowLeft onClick={() => swiperRef.current?.slidePrev()} />
          <ArrowRight onClick={() => swiperRef.current?.slideNext()} />
        </div>
        <div className='CircuitsIntroSlider__navigation__separator' />
        <h2 className='CircuitsIntroSlider__navigation__title'>
          0{[indexToShow + 1]}
        </h2>
      </div>
    </>
  );
};

export default IntroSlider;
