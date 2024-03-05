import React, { memo, useMemo } from 'react';

import { pluralParser } from '@/utils/helpers';

import styles from './styles.module.css';
import { changeNumber } from './utils';

interface ProductDetailsTitleProps {
  title: string | undefined;
  condition: string | undefined;
  soldQuantity: number | undefined;
}

function ProductDetailsTitle({
  title,
  condition,
  soldQuantity,
}: ProductDetailsTitleProps) {
  const renderSoldQuantity = useMemo(
    () => pluralParser(changeNumber(soldQuantity), 'vendido'),
    [soldQuantity],
  );

  return (
    <article className={styles.productDetailsTitleWrapper}>
      <p className={styles.productDetailsTitleParagraph}>
        <span>{condition}</span>
        <span>-</span>
        <span>{renderSoldQuantity}</span>
      </p>

      <h1 className={styles.productDetailsTitleH1}>{title}</h1>
    </article>
  );
}

export default memo(ProductDetailsTitle);
