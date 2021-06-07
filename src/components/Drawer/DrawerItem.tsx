import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';

import { Row } from 'src/components';
export interface DrawerItemProps {
  onPress(): void;
  children: React.ReactNode;
}

export const DrawerItem: FC<DrawerItemProps> = ({ onPress, children }) => (
  <TouchableOpacity
    style={{
      height: 50,
      justifyContent: 'center',
      backgroundColor: 'white',
      marginTop: 1,
      elevation: 5,
      shadowOffset: {
        height: 2,
        width: 0
      },
      shadowOpacity: 0.2
    }}
    onPress={onPress}
  >
    <Row alignItems='center' ml='10px'>
      {children}
    </Row>
  </TouchableOpacity>
);

export default DrawerItem;
