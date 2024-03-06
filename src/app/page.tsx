import { Metadata } from 'next';

import styles from '@/styles/page.module.css';

export const metadata: Metadata = {
  title: 'Mercado Libre Argentina - Envíos Gratis en el día',
  description:
    'Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles.',
};

export default async function Page() {
  return <main data-testid="main" className={styles.main} />;
}
