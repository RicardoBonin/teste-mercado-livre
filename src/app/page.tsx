import { Metadata } from 'next';
import { camelizeKeys } from 'humps';

import styles from '@/styles/page.module.css';

export const metadata: Metadata = {
  title: 'Mercardo Livre',
  description: 'Mercardo Livre | O maior portal de vendas do brasil.',
};

export default async function Page() {
  const responseListProducts = await fetch(
    `${process.env.API_ENDPOINT}/sites/MLA/search?q=:query`,
    {
      cache: 'no-store',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  );

  if (!responseListProducts.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const dataListProducts = await responseListProducts?.json();
  const listProductCamelized = camelizeKeys(dataListProducts) as unknown;
  console.log('developmentsCamelized :>> ', listProductCamelized);

  return (
    <main className={styles.main}>
      <h1>Olá mundo</h1>
    </main>
  );
}
