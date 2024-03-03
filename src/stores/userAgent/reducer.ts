import { GET_USER_AGENT } from './actions';

export interface UserAgentProps {
  userAgent?: string;
  devices?: {
    isMobile: boolean;
    isDesktop: boolean;
    isTablet?: boolean;
  };
}

export interface UserAgentReducerProps {
  type: typeof GET_USER_AGENT;
  payload: UserAgentProps;
}

export const INITIAL_USER_AGENT_STATE: UserAgentProps = {} as UserAgentProps;

const userAgentReducer = (
  state = INITIAL_USER_AGENT_STATE,
  { type, payload }: UserAgentReducerProps,
): UserAgentProps => {
  switch (type) {
    case GET_USER_AGENT:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default userAgentReducer;
