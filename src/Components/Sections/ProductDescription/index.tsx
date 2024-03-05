import { memo } from 'react';

import { ProductItemProps } from '@/types/product';

import styles from './styles.module.css';

interface ProductDescriptionProps {
  product: ProductItemProps;
}

function ProductDescription({ product }: ProductDescriptionProps) {
  return (
    <section className={styles.productDescriptionWrapper}>
      <h2 className={styles.productDescriptionTitle}>
        Descripción del producto
      </h2>

      <p className={styles.productDescriptionParagraph}>
        {product?.description}
      </p>
    </section>
  );
}

export default memo(ProductDescription);
