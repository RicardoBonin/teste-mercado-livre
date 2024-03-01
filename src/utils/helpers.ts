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
