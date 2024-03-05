import React, { memo } from 'react';
import Image from 'next/image';

import styles from './styles.module.css';

interface ProductDetailsImageProps {
  picture: string | undefined;
  title: string | undefined;
}

function ProductDetailsImage({ picture, title }: ProductDetailsImageProps) {
  return (
    <div className={styles.productDetailsImageWrapper}>
      <Image
        className={styles.productDetailsImage}
        src={`${picture}`}
        alt={`Imagem do produto ${title}`}
        width={680}
        height={300}
      />
    </div>
  );
}

export default memo(ProductDetailsImage);
