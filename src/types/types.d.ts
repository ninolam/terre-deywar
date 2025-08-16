export type Circuit = {
  slug: string;
  title: string;
  description: string;
  mainDescription?: string;
  image: string;
  images?: string[];
  subtitle?: string;
  mainTitle?: string;
  included?: string;
  support?: {
    label: string;
  };
  locations?: {
    title: string;
    description: string;
  };
  activities?: {
    title: string;
    description: string;
  };
  stats?: {
    title: string;
    description: string;
    items: { title: string; text: string; }[];
  };
  gallery?: {
    title: string;
    description: string;
  };
};
