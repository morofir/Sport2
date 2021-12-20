import React from 'react';
import {ActivityIndicator, View} from 'react-native';

export default function loadingScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#fff'}}>
      <ActivityIndicator color="#000" size="large" />
    </View>
  );
}
