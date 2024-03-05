import { render, screen, cleanup } from '@testing-library/react';

import Home from '@/app/page';

describe('Page home', () => {
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
        json: () => Promise.resolve({}),
      }),
    );
    render(await Home());

    expect(screen.getByTestId('main')).toBeInTheDocument();
  });
});
