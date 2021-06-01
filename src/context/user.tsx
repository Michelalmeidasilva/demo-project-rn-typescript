import React, { FC, useState, useEffect, useContext, createContext } from 'react';

import { getToken, setToken, clearToken, setStorageUser, getStorageUser } from 'src/utils';
import { loginUser } from 'src/services';

export interface User {
  email: string | null | undefined;
  password: string | null | undefined;
  name?: string;
}

export interface CredentialsParams {
  email: string;
  password: string;
}

type ContextProps = {
  user: User | null | undefined;
  isFetchingUser: boolean;
  isFetchingToken: boolean;
  setUser: any;
  login: (credentials: CredentialsParams) => void;
  logout: () => void;
};

const UserContext = createContext({} as ContextProps);

const UserProvider: FC = ({ children }) => {
  const [isFetchingUser, setIsFetchingUser] = useState<boolean>(true);
  const [isFetchingToken, setIsFetchingToken] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>();

  const login: (credentials: CredentialsParams) => void = async credentials => {
    try {
      const loginResponse = loginUser();
      setToken(loginResponse.token);

      const mock = credentials as User;
      mock.name = 'test';
      setStorageUser(mock);

      await fetchUser();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUser = async () => {
    const token = await getToken();

    try {
      if (token) {
        const userStorage: any = await getStorageUser();

        if (userStorage) setUser(JSON.parse(userStorage) as User);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const logout = async () => {
    await clearToken();
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isFetchingUser,
        isFetchingToken,
        login,
        logout
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser: () => ContextProps = () => useContext(UserContext);

export { UserProvider, useUser };
