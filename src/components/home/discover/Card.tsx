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
    <div key={title}>
      <h1>{title}</h1>
      <Image
        src={image}
        alt='image-section-discover'
        width={120}
        height={120}
      />
      <p>{text}</p>
    </div>
  );
};

export default Card;
