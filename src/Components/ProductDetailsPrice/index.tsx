import React, { memo } from 'react';

import { priceParser } from '@/utils/helpers';
import { PriceProps } from '@/types/price';

import styles from './styles.module.css';

interface ProductDetailsPriceProps {
  price: PriceProps | undefined;
}

function ProductDetailsPrice({ price }: ProductDetailsPriceProps) {
  return (
    <article className={styles.productDetailsPriceWrapper}>
      <h2 className={styles.productDetailsPriceTitle}>{priceParser(price)}</h2>

      <button className={styles.productDetailsButton} type="button">
        Comprar
      </button>
    </article>
  );
}

export default memo(ProductDetailsPrice);
