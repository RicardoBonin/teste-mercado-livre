import { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { ItemListProduct } from '@/types/listProduts';
import { priceParser } from '@/utils/helpers';

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
              {priceParser(product?.price)}

              {product?.freeShipping && (
                <span className={styles.listProductCardShippingSpan}>
                  <Image
                    src="/assets/ic_shipping.png"
                    width={15}
                    height={15}
                    alt={`Imagem do produto: ${product?.title}`}
                  />
                </span>
              )}
            </p>

            {product?.city && (
              <p className={styles.listProductCardCity}>{product?.city}</p>
            )}
          </header>

          <h2 className={styles.listProductCardTitle}>{product?.title}</h2>
        </div>
      </article>
    </Link>
  );
}

export default memo(ListProductsCard);
