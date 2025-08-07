import { CalendarClock } from 'lucide-react';
import { ClipboardPen } from 'lucide-react';
import { Plane } from 'lucide-react';

export const circuits = [
  {
    slug: "terre-d'eywar-tadrat",
    title: 'TADRAT ROUGE',
    subtitle: 'Aventure',
    description: 'Touareg, music, bivouac',
    mainTitle: 'EXPLOREZ LES MERVEILLES DE DJANET AVEC LE CIRCUIT TADRAT',
    mainDescription:
      'Ce circuit vous emmène à travers des paysages époustouflants, où vous découvrirez la culture fascinante des Touaregs. Participez à des activités immersives, belles que des concerts de musiques du désert et des visites de villages traditionnels.',
    image: '/images/section-circuits/image-circuit-2.jpg',
    locations: {
      title: 'LIEUX',
      description:
        "Visitez les dunes de sable et les oasis, les peintures rupestres datant de 10000 ans et plein d'autres",
    },
    activities: {
      title: 'ACTIVITÉS',
      description:
        'Volley ball, randonnées et immersion culturelle, jeux de société, musique avec les touaregs, rencontres avec les nomades',
    },
    stats: {
      duration: { value: '8', unit: 'jours', label: 'Durée du circuit' },
      distance: { value: '150', unit: 'km', label: 'Distance parcourue' },
      participants: { value: '12', unit: '', label: 'Participants maximum' },
      price: { value: '450', unit: 'euros', label: 'à partir de 450 euros' },
    },
    circuitDescription:
      'Notre circuit offre une expérience inoubliable à travers le désert algérien. Avec des paysages à couper le souffle et une immersion dans la culture touareg, chaque participant vit une aventure unique.',
    gallery: {
      title: 'PLUS DE PHOTOS DU CIRCUIT',
      description:
        'Découvrez les paysages et moments inoubliables du circuit TADRAT.',
    },
  },
  {
    slug: "terre-d'eywar-ihrir",
    title: 'IHRIR, ESSENDILENE Bivouac',
    subtitle: 'Aventure',
    description: 'Touareg, music, bivouac',
    mainTitle: 'EXPLOREZ LES MERVEILLES DE DJANET AVEC LE CIRCUIT IHRIR',
    mainDescription:
      'Ce circuit vous emmène à travers des paysages époustouflants, où vous découvrirez la culture fascinante des Touaregs. Participez à des activités immersives, belles que des concerts de musiques du désert et des visites de villages traditionnels.',
    image: '/images/section-circuits/image-circuit-1.jpg',
    locations: {
      title: 'LIEUX',
      description:
        "Visitez les dunes de sable et les oasis, les peintures rupestres datant de 10000 ans et plein d'autres",
    },
    activities: {
      title: 'ACTIVITÉS',
      description:
        'Volley ball, randonnées et immersion culturelle, jeux de société, musique avec les touaregs, rencontres avec les nomades',
    },
    stats: {
      duration: { value: '10', unit: 'jours', label: 'Durée du circuit' },
      distance: { value: '200', unit: 'km', label: 'Distance parcourue' },
      participants: { value: '15', unit: '', label: 'Participants maximum' },
      price: { value: '500', unit: 'euros', label: 'à partir de 500 euros' },
    },
    circuitDescription:
      'Notre circuit offre une expérience inoubliable à travers le désert algérien. Avec des paysages à couper le souffle et une immersion dans la culture touareg, chaque participant vit une aventure unique.',
    gallery: {
      title: 'PLUS DE PHOTOS DU CIRCUIT',
      description:
        'Découvrez les paysages et moments inoubliables du circuit IHRIR.',
    },
  },
  {
    slug: "terre-d'eywar-tamanrasset",
    title: 'TAMANRASSET',
    subtitle: 'Aventure',
    description: 'Touareg, music, bivouac',
    mainTitle: 'EXPLOREZ LES MERVEILLES DE DJANET AVEC LE CIRCUIT TAMANRASSET',
    mainDescription:
      'Ce circuit vous emmène à travers des paysages époustouflants, où vous découvrirez la culture fascinante des Touaregs. Participez à des activités immersives, belles que des concerts de musiques du désert et des visites de villages traditionnels.',
    image: '/images/section-circuits/image-circuit-3.jpg',
    locations: {
      title: 'LIEUX',
      description:
        "Visitez les dunes de sable et les oasis, les peintures rupestres datant de 10000 ans et plein d'autres",
    },
    activities: {
      title: 'ACTIVITÉS',
      description:
        'Volley ball, randonnées et immersion culturelle, jeux de société, musique avec les touaregs, rencontres avec les nomades',
    },
    stats: {
      duration: { value: '6', unit: 'jours', label: 'Durée du circuit' },
      distance: { value: '120', unit: 'km', label: 'Distance parcourue' },
      participants: { value: '10', unit: '', label: 'Participants maximum' },
      price: { value: '350', unit: 'euros', label: 'à partir de 350 euros' },
    },
    circuitDescription:
      'Notre circuit offre une expérience inoubliable à travers le désert algérien. Avec des paysages à couper le souffle et une immersion dans la culture touareg, chaque participant vit une aventure unique.',
    gallery: {
      title: 'PLUS DE PHOTOS DU CIRCUIT',
      description:
        'Découvrez les paysages et moments inoubliables du circuit TAMANRASSET.',
    },
  },
  {
    title: 'TADRAT ROUGE 1',
    description: 'Touareg, music, bivouac',
    longDescription: 'Ce circuit vous permettra de découvrir les merveilles du désert algérien. Vous pourrez profiter de la beauté du désert, des paysages et des activités que nous vous proposons.',
    image: '/images/section-circuits/image-circuit-2.jpg',
  },
  {
    title: 'IHRIR, ESSENDILENE Bivouac 1',
    description: 'Touareg, music, bivouac',
    longDescription: 'Ce circuit vous permettra de découvrir les merveilles du désert algérien. Vous pourrez profiter de la beauté du désert, des paysages et des activités que nous vous proposons.',
    image: '/images/section-circuits/image-circuit-1.jpg',
  },
  {
    title: 'Tamanrasset 1',
    description: 'Touareg, music, bivouac',
    longDescription: 'Ce circuit vous permettra de découvrir les merveilles du désert algérien. Vous pourrez profiter de la beauté du désert, des paysages et des activités que nous vous proposons.',
    image: '/images/section-circuits/image-circuit-3.jpg',
  },
];

export const iconMap = {
  CalendarClock: CalendarClock,
  ClipboardPen: ClipboardPen,
  Plane: Plane,
};

export const reservations = [
  {
    icon: 'CalendarClock',
    title: 'Étapes de réservation de votre circuit.',
    text: 'Choisissez votre circuit et vérifiez les disponibilités. Je vous contacterai rapidement afin de vous fournir les détails.',
  },
  {
    icon: 'ClipboardPen',
    title: 'Préparatifs avant votre départ.',
    text: "Assurez-vous d'avoir tous les documents nécessaires.",
  },
  {
    icon: 'Plane',
    title: 'Profiter de votre expérience',
    text: 'Profitez de votre expérience, notre équipe organise tout, les repas, les sites, le transport.',
  },
];
