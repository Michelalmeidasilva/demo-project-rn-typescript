import React, { FC } from 'react';

import { useNavigation, DrawerActions } from '@react-navigation/native';
import { IconButton, Colors } from 'react-native-paper';

const DrawerHeader: FC = () => {
  const navigation = useNavigation();

  return (
    <IconButton
      icon='menu'
      color={Colors.black}
      size={32}
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
    />
  );
};

export default DrawerHeader;
