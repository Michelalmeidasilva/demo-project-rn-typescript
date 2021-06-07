import React, { FC, useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useUser, CredentialsParams, User } from 'src/context';
import { Input, Button } from 'src/components';

import { getUsersMock } from 'src/services';

const Login: FC = () => {
  const { login } = useUser();

  const [member, oficcer] = getUsersMock();

  const navigation = useNavigation<any>();

  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<CredentialsParams>();

  const onSubmit = async (data: User) => {
    try {
      if (data.email === 'member@gmail.com') {
        await login(member);
      }
      if (data.email === 'officer@gmail.com') {
        await login(oficcer);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <ScrollView contentContainerStyle={{ alignItems: 'center', padding: 20 }}>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              label='E-mail'
              placeholderTextColor='black'
              placeholder='digite seu email'
              keyboardType='email-address'
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name='email'
          rules={{ required: true }}
          defaultValue=''
        />

        {errors.email && <Text style={styles.textError}>This is required.</Text>}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label='Password'
              placeholder='password'
              placeholderTextColor='black'
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name='password'
          rules={{ required: true }}
          defaultValue=''
        />

        {errors.password && <Text style={styles.textError}>This is required.</Text>}

        <Button
          loading={isLoading}
          width={200}
          text='Entrar'
          onPress={handleSubmit(onSubmit)}
          mt={20}
        />

        <Button
          loading={isLoading}
          width={200}
          text='Resetar a senha'
          onPress={() => navigation.push('PasswordReset')}
          mt={20}
        />
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  textError: {
    fontSize: 12,
    color: 'red'
  }
});
export default Login;
