import { memo } from 'react';

import { ListProducts } from '@/types/listProduts';
import ListProductsCard from '@/Components/ListProductsCard';

import styles from './styles.module.css';

interface ListProductsProps {
  listProducts: ListProducts;
}

function ListProducts({ listProducts }: ListProductsProps) {
  if (listProducts?.length < 1) {
    return (
      <section className={styles.listProductsEmpty}>
        <h1 className={styles.listProductsEmptyTitle}>
          No se encontraron productos. Por favor haz una búsqueda.
        </h1>
      </section>
    );
  }

  return (
    <section className={styles.listProductsWrapper}>
      {!!listProducts?.length &&
        listProducts?.map((product, index) => (
          <>
            <ListProductsCard
              key={`${product?.id}-${product?.title}`}
              product={product}
            />

            {index < listProducts.length - 1 && (
              <hr className={styles.listProductsDivider} />
            )}
          </>
        ))}
    </section>
  );
}

export default memo(ListProducts);
