'use client';

import { HTMLAttributes } from 'react';
import { Provider } from 'react-redux';

import { Store } from 'redux';

import { initializeStore, useStore } from '@/store';
import { CombineReducersProps } from '@/stores/reducer';
import { UserAgentProps } from '@/stores/userAgent/reducer';

interface ProvidersProps extends HTMLAttributes<HTMLElement> {
  userAgent: UserAgentProps;
  children: React.ReactNode;
}

export default function Providers({ children, userAgent }: ProvidersProps) {
  const state = initializeStore({ userAgent }).getState();
  const store: Store<CombineReducersProps> = useStore(state);

  return <Provider store={store}>{children}</Provider>;
}
