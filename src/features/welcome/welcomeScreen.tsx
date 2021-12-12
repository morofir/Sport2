import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import * as RootNavigation from '../../navigation/RootNavigation';

const welcomeScreen = () => {
  return (
    <View>
      <Text>welcome to sport 1!</Text>

      <Button
        title="home"
        onPress={() => RootNavigation.navigate('AppNavigation')}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
export default welcomeScreen;
