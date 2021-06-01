import React, { FC } from 'react';
import { ScrollView, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Column, Row } from 'src/components';
import { AuthenticatedRoutes } from 'src/Routes';
import { useUser, useRoute } from 'src/context';

interface DrawerComponentsProps {
  navigation: any;
  routes: any;
}

const DrawerComponent: FC<DrawerComponentsProps> = ({ navigation }) => {
  const { logout, user } = useUser();
  const { Home, Calendario, Recrutamento } = AuthenticatedRoutes();

  const handleLogout = () => {
    console.log('Logout');
    logout();
  };

  console.log('Drawer Component !');
  return (
    <Column bg='white' flex={1} paddingTop={'24px'}>
      <Row />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ButtonItem title={Home.name} onPressed={() => navigation.navigate(Home.route)} />
        <ButtonItem
          title={Recrutamento.name}
          onPressed={() => navigation.navigate(Recrutamento.route)}
        />
        <ButtonItem
          title={Calendario.name}
          onPressed={() => navigation.navigate(Calendario.route)}
        />
        <ButtonItem title='Sair' onPressed={() => handleLogout()} />
      </ScrollView>
    </Column>
  );
};

interface ButtonItemProps {
  onPressed: any;
  title: string;
}

const ButtonItem: FC<ButtonItemProps> = ({ onPressed, title }) => {
  return (
    <TouchableOpacity style={style.button} onPress={() => onPressed()}>
      <Row>
        <Text style={style.title}>{title}</Text>
      </Row>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 20,
    marginLeft: 20
  },
  button: {
    marginTop: 24
  }
});
export default DrawerComponent;
