export interface PriceItem {
  label: string;
  price: number | null;
  description?: string;
}

export interface OptionItem {
  name: string;
  price?: number | null;
  description?: string;
}

export interface EquipmentItem {
  name: string;
  price: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceSeo {
  title: string;
  description: string;
}

export interface SeoContent {
  title: string;
  paragraphs: string[];
}

export interface Service {
  id: string;
  title: string;
  category: string;

  heroImage: string;
  cardImage: string;

  startingPrice: number;

  shortDescription: string;
  description: string;

  included: string[];

  pricing: PriceItem[];

  options: OptionItem[];

  equipments?: EquipmentItem[];

  gallery: string[];

  faq: FAQItem[];

  seo?: ServiceSeo;

  seoContent?: SeoContent;
}