import React, { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Recrutamento: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recrutamento</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  title: {
    textAlign: 'center',
    fontSize: 40
  }
});
export default Recrutamento;
