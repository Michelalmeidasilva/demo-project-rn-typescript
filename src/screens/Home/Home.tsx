import React, { FC, useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Column, Text } from 'src/components';

const Home: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
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

export default Home;
