'use client';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/scss';
import 'swiper/scss/pagination';
import Card from '@/components/home/discover/Card';

interface SliderProps {
  items: (string | { title: string, text: string, image: string })[];
  context: string;
  className?: string;
  title?: string;
  description?: string;
  classNameModifier?: string;
}

const Slider: React.FC<SliderProps> = ({ items, context, classNameModifier = '' }) => {
  const swiperRef = useRef<any>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = (context: string, item: string | { title: string, text: string, image: string }) => {
    switch (context) {
    case 'image':
      return <div className="Slider__image" style={{ backgroundImage: `url(${item})` }} />;
    case 'discoverCard':
      if (typeof item === 'object') {
        return <Card title={item.title} image={item.image} text={item.text} />;
      }
      return null;
    default:
      return null;
    }
  };

  return (
    <section className={`Slider ${classNameModifier ? `Slider--${classNameModifier}` : ''}`}>
      <div className='Slider__swiper-container'>
        <Swiper
          ref={swiperRef}
          onSlideChange={(swiper) => {
            setActiveSlide(swiper.realIndex);
          }}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            1480: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          loop={true}
          watchSlidesProgress={true}
          className="Slider__swiper"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index} className="Slider__slide">
              {renderItem(context, item)}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="Slider__navigation">
          <button
            className="Slider__navigation__arrow Slider__navigation__arrow--prev"
            onClick={() => swiperRef.current?.slidePrev()}
            type="button"
            aria-label="Previous image"
          >
            <ChevronLeft />
          </button>
          <button
            className="Slider__navigation__arrow Slider__navigation__arrow--next"
            onClick={() => swiperRef.current?.slideNext()}
            type="button"
            aria-label="Next image"
          >
            <ChevronRight />
          </button>
        </div>
        <div className="Slider__pagination">
          {items.map((item, index) => <div onClick={() => swiperRef.current?.slideTo(index)} className={`Slider__pagination__dot ${activeSlide === index ? 'Slider__pagination__dot--active' : ''}`} key={typeof (item) === 'object' ? item.title : item} />)}
        </div>
      </div>
    </section>
  );
};

export default Slider;