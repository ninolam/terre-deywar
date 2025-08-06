'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Gallery = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const generateImageNames = () => {
    const imageNames = [];
    // Ajustez ce nombre selon le nombre d'images dans votre dossier
    for (let i = 1; i <= 44; i++) {
      imageNames.push(`image-SomePictures${i}.jpg`);
    }
    return imageNames;
  };

  const imageNames = generateImageNames();

  // Fonction pour grouper les images par 3
  const groupImagesByThree = (images: string[]) => {
    const groups = [];
    for (let i = 0; i < images.length; i += 3) {
      groups.push(images.slice(i, i + 3));
    }
    return groups;
  };

  const imageGroups = groupImagesByThree(imageNames);

  useEffect(() => {
    setTimeout(() => {
      setRandomNumber(Math.floor(Math.random() * imageGroups.length));
    }, 2000);
  }, [randomNumber, imageGroups.length]);

  return (
    <section className='Gallery'>
      <div className='Gallery__container'>
        <h1 className='Gallery__title'>Quelques images...</h1>
        <p className='Gallery__text'>
          Mais comme le grand maitre SIDI il a dit le désert ça se raconte pas
          ça se VIT...
        </p>
        <div className='Gallery__pictures'>
          {imageGroups[randomNumber].map((imageName, imageIndex) => (
            <Image
              className={`Gallery__image Gallery__image--${imageIndex + 1}`}
              key={imageIndex}
              src={`/images/section-gallery/${imageName}`}
              alt={`Some Pictures ${imageIndex + 1}`}
              width={350}
              height={200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
