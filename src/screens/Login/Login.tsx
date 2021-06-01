import React, { FC, useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

import { useUser, CredentialsParams } from 'src/context';
import { Column, Input, Button } from 'src/components';

const Login: FC = () => {
  const { login } = useUser();
  const navigation = useNavigation<any>();
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<CredentialsParams>();

  const onSubmit = async (data: CredentialsParams) => {
    try {
      setIsLoading(true);
      await login(data);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView>
      <Column alignItems='center' p='4'>
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
          width='200'
          text='Entrar'
          onPress={handleSubmit(onSubmit)}
          mt={20}
        />
        <Column alignItems='center'>
          <Button
            width='200'
            text='Resetar a senha'
            onPress={() => navigation.push('PasswordReset')}
            mt={20}
          />
        </Column>
      </Column>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textError: {
    fontSize: 12,
    color: 'red'
  }
});
export default Login;
