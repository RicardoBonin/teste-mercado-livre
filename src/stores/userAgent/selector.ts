import { CombineReducersProps } from '../reducer';

export const getUserAgentState = (state: CombineReducersProps) =>
  state?.userAgent?.userAgent;

export const getDeviceIsMobile = (state: CombineReducersProps) =>
  state?.userAgent?.devices?.isMobile;

export const getDeviceIsTablet = (state: CombineReducersProps) =>
  state?.userAgent?.devices?.isTablet;

export const getDeviceIsDesktop = (state: CombineReducersProps) =>
  state?.userAgent?.devices?.isDesktop;
