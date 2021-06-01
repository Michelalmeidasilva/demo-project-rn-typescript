import React, { FC } from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Welcome: FC = () => {
  const navigation = useNavigation<any>();

  return (
    <View>
      <Text>Welcome</Text>
      <Button
        color='green'
        title='Login'
        onPress={() => {
          navigation.push('Login');
        }}
      />
      <Button
        color='#123658'
        title='Create new Account'
        onPress={() => {
          console.log('lola');
          navigation.push('Signup');
        }}
      />
    </View>
  );
};

export default Welcome;
