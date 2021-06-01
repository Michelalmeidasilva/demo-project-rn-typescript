import React, { FC } from 'react';
import styled from 'styled-components';
import { IconButton } from 'react-native-paper';

import { useUser } from 'src/context';
import { DrawerItem } from './DrawerItem';
import { Column, Row, Text } from 'src/components';
interface DrawerComponentsProps {
  navigation: any;
  routes: any;
}

const DrawerComponent: FC<DrawerComponentsProps> = ({ navigation: { navigate }, routes }) => {
  const { logout, user } = useUser();
  const { Home, Calendario, Recrutamento } = routes;
  const handleLogout = () => {
    console.log('Logout');
    logout();
  };
  return (
    <DrawerMenuItems>
      <Perfil>
        <IconButton icon='camera' size={33}></IconButton>
        <Text color='gray.n800' fontWeight={400} marginTop='8px' variant='tiny'>
          Editar perfil
        </Text>

        <Text color='gray.n800' fontWeight={400} marginTop='8px' variant='smaller'>
          nome:{user?.nome}
        </Text>
        <Text color='gray.n800' fontWeight={400} marginTop='8px' variant='smaller'>
          email:{user?.email}
        </Text>
      </Perfil>
      <DrawerItem title={Recrutamento.name} onPressed={() => navigate(Recrutamento.route)} />
      <DrawerItem title={Calendario.name} onPressed={() => navigate(Calendario.route)} />
      <DrawerItem title={Home.name} onPressed={() => navigate(Home.route)} />
      <DrawerItem title='Sair' onPressed={() => handleLogout()} />
    </DrawerMenuItems>
  );
};

interface DrawerMenuItemsProps {
  children?: React.ReactNode;
}

const DrawerMenuItems: FC<DrawerMenuItemsProps> = ({ children }) => {
  return <Column>{children}</Column>;
};

const Perfil: FC<any> = ({ children }) => {
  return (
    <Column bg='white' p='1'>
      {children}
    </Column>
  );
};

export default DrawerComponent;
