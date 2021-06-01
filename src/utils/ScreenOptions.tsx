import React from 'react';

import { StackNavigationOptions } from '@react-navigation/stack';
import { theme } from 'src/theme';
import { DrawerHeader } from 'src/components';

export const ScreenOptions = (): StackNavigationOptions => ({
  headerStyle: {
    backgroundColor: theme.colors.gray.n300,
    shadowColor: 'transparent',
    elevation: 0
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24
  },
  cardStyle: { backgroundColor: theme.colors.gray.n100 },
  header: (): JSX.Element => <DrawerHeader />
});
