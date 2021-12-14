import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {Screen} from 'react-native-screens';
import * as RootNavigation from '../../navigation/RootNavigation';

const VodScreen = () => {
  return (
    <View>
      <Text>vod</Text>
      <Button
        title="insideScreen"
        onPress={() => RootNavigation.navigate('insideScreen')}
      />
    </View>
  );
};
const styles = StyleSheet.create({});

export default VodScreen;
