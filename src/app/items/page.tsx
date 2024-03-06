import { Metadata } from 'next';
import { camelizeKeys } from 'humps';

import { ListProductsPageProps } from '@/types/pages/listProductsPage';
import ListProducts from '@/Components/Sections/ListProducts';
import Main from '@/Components/Main';
import Breadcrumb from '@/Components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Mercado Libre Argentina - Envíos Gratis en el día',
  description:
    'Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles.',
};

export default async function Page({
  searchParams,
}: {
  searchParams: { [x: string]: string };
}) {
  const responseProduct = await fetch(
    `${process.env.API_ENDPOINT}/items?q=${searchParams.search}`,
    {
      cache: 'no-store',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  );

  if (!responseProduct.ok) {
    return {
      notFound: true,
    };
  }

  const dataProduct = await responseProduct?.json();
  const productCamelized = camelizeKeys(
    dataProduct,
  ) as unknown as ListProductsPageProps;
  const listProducts = productCamelized?.results?.items;
  const categories = productCamelized?.results?.categories;

  return (
    <Main>
      <Breadcrumb categories={categories} />
      <ListProducts listProducts={listProducts} />
    </Main>
  );
}
