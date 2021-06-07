import React, { FC } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigationOptions } from '@react-navigation/stack';

import { theme } from 'src/theme';
import { DrawerComponent, DrawerHeader } from 'src/components';
import { Home, Calendar, Recruitment, Managment } from 'src/screens';

import { useUser } from 'src/context';
import { isOfficer } from 'src/utils';

const ScreenOptions = (): StackNavigationOptions => ({
  headerStyle: {
    backgroundColor: theme.colors.primary,
    shadowColor: 'transparent',
    elevation: 1
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24
  },
  cardStyle: { backgroundColor: theme.colors.primary },
  header: (): JSX.Element => <DrawerHeader />
});

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const OfficerStackNavigator = () => (
  <Stack.Navigator initialRouteName='Home' screenOptions={ScreenOptions}>
    <Stack.Screen name='Home' component={Home} />
    <Stack.Screen name='Calendar' component={Calendar} />
    <Stack.Screen name='Managment' component={Managment} />
    <Stack.Screen name='Recruitment' component={Recruitment} />
  </Stack.Navigator>
);

const MemberStackNavigator = () => (
  <Stack.Navigator initialRouteName='Home' screenOptions={ScreenOptions}>
    <Stack.Screen name='Home' component={Home} />
    <Stack.Screen name='Calendar' component={Calendar} />
  </Stack.Navigator>
);

const AuthenticatedAppStack = () => {
  const { user } = useUser();

  return (
    <Stack.Navigator screenOptions={ScreenOptions}>
      {isOfficer(user) && (
        <Stack.Screen
          name='OficcerStack'
          options={{ headerShown: false }}
          component={OfficerStackNavigator}
        />
      )}
      {!isOfficer(user) && (
        <Stack.Screen
          name='MemberStack'
          component={MemberStackNavigator}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};

const AuthenticadedApp: FC = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props: any): JSX.Element => <DrawerComponent {...props} />}
      drawerStyle={{ width: '60%', backgroundColor: 'white' }}
      screenOptions={{ swipeEnabled: false }}
    >
      <Drawer.Screen name='AuthenticatedAppStack' component={AuthenticatedAppStack} />
    </Drawer.Navigator>
  ); 
};

export default AuthenticadedApp;
