import { AuthorProps } from './author';
import { ProductItemProps } from './product';

export type ListProductsType = ItemListProduct[];

export type ItemListProduct = Omit<
  ProductItemProps,
  'soldQuantity' | 'description'
>;

export interface ProductsProps {
  author: AuthorProps;
  categories: string[];
  items: ListProductsType;
}
