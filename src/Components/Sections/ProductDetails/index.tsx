import { memo } from 'react';

import { ProductItemProps } from '@/types/product';
import ProductDetailsTitle from '@/Components/ProductDetailsTitle';
import ProductDetailsPrice from '@/Components/ProductDetailsPrice';
import ProductDetailsImage from '@/Components/ProductDetailsImage';

import styles from './styles.module.css';

interface ProductDetailsProps {
  product: ProductItemProps;
}

function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <section className={styles.productDetailsWrapper}>
      <ProductDetailsTitle
        title={product?.title}
        condition={product?.condition}
        soldQuantity={product?.soldQuantity}
      />
      <ProductDetailsImage title={product?.title} picture={product?.picture} />
      <ProductDetailsPrice price={product?.price} />
    </section>
  );
}

export default memo(ProductDetails);
