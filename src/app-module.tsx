import React, { FC } from 'react';
import { StatusBar, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme, ExtendedTheme } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';

import { AppProviders } from 'src/context';

import { theme } from 'src/theme';

import Routes from '../Routes';

if (__DEV__) {
  import('../ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const Test = () => <Text>aaaa</Text>;

const App: FC = () => {
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
        <Test></Test>
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
