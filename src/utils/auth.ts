import AsyncStorage from '@react-native-community/async-storage';

import { User } from 'src/context';
import { ASYNC_STORAGE_TOKEN, ASYNC_STORAGE_USER } from 'src/constants';

export const getToken = (): Promise<string | null> => AsyncStorage.getItem(ASYNC_STORAGE_TOKEN);

export const setToken = (token: string): Promise<void> =>
  AsyncStorage.setItem(ASYNC_STORAGE_TOKEN, token);

export const clearToken = (): Promise<void> => AsyncStorage.removeItem(ASYNC_STORAGE_TOKEN);

export const getStorageUser = (): Promise<string | null> =>
  AsyncStorage.getItem(ASYNC_STORAGE_USER);

export const setStorageUser = async (user: User): Promise<void> =>
  await AsyncStorage.setItem(ASYNC_STORAGE_USER, JSON.stringify(user));

export const clearStorageUser = (): Promise<void> => AsyncStorage.removeItem(ASYNC_STORAGE_USER);
