import { Metadata } from 'next';
import { camelizeKeys } from 'humps';

import { ProductPageProps } from '@/types/pages/ProductPage';
import Main from '@/Components/Main';
import Breadcrumb from '@/Components/Breadcrumb';
import ProductDetails from '@/Components/Sections/ProductDetails';
import ProductDescription from '@/Components/Sections/ProductDescription';

export const metadata: Metadata = {
  title: 'Mercado Libre Argentina - Envíos Gratis en el día',
  description:
    'Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles.',
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
    return {
      notFound: true,
    };
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
