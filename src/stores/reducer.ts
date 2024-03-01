import { combineReducers } from 'redux';

import userAgentReducer, { UserAgentProps } from './userAgent/reducer';

export interface CombineReducersProps {
  userAgent?: UserAgentProps;
}

export const reducers = {
  userAgent: userAgentReducer,
};

export default combineReducers(reducers);
