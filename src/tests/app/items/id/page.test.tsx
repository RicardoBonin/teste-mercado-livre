import { render, screen, cleanup } from '@testing-library/react';

import ItemsId from '@/app/items/[id]/page';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      route: '/',
      query: '',
      asPath: '',
    };
  },
  useSearchParams() {
    return {
      get: () => 'mock-search',
    };
  },
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ alt, src, title }: any) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} title={title} />
  ),
}));

describe('Page ItemsId', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  test('Should render a tag main', async () => {
    const globalRef: any = global;
    globalRef.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            results: { items: [] },
          }),
      }),
    );

    //  @ts-expect-error Server Component
    render(await ItemsId({ params: { id: '1' } }));

    expect(screen.getByTestId('main')).toBeInTheDocument();
  });

  test('Should render Breadcrumb Component', async () => {
    const globalRef: any = global;
    globalRef.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            results: { items: [] },
          }),
      }),
    );

    //  @ts-expect-error Server Component
    render(await ItemsId({ params: { id: '1' } }));

    expect(screen.getByRole('link', { name: 'Inicio' })).toHaveAttribute(
      'href',
      '/',
    );
  });

  test('Should render ProductDetails Component', async () => {
    const globalRef: any = global;
    globalRef.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            results: { item: { title: 'Mock title' } },
          }),
      }),
    );

    //  @ts-expect-error Server Component
    render(await ItemsId({ params: { id: '1' } }));

    expect(
      screen.getByRole('heading', { level: 1, name: 'Mock title' }),
    ).toBeInTheDocument();
  });

  test('Should render ProductDescription Component', async () => {
    const globalRef: any = global;
    globalRef.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            results: { item: { title: 'Mock title' } },
          }),
      }),
    );

    //  @ts-expect-error Server Component
    render(await ItemsId({ params: { id: '1' } }));

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Descripción del producto',
      }),
    ).toBeInTheDocument();
  });

  test('Should render notFound true when request is not ok.', async () => {
    const globalRef: any = global;
    globalRef.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () =>
          Promise.resolve({
            results: { items: [] },
          }),
      }),
    );

    const container = await ItemsId({ params: { id: '1' } });

    expect(container).toStrictEqual({ notFound: true });
  });
});
