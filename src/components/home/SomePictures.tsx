import React from 'react';

const SomePictures = () => {
  // // Générer automatiquement la liste des images basée sur le dossier
  // const generateImageNames = () => {
  //   const imageNames = [];
  //   // Ajustez ce nombre selon le nombre d'images dans votre dossier
  //   for (let i = 1; i <= 26; i++) {
  //     imageNames.push(`image-SomePictures${i}.jpg`);
  //   }
  //   return imageNames;
  // };

  // const imageNames = generateImageNames();

  // // Fonction pour grouper les images par 3
  // const groupImagesByThree = (images: string[]) => {
  //   const groups = [];
  //   for (let i = 0; i < images.length; i += 3) {
  //     groups.push(images.slice(i, i + 3));
  //   }
  //   return groups;
  // };

  // const imageGroups = groupImagesByThree(imageNames);

  return (
    <section>
      <div>
        <h1>Quelques images...</h1>
        <p>
          Mais comme le grand maitre SIDI il a dit le désert ça se raconte pas
          ça se VIT...
        </p>
      </div>
      <div>
        {/* {imageGroups.map((group, groupIndex) => (
          <div
            key={groupIndex}
            style={{ display: 'flex', marginBottom: '20px', gap: '10px' }}
          >
            {group.map((imageName, imageIndex) => (
              <img
                key={imageIndex}
                src={`/images/section-somePictures/${imageName}`}
                alt={`Some Pictures ${groupIndex * 3 + imageIndex + 1}`}
                style={{
                  width: '200px',
                  height: '150px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
            // ))}
          </div>
        ))} */}
      </div>
    </section>
  );
};

export default SomePictures;
