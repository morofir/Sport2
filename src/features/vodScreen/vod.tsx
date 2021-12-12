import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import * as RootNavigation from '../../navigation/RootNavigation';

const VodScreen = () => {
  return (
    <View>
      <Text>vod</Text>
      <Button
        title="home"
        onPress={() => RootNavigation.navigate('insideScreen')}
      />
    </View>
  );
};
const styles = StyleSheet.create({});

export default VodScreen;
