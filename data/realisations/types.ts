export interface Realisation {
  id: string;

  title: string;

  location: string;
  department: string;

  date: string;

  coverImage: string;
  images: string[];

  shortDescription: string;
  description: string;

  services: {
    id: string;
    label: string;
  }[];

  seo: {
    title: string;
    description: string;
  };
}