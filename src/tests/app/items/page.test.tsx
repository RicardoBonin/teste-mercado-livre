import { render, screen, cleanup } from '@testing-library/react';

import Items from '@/app/items/page';

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

describe('Page Items', () => {
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
    render(await Items({ searchParams: { search: '' } }));

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
    render(await Items({ searchParams: { search: '' } }));

    expect(screen.getByRole('link', { name: 'Inicio' })).toHaveAttribute(
      'href',
      '/',
    );
  });

  test('Should render ListProducts Component', async () => {
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
    render(await Items({ searchParams: { search: '' } }));

    expect(
      screen.getByRole('heading', {
        name: 'No se encontraron productos. Por favor haz una búsqueda.',
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

    const container = await Items({ searchParams: { search: '' } });

    expect(container).toStrictEqual({ notFound: true });
  });
});
