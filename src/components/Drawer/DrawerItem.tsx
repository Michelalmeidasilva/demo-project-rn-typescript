import React, { FC } from 'react';

import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export interface DrawerItemProps {
  onPressed: any;
  title: string;
}

export const DrawerItem: FC<DrawerItemProps> = ({ onPressed, title }) => {
  return (
    <TouchableOpacity style={style.button} onPress={() => onPressed()}>
      <Text style={style.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 18
  },
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
