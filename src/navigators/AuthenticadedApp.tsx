import React, { FC } from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigationOptions } from '@react-navigation/stack';

import { theme } from 'src/theme';
import { DrawerComponent, DrawerHeader } from 'src/components';
import { Home, Calendario, Recrutamento } from 'src/screens';

const ScreenOptions = (): StackNavigationOptions => ({
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

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const AuthenticatedAppStack = () => (
  <Stack.Navigator initialRouteName='Home' screenOptions={ScreenOptions}>
    <Stack.Screen name='Home' component={Home} />
    <Stack.Screen name='Calendario' component={Calendario} />
    <Stack.Screen name='Recrutamento' component={Recrutamento} />
  </Stack.Navigator>
);

const AuthenticadedApp: FC = () => (
  <Drawer.Navigator
    drawerContent={(props: any): JSX.Element => <DrawerComponent {...props} />}
    drawerStyle={{ width: '60%', backgroundColor: 'white' }}
    screenOptions={{ headerShown: false }}
  >
    <Drawer.Screen name='AuthenticatedAppStack' component={AuthenticatedAppStack} />
  </Drawer.Navigator>
);

export default AuthenticadedApp;
