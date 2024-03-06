import { Metadata } from 'next';
import { camelizeKeys } from 'humps';

import { ListProductsPageProps } from '@/types/pages/listProductsPage';
import ListProducts from '@/Components/Sections/ListProducts';
import Main from '@/Components/Main';
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
