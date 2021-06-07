import React, { FC } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Login, PasswordReset, Signup } from 'src/screens';

const { Navigator, Screen } = createStackNavigator();

const UnauthenticadedApp: FC = (): JSX.Element => (
  <Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
    <Screen name='Login' component={Login} />
    <Screen name='PasswordReset' component={PasswordReset} />
    <Screen name='Signup' component={Signup} />
  </Navigator>
);

export default UnauthenticadedApp;
