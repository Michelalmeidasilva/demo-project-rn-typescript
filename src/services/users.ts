import { AxiosResponse } from 'axios';
import { fetchClient } from 'src/providers/';

interface CredentialsParams {
  username: string;
  password: string;
}

interface User {
  email: string;
}

export const loginUser = (credentials: CredentialsParams): Promise<AxiosResponse<any>> =>
  fetchClient.post('/vlogin', credentials);
