import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { useUser } from 'src/context';

import AuthenticadedApp from 'src/navigators/AuthenticadedApp';
import UnauthenticadedApp from 'src/navigators/UnauthenticadedApp';

import { AppProviders } from 'src/context';
import { theme } from 'src/theme';

const App: FC = () => {
  const { user } = useUser();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {!user ? <UnauthenticadedApp /> : <AuthenticadedApp />}
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
