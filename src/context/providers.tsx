import React, { ReactNode } from 'react';

import { UserProvider } from './user';
import { RouteProvider } from './route';

interface Props {
  children: ReactNode;
}

const AppProviders = ({ children }: Props): JSX.Element => (
  <UserProvider>
    <RouteProvider>{children}</RouteProvider>
  </UserProvider>
);

export default AppProviders;
