import { Metadata } from 'next';
import { camelizeKeys } from 'humps';

import { ListProductsPageProps } from '@/types/pages/listProductsPage';
import styles from '@/styles/listProductsPage.module.css';
import ListProducts from '@/Components/Sections/ListProducts';
import Breadcrumb from '@/Components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Mercardo Livre',
  description: 'Mercardo Livre | O maior portal de vendas do brasil.',
};

export default async function Page({
  searchParams,
}: {
  searchParams: { [x: string]: string };
}) {
  const responseProduct = await fetch(
    `${process.env.API_ENDPOINT}/items?search=${searchParams.search}`,
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
  const productCamelized = camelizeKeys(
    dataProduct,
  ) as unknown as ListProductsPageProps;
  const listProducts = productCamelized?.results?.items;

  return (
    <main className={styles.main}>
      <Breadcrumb />
      <ListProducts listProducts={listProducts} />
    </main>
  );
}
