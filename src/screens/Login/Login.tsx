import React, { FC } from 'react';
import { View, TouchableOpacity, TextInput, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useUser } from 'src/context';
import { useForm, Controller } from 'react-hook-form';

type FormData = {
  login: string;
  password: string;
};

const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();

  const onSubmit: any = handleSubmit(data => console.log(data));

  return (
    <View>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name='login'
        rules={{ required: true }}
        defaultValue=''
      />
      {errors.login && <Text>This is required.</Text>}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name='password'
        defaultValue=''
      />
      {errors.password && <Text>This is required.</Text>}
      <TouchableOpacity style={[styles.button]} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.textButton}>Submeter Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const Login: FC = () => {
  const navigation = useNavigation<any>();
  const { login } = useUser();

  return (
    <ScrollView>
      <View style={styles.login}>
        <Form />
        <TouchableOpacity
          // eslint-disable-next-line prettier/prettier
          style={[styles.button]}
          onPress={() => {
            console.log('lola');
            navigation.push('PasswordReset');
          }}
        >
          <Text style={styles.textButton}>Resetar a senha</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 0.8,
    backgroundColor: '#FFFFFF',
    borderColor: '#FF5722',
    height: 50,
    width: 300,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 5
  },

  login: {
    padding: 30
  },

  button: {
    marginTop: 5,
    marginBottom: 5,
    height: 60,
    width: 200,
    backgroundColor: 'blue',
    borderRadius: 10,
    justifyContent: 'center'
  },
  textButton: {
    textAlign: 'center'
  }
});
export default Login;
