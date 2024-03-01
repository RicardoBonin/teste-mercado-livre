import { UserAgentProps } from './reducer';

export const GET_USER_AGENT = 'GET_USER_AGENT';

export const getUserAgent = (payload: UserAgentProps) => ({
  type: GET_USER_AGENT,
  payload,
});
