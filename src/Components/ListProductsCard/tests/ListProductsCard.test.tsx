import { render, screen, cleanup } from '@testing-library/react';

import { ItemListProduct } from '@/types/listProduts';

import ListProductsCard from '..';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ alt, src, title }: any) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} title={title} />
  ),
}));

describe('ListProductsCard', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  const mockProps = {
    product: {
      title: 'Mock title',
      freeShipping: true,
      city: 'Mock city',
    } as ItemListProduct,
  };

  test('Should render icon to free shipping when freeShipping is true', () => {
    render(<ListProductsCard {...mockProps} />);

    expect(
      screen.getByRole('img', { name: 'Icon de frete gratis' }),
    ).toHaveAttribute('src', '/assets/ic_shipping.png');
  });

  test('Should not render icon to free shipping when freeShipping is false', () => {
    const modifiedMock = {
      ...mockProps,
      product: { ...mockProps.product, freeShipping: false },
    };
    render(<ListProductsCard {...modifiedMock} />);

    expect(
      screen.queryByRole('img', { name: 'Icon de frete gratis' }),
    ).not.toBeInTheDocument();
  });

  test('Should render "Mock city" text when there is city', () => {
    render(<ListProductsCard {...mockProps} />);

    expect(screen.getByText('Mock city')).toBeInTheDocument();
  });

  test('Should not render "Mock city" text when there is city', () => {
    const modifiedMock = {
      ...mockProps,
      product: { ...mockProps.product, city: undefined },
    };
    render(<ListProductsCard {...modifiedMock} />);

    expect(screen.queryByText('Mock city')).not.toBeInTheDocument();
  });
});
