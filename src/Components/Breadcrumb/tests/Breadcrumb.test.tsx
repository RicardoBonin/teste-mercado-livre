import { render, screen, cleanup } from '@testing-library/react';

import Breadcrumb from '..';

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

describe('Breadcrumb', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  const mockProps = {
    categories: [],
  };

  test('Should render a link to home page', () => {
    render(<Breadcrumb {...mockProps} />);

    expect(screen.getByRole('link', { name: 'Inicio' })).toHaveAttribute(
      'href',
      '/',
    );
  });

  test('Should not render breadcrumbMapLastItem classCSS when there is not categories', () => {
    const { container } = render(<Breadcrumb {...mockProps} />);

    const classCSS = container.querySelector('.breadcrumbMapLastItem');
    expect(classCSS).toBeNull();
  });

  test('Should render breadcrumbMapLastItem classCSS when there is categories', () => {
    const modifiedMockProps = { ...mockProps, categories: ['mock-1'] };
    const { container } = render(<Breadcrumb {...modifiedMockProps} />);

    const classCSS = container.querySelector('.breadcrumbMapLastItem');
    expect(classCSS).toBeInTheDocument();
  });

  test('Should  render two breadcrumbItemMap classCSS when there is not categories and search', () => {
    const modifiedMockProps = { ...mockProps, categories: ['mock-1'] };
    const { container } = render(<Breadcrumb {...modifiedMockProps} />);

    const classCSS = container.getElementsByClassName('breadcrumbItemMap');
    expect(classCSS).toHaveLength(2);
  });
});
