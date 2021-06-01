import React, { FC } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { Text } from 'src/components';

export interface DrawerItemProps {
  onPress(): void;
  title: string;
}

export const DrawerItem: FC<DrawerItemProps> = ({ onPress, title }) => (
  <TouchableOpacity style={style.button} onPress={onPress}>
    <Text color='gray.n800' fontWeight={400} variant='regular'>
      {title}
    </Text>
  </TouchableOpacity>
);

const style = StyleSheet.create({
  button: {
    margin: 3,
    padding: 10,
    justifyContent: 'center',
    height: 50,
    backgroundColor: 'white',
    alignContent: 'center',
    elevation: 1
  }
});

export default DrawerItem;
