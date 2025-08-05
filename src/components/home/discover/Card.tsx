import Image from 'next/image';
import React from 'react';

const Card = ({
  title,
  image,
  text,
}: {
  title: string;
  image: string;
  text: string;
}) => {
  return (
    <div key={title} className='Card'>
      <h1 className='Card__title'>{title}</h1>
      <Image
        className='Card__image'
        src={image}
        alt='image-section-discover'
        width={350}
        height={300}
      />
      <p  className='Card__text'>{text}</p>
    </div>
  );
};

export default Card;
