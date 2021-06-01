import React, { FC } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import { DrawerComponent } from 'src/components';
import { ScreenOptions } from 'src/utils';
import { getAuthenticatedRoutes } from 'src/routes';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const routes = getAuthenticatedRoutes();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props: any): JSX.Element => (
        <DrawerComponent {...props} routes={routes}></DrawerComponent>
      )}
      drawerStyle={{ width: '60%', backgroundColor: 'white' }}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name='AuthenticatedAppStack' component={AuthenticatedAppStack} />
    </Drawer.Navigator>
  );
};

const AuthenticatedAppStack = () => {
  const { Home, Calendario, Recrutamento } = routes;
  return (
    <Stack.Navigator initialRouteName={Home.name} screenOptions={ScreenOptions}>
      <Stack.Screen name={Home.name} component={Home.component} />
      <Stack.Screen name={Calendario.name} component={Calendario.component} />
      <Stack.Screen name={Recrutamento.name} component={Recrutamento.component} />
    </Stack.Navigator>
  );
};

const AuthenticadedApp: FC = () => {
  return <DrawerNavigator />;
};

export default AuthenticadedApp;
