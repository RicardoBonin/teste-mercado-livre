import { cleanup } from '@testing-library/react';

describe('TESTE', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  test('test', () => {
    expect('3').toBe('3');
  });
});
