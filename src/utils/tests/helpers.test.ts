import { cleanup } from '@testing-library/react';

import {
  getUserAgentReduxState,
  objectToQueryString,
  pluralParser,
} from '../helpers';

describe('Helpers', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  describe('getUserAgentReduxState', () => {
    test('when is a userAgent from a desktop device should return desktop correct object', () => {
      const desktopUserAgent =
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36';
      const expectedObject = {
        userAgent: desktopUserAgent,
        devices: { isMobile: false, isTablet: false, isDesktop: true },
      };

      expect(getUserAgentReduxState(desktopUserAgent)).toStrictEqual(
        expectedObject,
      );
    });

    test('when is a userAgent from a tablet device should return tablet correct object', () => {
      const tabletUserAgent =
        'Mozilla/5.0 (iPad; CPU OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.77 Mobile/15E148 Safari/604.1';
      const expectedObject = {
        userAgent: tabletUserAgent,
        devices: { isMobile: false, isTablet: true, isDesktop: false },
      };

      expect(getUserAgentReduxState(tabletUserAgent)).toStrictEqual(
        expectedObject,
      );
    });

    test('when is a userAgent from a mobile device should return mobile correct object', () => {
      const mobileUserAgent =
        'Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Mobile Safari/537.36';
      const expectedObject = {
        userAgent: mobileUserAgent,
        devices: { isMobile: true, isTablet: false, isDesktop: false },
      };

      expect(getUserAgentReduxState(mobileUserAgent)).toStrictEqual(
        expectedObject,
      );
    });

    test('when userAgent prop is falsy should return mobile state', () => {
      const expectedObject = {
        userAgent: undefined,
        devices: { isMobile: true, isTablet: false, isDesktop: false },
      };

      expect(getUserAgentReduxState(undefined)).toStrictEqual(expectedObject);
    });
  });

  describe('objectToQueryString', () => {
    it('should return correct query string for a simple object', () => {
      const obj = {
        name: 'John',
        age: 30,
        city: 'New York',
      };

      const queryString = objectToQueryString(obj);
      expect(queryString).toEqual('name=John&age=30&city=New%20York');
    });

    it('should return empty query string for an empty object', () => {
      const obj = {};

      const queryString = objectToQueryString(obj);
      expect(queryString).toEqual('');
    });

    it('should handle boolean values correctly', () => {
      const obj = {
        active: true,
        admin: false,
      };

      const queryString = objectToQueryString(obj);
      expect(queryString).toEqual('active=true&admin=false');
    });

    it('should handle numeric values correctly', () => {
      const obj = {
        number: 42,
        value: 3.14,
      };

      const queryString = objectToQueryString(obj);
      expect(queryString).toEqual('number=42&value=3.14');
    });
  });
});

describe('pluralParser', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  it('When total is equal 1 and cont true', () => {
    expect(pluralParser(1, 'test')).toBe('1 test');
  });

  it('When total is equal 1 and cont false', () => {
    expect(pluralParser(1, 'test', false)).toBe('test');
  });

  it('When total is greater than 1 and cont true', () => {
    expect(pluralParser(2, 'test')).toBe('2 tests');
  });

  it('When total is greater than 1 and cont false', () => {
    expect(pluralParser(2, 'test', false)).toBe('tests');
  });

  it('When total is equal 0 and cont true', () => {
    expect(pluralParser(0, 'test', true)).toBe('0 tests');
  });

  it('When total is equal 0 and cont false', () => {
    expect(pluralParser(0, 'test', false)).toBe('tests');
  });
});
