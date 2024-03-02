import { AuthorProps } from './author';
import { ProductItemProps } from './product';

export type ListProducts = ItemListProduct[];

export type ItemListProduct = Omit<
  ProductItemProps,
  'soldQuantity' | 'description'
>;

export interface ProductsProps {
  author: AuthorProps;
  items: ListProducts;
}
