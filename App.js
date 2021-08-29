import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarLis from "./components/carList/Index";
import Header from "./components/header/Index"
export default function App() {
  const item = {
    name: 'Model S',
    tagline: 'Starting at $69,420',
    image: require('./assets/images/ModelX.jpeg'),
  }
  return (
    <View style={styles.container}>
      <Header />
      <CarLis />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
