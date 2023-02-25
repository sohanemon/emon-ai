'use client';
import { store } from '@/services/redux/store';
import { Provider } from 'react-redux';

export default function ReduxProvider({ children }: Children) {
  return <Provider store={store}>{children}</Provider>;
}
