import { Metadata } from 'next';
import { camelizeKeys } from 'humps';

import styles from '@/styles/page.module.css';
import { ProductProps } from '@/types/product';

export const metadata: Metadata = {
  title: 'Mercado Livre',
  description: 'Mercado Livre | O maior portal de vendas da America latina.',
};

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  console.log(id);
  const responseProduct = await fetch(
    `${process.env.API_ENDPOINT}/items/${id}`,
    {
      cache: 'no-store',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  );

  if (!responseProduct.ok) {
    throw new Error('Failed to fetch data');
  }

  const dataProduct = await responseProduct?.json();
  const productCamelized = camelizeKeys(dataProduct) as unknown as ProductProps;
  console.log('developmentsCamelized :>> ', productCamelized);

  return (
    <main className={styles.main}>
      <h1>Produto</h1>
      <p>{productCamelized?.title}</p>
    </main>
  );
}
