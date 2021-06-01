import React, { FC, useState, useContext, createContext } from 'react';

interface ContextProps {
  currentRouteName: string;
  setCurrentRouteName: any;
}
const RouteContext = createContext({} as ContextProps);

const RouteProvider: FC = props => {
  const [currentRouteName, setCurrentRouteName] = useState('');

  return <RouteContext.Provider value={{ currentRouteName, setCurrentRouteName }} {...props} />;
};

const useRoute: () => ContextProps = () => useContext(RouteContext);

export { RouteProvider, useRoute };
