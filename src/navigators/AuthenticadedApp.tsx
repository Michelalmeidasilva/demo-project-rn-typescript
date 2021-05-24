import { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from 'src/components/';

const { Navigator, Screen } = createStackNavigator();

const AuthenticadedApp = (): JSX.Element => {
  return (
    <>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name='RightStack' component={Home} />
      </Navigator>
    </>
  );
};

export default AuthenticadedApp;
