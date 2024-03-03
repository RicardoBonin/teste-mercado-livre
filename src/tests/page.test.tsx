import { render, screen, cleanup } from '@testing-library/react';

import Home from '@/app/page';

describe('PAge', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  test('Page', async () => {
    const globalRef: any = global;
    globalRef.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      }),
    );
    render(await Home());

    expect(screen.getByText('Olá mundo')).toBeInTheDocument();
  });
});
