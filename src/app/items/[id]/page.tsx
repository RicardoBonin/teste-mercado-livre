import { Metadata } from 'next';
import { camelizeKeys } from 'humps';

import { ProductPageProps } from '@/types/pages/ProductPage';
import Main from '@/Components/Main';
import Breadcrumb from '@/Components/Breadcrumb';
import ProductDetails from '@/Components/Sections/ProductDetails';
import ProductDescription from '@/Components/Sections/ProductDescription';

export const metadata: Metadata = {
  title: 'Mercado Livre',
  description: 'Mercado Livre | O maior portal de vendas da America latina.',
};

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

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
  const productCamelized = camelizeKeys(
    dataProduct,
  ) as unknown as ProductPageProps;
  const categories = productCamelized?.results?.categories;
  const product = productCamelized?.results?.item;

  return (
    <Main>
      <Breadcrumb categories={categories} />
      <ProductDetails product={product} />
      <ProductDescription product={product} />
    </Main>
  );
}
