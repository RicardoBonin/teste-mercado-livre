/* eslint-disable no-underscore-dangle */
import { cleanup } from '@testing-library/react';
import { createMocks } from 'node-mocks-http';

import handler from '@/pages/api/items';

describe('/api/items', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  test('returns 405 if not GET method', async () => {
    const { req, res } = createMocks({
      method: 'POST',
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(405);
    expect(JSON.parse(res._getData()).message).toEqual(
      'Method POST not allowed.',
    );
  });

  test('returns 500 if request fails when query is invalid', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    const globalRef: any = global;
    globalRef.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () =>
          Promise.resolve({
            return: {},
          }),
      }),
    );
    const globalFetch = global.fetch;

    await handler(req, res);

    expect(res._getStatusCode()).toBe(500);
    expect(JSON.parse(res._getData()).message).toEqual(
      'Error trying to make a request. Query invalid',
    );

    global.fetch = globalFetch;
  });

  test('returns 500 if request fails when request  is not ok', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    const globalRef: any = global;
    globalRef.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
        status: 200,
        json: () =>
          Promise.resolve({
            return: {},
          }),
      }),
    );
    const globalFetch = global.fetch;

    await handler(req, res);

    expect(res._getStatusCode()).toBe(500);
    expect(JSON.parse(res._getData()).message).toEqual(
      'Error trying to make a request.',
    );

    global.fetch = globalFetch;
  });

  test('returns 200 if request succeeds', async () => {
    const { req, res } = createMocks({
      url: 'http://localhost:3030/items?q=mock',
      method: 'GET',
    });

    const globalRef: any = global;
    globalRef.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () =>
          Promise.resolve({
            results: [],
          }),
      }),
    );
    const globalFetch = global.fetch;

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(res._getData().message).toEqual('Request successfully.');
    expect(res._getData().results).toEqual([]);

    global.fetch = globalFetch;
  });
});
