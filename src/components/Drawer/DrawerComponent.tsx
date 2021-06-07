import React, { FC } from 'react';
import { Image } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { useUser } from 'src/context';
import { Column, Row, Text, DrawerItem } from 'src/components';
import { theme } from 'src/theme';

interface DrawerComponentsProps {
  navigation: any;
  routes: any;
}

const DrawerComponent: FC<DrawerComponentsProps> = ({ navigation: { navigate } }) => {
  const { logout, user } = useUser();
  return (
    <Column>
      <Row
        bg={theme.colors.primary}
        style={{
          padding: 10,
          elevation: 5,
          shadowOffset: {
            height: 2,
            width: 0
          },
          shadowOpacity: 0.2
        }}
      >
        <Column>
          <Image
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              overflow: 'hidden',
              borderWidth: 3
            }}
            source={{
              uri: user?.image
            }}
          />
          <Text color='white' fontWeight={400} marginTop='8px' variant='tiny'>
            Editar foto
          </Text>
        </Column>
        <Column ml='10px'>
          <Text color='white' fontWeight={400} marginTop='8px' variant='smaller'>
            {user?.name}
          </Text>

          <Text color='white' fontWeight={400} marginTop='8px' variant='smaller'>
            {user?.email}
          </Text>
        </Column>
      </Row>

      <DrawerItem onPress={() => navigate('Home')}>
        <Icon name='home' size={18} color='#999' />

        <Text ml='20px' color='gray.n800' fontWeight={400} variant='regular'>
          Home
        </Text>
      </DrawerItem>

      <DrawerItem onPress={() => navigate('Calendar')}>
        <Icon name='calendar-o' size={18} color='#999' />

        <Text ml='20px' color='gray.n800' fontWeight={400} variant='regular'>
          Calendario
        </Text>
      </DrawerItem>

      <DrawerItem onPress={logout}>
        <Icon name='sign-out' size={18} color='#999' />

        <Text ml='20px' color='gray.n800' fontWeight={400} variant='regular'>
          Sair
        </Text>
      </DrawerItem>
    </Column>
  );
};

export default DrawerComponent;
