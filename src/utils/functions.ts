const generateImageNames = () => {
  const imageNames = [];
  // Ajustez ce nombre selon le nombre d'images dans votre dossier
  for (let i = 1; i <= 44; i++) {
    imageNames.push(`image-SomePictures${i}.jpg`);
  }
  return imageNames;
};

// Fonction pour grouper les images par 3
export const groupImagesByThree = () => {
  const images = generateImageNames();
  const groups = [];
  for (let i = 0; i < images.length; i += 3) {
    groups.push(images.slice(i, i + 3));
  }
  return groups;
};

