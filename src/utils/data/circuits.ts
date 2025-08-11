import { CalendarClock } from 'lucide-react';
import { ClipboardPen } from 'lucide-react';
import { Plane } from 'lucide-react';

export const circuits = [
  {
    slug: "terre-d'eywar-tadrat",
    title: 'TADRAT ROUGE',
    description: 'Touareg, music, bivouac',
    mainDescription:
      'Ce circuit vous transporte dans l’univers spectaculaire de la Tadrart, avec ses dunes rouges, ses arches naturelles et ses peintures rupestres millénaires. Plongez dans un décor digne d’un autre monde et vivez la magie du désert à chaque pas.',
    image: '/images/section-circuits/image-circuit-2.jpg',
    images: [
      '/images/section-circuits/image-circuit-2.jpg',
      '/images/section-circuits/image-circuit-2.jpg',
      '/images/section-circuits/image-circuit-2.jpg',
    ],

    subtitle: 'Aventure',
    mainTitle:
      "Partez à l'aventure dans les paysages spectaculaires de la Tadrart",
    included: 'Ce qui est inclus :',
    support: {
      label:
        'Prise en charge:\n• Vol aller-retour Alger/Djanet\n• Excursions en 4x4\n• Transferts aéroport\n• Pension complète : petit déjeuner, déjeuner, goûter et dîner\n' +
        'Accompagnement:\n• Cuisinier\n• Guide touristique\n• Musicien\n' +
        'Au programme :\n• Beach Volley\n• Méditation\n• Site historique patrimoine mondial de l’UNESCO\n' +
        'Bivouac:\n• Nous fournissons : matelas, couvertures et tentes',
    },

    locations: {
      title: 'DJANET',
      description:
        "Explorez les paysages lunaires du Tassili n'Ajjer, les oasis cachées, et les peintures rupestres vieilles de plus de 10 000 ans.",
    },
    activities: {
      title: 'ACTIVITÉS',
      description:
        'Volley ball, randonnées désertique et immersion culturelle, jeux de société, musique avec les touaregs, rencontres avec les nomades',
    },
    stats: {
      duration: { value: '8', unit: 'jours', label: 'Durée du circuit' },
      participants: { value: '15', unit: '', label: 'Participants maximum' },
      price: { value: '550', unit: 'euros', label: 'à partir de 550 euros' },
    },
    gallery: {
      title: 'PLUS DE PHOTOS DU CIRCUIT',
      description:
        'Découvrez les paysages et moments inoubliables du circuit TADRAT.',
    },
  },
  {
    slug: "terre-d'eywar-ihrir",
    title: 'IHRIR, ESSENDILENE',
    description: 'Touareg, music, bivouac',
    mainDescription:
      "Ce circuit vous mène jusqu’à l’oasis d'Ihrir, véritable écrin de verdure niché entre falaises et bassins naturels. Découvrez un lieu paisible, entre nature luxuriante et vestiges rupestres, au cœur d’un désert surprenant de vie.",
    image: '/images/section-circuits/image-circuit-1.jpg',
    images: [
      '/images/section-circuits/image-circuit-1.jpg',
      '/images/section-circuits/image-circuit-1.jpg',
      '/images/section-circuits/image-circuit-1.jpg',
    ],

    subtitle: 'Aventure',
    mainTitle:
      "Découvrez l'oasis cachée d'Ihrir, entre falaises et sources naturelles",
    included: 'Ce qui est inclus :',
    support: {
      label:
        'Prise en charge:\n• Vol aller-retour Alger/Djanet\n• Excursions en 4x4\n• Transferts aéroport\n• Pension complète : petit déjeuner, déjeuner, goûter et dîner\n' +
        'Accompagnement:\n• Cuisinier\n• Guide touristique\n• Musicien\n' +
        'Au programme :\n• Randonnées\n• Méditation\n• Visite de l’oasis d’Essendilène et baignade naturelle\n' +
        'Bivouac:\n• Nous fournissons : matelas, couvertures et tentes',
    },

    locations: {
      title: 'IHRIR',
      description:
        'Découvrez un paradis secret : palmeraie luxuriante, bassins naturels, falaises sculptées, et scènes de vie gravées dans la roche.',
    },
    activities: {
      title: 'ACTIVITÉS',
      description:
        'Volley ball, randonnées et immersion culturelle, jeux de société, musique avec les touaregs, rencontres avec les nomades',
    },
    stats: {
      duration: { value: '8', unit: 'jours', label: 'Durée du circuit' },
      participants: { value: '15', unit: '', label: 'Participants maximum' },
      price: { value: '550', unit: 'euros', label: 'à partir de 550 euros' },
    },
    gallery: {
      title: 'PLUS DE PHOTOS DU CIRCUIT',
      description:
        'Découvrez les paysages et moments inoubliables du circuit IHRIR.',
    },
  },
  {
    slug: "terre-d'eywar-tamanrasset",
    title: 'TAMANRASSET',
    description: 'Touareg, music, bivouac',
    mainDescription:
      'Ce circuit vous emmène à Tamanrasset, capitale du Sud, entre tradition touarègue et paysages grandioses du Hoggar. Partez à l’aventure jusqu’à l’Assekrem et vivez des moments forts au rythme des musiques et des légendes du désert.',
    image: '/images/section-circuits/image-circuit-3.jpg',
    images: [
      '/images/section-circuits/image-circuit-3.jpg',
      '/images/section-circuits/image-circuit-3.jpg',
      '/images/section-circuits/image-circuit-3.jpg',
    ],

    subtitle: 'Aventure',
    mainTitle: 'Explorez Tamanrasset et les terres sacrées du Hoggar',
    included: 'Ce qui est inclus :',
    support: {
      label:
        'Prise en charge:\n• Vol aller-retour Alger/Tamanrasset\n• Excursions en 4x4\n• Transferts aéroport\n• Pension complète : petit déjeuner, déjeuner, goûter et dîner\n' +
        'Accompagnement:\n• Cuisinier\n• Guide touristique\n• Musicien\n' +
        'Au programme :\n• Randonnées dans l’Assekrem\n• Visite de l’ermitage du Père de Foucauld\n• Soirées musicales autour du feu\n' +
        'Bivouac:\n• Nous fournissons : matelas, couvertures et tentes',
    },

    locations: {
      title: 'TAMANRASSET',
      description:
        'Partez à la rencontre du Hoggar, admirez le majestueux Assekrem, et plongez dans la culture touarègue au cœur du désert.',
    },
    activities: {
      title: 'ACTIVITÉS',
      description:
        'Volley ball, randonnées et immersion culturelle, jeux de société, musique avec les touaregs, rencontres avec les nomades',
    },
    stats: {
      duration: { value: '8', unit: 'jours', label: 'Durée du circuit' },
      participants: { value: '15', unit: '', label: 'Participants maximum' },
      price: { value: '550', unit: 'euros', label: 'à partir de 550 euros' },
    },
    gallery: {
      title: 'PLUS DE PHOTOS DU CIRCUIT',
      description:
        'Découvrez les paysages et moments inoubliables du circuit TAMANRASSET.',
    },
  },
  {
    slug: "terre-d'eywar-tamanrasset",
    title: 'TEST',
    description: 'Touareg, music, bivouac',
    mainDescription:
      'Ce circuit vous emmène à Tamanrasset, capitale du Sud, entre tradition touarègue et paysages grandioses du Hoggar. Partez à l’aventure jusqu’à l’Assekrem et vivez des moments forts au rythme des musiques et des légendes du désert.',
    image: '/images/section-circuits/image-circuit-3.jpg',
    images: [
      '/images/section-circuits/image-circuit-3.jpg',
      '/images/section-circuits/image-circuit-3.jpg',
      '/images/section-circuits/image-circuit-3.jpg',
    ],

    subtitle: 'Aventure',
    mainTitle: 'Explorez Tamanrasset et les terres sacrées du Hoggar',
    included: 'Ce qui est inclus :',
    support: {
      label:
        'Prise en charge:\n• Vol aller-retour Alger/Tamanrasset\n• Excursions en 4x4\n• Transferts aéroport\n• Pension complète : petit déjeuner, déjeuner, goûter et dîner\n' +
        'Accompagnement:\n• Cuisinier\n• Guide touristique\n• Musicien\n' +
        'Au programme :\n• Randonnées dans l’Assekrem\n• Visite de l’ermitage du Père de Foucauld\n• Soirées musicales autour du feu\n' +
        'Bivouac:\n• Nous fournissons : matelas, couvertures et tentes',
    },

    locations: {
      title: 'TAMANRASSET',
      description:
        'Partez à la rencontre du Hoggar, admirez le majestueux Assekrem, et plongez dans la culture touarègue au cœur du désert.',
    },
    activities: {
      title: 'ACTIVITÉS',
      description:
        'Volley ball, randonnées et immersion culturelle, jeux de société, musique avec les touaregs, rencontres avec les nomades',
    },
    stats: {
      duration: { value: '8', unit: 'jours', label: 'Durée du circuit' },
      participants: { value: '15', unit: '', label: 'Participants maximum' },
      price: { value: '550', unit: 'euros', label: 'à partir de 550 euros' },
    },
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
