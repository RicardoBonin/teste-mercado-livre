import { cleanup } from '@testing-library/react';

import { changeNumber } from '../utils';

describe('changeNumber', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  it('Should return the number passed', () => {
    expect(changeNumber(2)).toBe(2);
    expect(changeNumber(1)).toBe(1);
    expect(changeNumber(0)).toBe(0);
  });

  it('Should return 0 when there is not number', () => {
    expect(changeNumber(undefined)).toBe(0);
  });
});
