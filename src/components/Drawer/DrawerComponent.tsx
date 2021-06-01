import React, { FC } from 'react';
import { IconButton } from 'react-native-paper';

import { useUser } from 'src/context';
import { DrawerItem } from './DrawerItem';
import { Column, Text } from 'src/components';

interface DrawerComponentsProps {
  navigation: any;
  routes: any;
}

const DrawerComponent: FC<DrawerComponentsProps> = ({ navigation: { navigate } }) => {
  const { logout, user } = useUser();

  return (
    <>
      <Column bg='white' p='1'>
        <IconButton icon='camera' size={33} />

        <Text color='gray.n800' fontWeight={400} marginTop='8px' variant='tiny'>
          Editar perfil
        </Text>

        <Text color='gray.n800' fontWeight={400} marginTop='8px' variant='smaller'>
          nome:{user?.name}
        </Text>

        <Text color='gray.n800' fontWeight={400} marginTop='8px' variant='smaller'>
          email:{user?.email}
        </Text>
      </Column>

      <DrawerItem title='Recrutamento' onPress={() => navigate('Recrutamento')} />

      <DrawerItem title='Calendario' onPress={() => navigate('Calendario')} />

      <DrawerItem title='Home' onPress={() => navigate('Home')} />

      <DrawerItem title='Sair' onPress={logout} />
    </>
  );
};

export default DrawerComponent;
