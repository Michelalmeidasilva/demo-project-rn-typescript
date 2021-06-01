import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getUnauthenticatedRoutes } from 'src/routes';

const { Navigator, Screen } = createStackNavigator();

const UnauthenticatedAppStack = () => {
  const { Login, PasswordReset, Signup } = getUnauthenticatedRoutes();
  return (
    <Navigator initialRouteName='Login'>
      <Screen name={Login.name} component={Login.component} />
      <Screen name={PasswordReset.name} component={PasswordReset.component} />
      <Screen name={Signup.name} component={Signup.component} />
    </Navigator>
  );
};
const UnauthenticadedApp = (): JSX.Element => {
  return <UnauthenticatedAppStack />;
};

export default UnauthenticadedApp;
