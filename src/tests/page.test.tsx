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

  test('Page', () => {
    render(<Home />);

    expect(screen.getByText('Olá mundo')).toBeInTheDocument();
  });
});
