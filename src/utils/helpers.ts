import { PriceProps } from '@/types/price';

interface QueryObject {
  [key: string]: string | number | boolean;
}

export const getUserAgentReduxState = (userAgent: string | undefined) => {
  if (!userAgent) {
    return {
      userAgent,
      devices: { isMobile: true, isTablet: false, isDesktop: false },
    };
  }

  const isMobile = Boolean(
    userAgent?.match(
      /(android|webos|iphone|ipod|blackberry|iemobile|opera mini)/i,
    ),
  );

  const isTablet = Boolean(
    userAgent?.match(
      /(tablet|ipad|playbook|xoom|kindle|silk)|(android(?!.*mobile))/i,
    ),
  );

  return {
    userAgent,
    devices: { isMobile, isTablet, isDesktop: !isMobile && !isTablet },
  };
};

export const objectToQueryString = (obj: QueryObject) =>
  Object.entries(obj)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value.toString())}`,
    )
    .join('&');

export const pluralParser = (
  total: number | string | undefined,
  string: string,
  cont = true,
) => {
  if (total === 0 && cont) {
    return `0 ${string}s`;
  }

  if (total === 1 && cont) {
    return `1 ${string}`;
  }

  if (total === 0 && !cont) {
    return `${string}s`;
  }

  if (total === 1 && !cont) {
    return `${string}`;
  }

  return cont ? `${total} ${string}s` : `${string}s`;
};

export const priceParser = (price: PriceProps | undefined) =>
  price?.amount?.toLocaleString('es-AR', {
    style: 'currency',
    currency: price?.currency,
    minimumFractionDigits: price?.decimals || 0,
  });
