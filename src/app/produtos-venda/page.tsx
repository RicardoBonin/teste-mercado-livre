import { Metadata } from 'next';
import { camelizeKeys } from 'humps';
import Link from 'next/link';

import styles from '@/styles/page.module.css';
import { objectToQueryString } from '@/utils/helpers';
import { ProductProps } from '@/types/product';

export const metadata: Metadata = {
  title: 'Mercardo Livre',
  description: 'Mercardo Livre | O maior portal de vendas do brasil.',
};

export default async function Page({
  searchParams,
}: {
  searchParams: { [x: string]: string };
}) {
  const parseToQueryString = objectToQueryString(searchParams);
  console.log(parseToQueryString);
  const responseProduct = await fetch(
    `${process.env.API_ENDPOINT}/sites/MLA/search?q=${parseToQueryString}`,
    {
      cache: 'no-store',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  );

  if (!responseProduct.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const dataProduct = await responseProduct?.json();
  const productCamelized = camelizeKeys(dataProduct) as unknown as {
    results: ProductProps[];
  };
  console.log('developmentsCamelized :>> ', productCamelized);

  return (
    <main className={styles.main}>
      <h1>Produto</h1>

      <div>
        {productCamelized?.results?.map((product) => (
          <div key={product?.id}>
            <p>{product?.title}</p>
            {product?.id && (
              <Link href={`/produto-venda/${product?.id}`}>Comprar</Link>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
