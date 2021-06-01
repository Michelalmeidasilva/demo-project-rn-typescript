import { Home, Calendario, Recrutamento } from 'src/screens';
import { Login, Signup, PasswordReset } from 'src/screens';

export const getUnauthenticatedRoutes = () => {
  return {
    PasswordReset: {
      name: 'PasswordReset',
      route: 'PasswordReset',
      component: PasswordReset
    },
    Login: {
      name: 'Login',
      route: 'Login',
      component: Login
    },
    Signup: {
      name: 'Signup',
      route: 'Signup',
      component: Signup
    }
  };
};

export const getAuthenticatedRoutes = () => {
  return {
    Recrutamento: {
      name: 'Recrutamento',
      route: 'Recrutamento',
      component: Recrutamento
    },
    Calendario: {
      name: 'Calendario',
      route: 'Calendario',
      component: Calendario
    },
    Home: {
      name: 'Home',
      route: 'Home',
      component: Home
    }
  };
};
