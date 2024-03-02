import { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { ItemListProduct } from '@/types/listProduts';

import styles from './styles.module.css';

interface ListProductsCardProps {
  product: ItemListProduct;
}

function ListProductsCard({ product }: ListProductsCardProps) {
  return (
    <Link className={styles.listProductCardLink} href={`/items/${product?.id}`}>
      <article className={styles.listProductCardWrapper}>
        <Image
          className={styles.listProductCardImage}
          src={product?.picture}
          width={180}
          height={180}
          alt={`Imagem do produto: ${product?.title}`}
        />
        <div className={styles.listProductCardContent}>
          <header className={styles.listProductCardHeader}>
            <p className={styles.listProductCardPrice}>
              {product?.price?.amount?.toLocaleString('es-AR', {
                style: 'currency',
                currency: product?.price?.currency,
                minimumFractionDigits: 0,
              })}
            </p>
            <p className={styles.listProductCardCity}>
              {product?.price?.amount}
            </p>
          </header>
          <h2 className={styles.listProductCardTitle}>{product?.title}</h2>
        </div>
      </article>
    </Link>
  );
}

export default memo(ListProductsCard);
