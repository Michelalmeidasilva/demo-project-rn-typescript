import React, { FC } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Login, PasswordReset, Signup } from 'src/screens';

const { Navigator, Screen } = createStackNavigator();

const UnauthenticadedApp = (): JSX.Element => (
  <Navigator initialRouteName='Login'>
    <Screen name='Login' component={Login} />
    <Screen name='Password' component={PasswordReset} />
    <Screen name='Signup' component={Signup} />
  </Navigator>
);

export default UnauthenticadedApp;
