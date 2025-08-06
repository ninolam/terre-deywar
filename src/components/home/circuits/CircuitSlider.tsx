'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';
import 'swiper/scss/effect-coverflow';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import CircuitCard from '@/components/common/cards/CircuitCard';
import Button from '@/components/common/Button';

interface Card {
  title: string;
  description: string;
  image: string;
}

const CircuitSlider = ({ cards }: { cards: Card[] }) => {
  // Calculate the middle slide index
  const initialSlide = Math.floor(cards.length / 2);
  const swiperRef = useRef<any>(null);
  const [activeSlide, setActiveSlide] = useState(initialSlide);
  return (
    <div className='CircuitSlider'>
      <Swiper
        className='CircuitSlider__swiper'
        modules={[Autoplay, Navigation, EffectCoverflow]}
        ref={swiperRef}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          const index = swiper.isEnd ? cards.length - 1 : swiper.activeIndex;
          setActiveSlide(index);
        }}

        effect='coverflow'
        coverflowEffect={{
          rotate: 0,
          stretch: 10,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          1024: {
            coverflowEffect: {
              rotate: 0,
              stretch: 10,
              depth: 40,
              modifier: 1.5,
              slideShadows: true,
            },
          },
          768: {
            coverflowEffect: {
              rotate: 0,
              stretch: 20,
              depth: 80,
              modifier: 1.5,
              slideShadows: true,
            },
          },
        }}
        slidesPerView={3}
        centeredSlides
        initialSlide={initialSlide}
        style={{
          height: '520px',
        }}
      >
        {cards.map((card, index) => {
          return (
            <SwiperSlide key={card.title} onClick={() => swiperRef.current.slideTo(index)} >
              <CircuitCard card={card} withButton={index === activeSlide} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className='CircuitSlider__navigation'>
        <Button text='Découvrir les différents circuits' />
        <div className='CircuitSlider__navigation__arrows'>
          <ArrowLeft className='CircuitSlider__navigation__arrows-prev' onClick={() => swiperRef.current.slidePrev()} />
          <ArrowRight className='CircuitSlider__navigation__arrows-next' onClick={() => swiperRef.current.slideNext()} />
        </div>
      </div>
    </div >
  );
};

export default CircuitSlider;