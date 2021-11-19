
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation';
import Facebook from './screens/facebook';
import Instagram from './screens/instagram';

export default function App() {
  return (
    <View style={styles.container}>
     <AppNav/>
    </View>
  );
}

const bottomtab=createBottomTabNavigator({
  facebook:Facebook,
  instanceof:Instagram
})
const AppNav=createAppContainer(bottomtab)

const styles = StyleSheet.create({
  container: {
   
  },
});
