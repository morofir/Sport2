import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import * as RootNavigation from '../../navigation/RootNavigation';

const LiveScreen = () => {
  return (
    <View>
      <Text>live</Text>
      <TouchableOpacity
        onPress={() =>
          auth()
            .signOut()
            .then(() => RootNavigation.navigate('loginScreen'))
        }>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>LOG OUT!</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({});

export default LiveScreen;
