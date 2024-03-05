import { AuthorProps } from './author';
import { PriceProps } from './price';

export interface ProductItemProps {
  id: string;
  title: string;
  price: PriceProps;
  picture: string;
  condition: string;
  freeShipping: boolean;
  soldQuantity?: number;
  description?: string;
  city?: string;
}

export interface ProductProps {
  author: AuthorProps;
  categories: string[];
  item: ProductItemProps;
}
