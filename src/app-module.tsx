import React, { FC } from 'react';
import { StatusBar, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme, ExtendedTheme } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';

import { AuthenticadedApp } from 'src/navigators/AuthenticadedApp';
import { AppProviders } from 'src/context';

import { theme } from 'src/theme';

import Routes from '../Routes';

if (__DEV__) {
  import('../ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const App: FC = () => {
  const user = {
    username: 'michel',
    password: '12345678'
  };
  const MyTheme: ExtendedTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...theme.colors
    }
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        <Routes />
        {!user ? <UnauthenticatedApp /> : <AuthenticadedApp />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <AppProviders>
      <StatusBar backgroundColor={theme.colors.secondary} barStyle='dark-content' />

      <App />
    </AppProviders>
  </ThemeProvider>
);
