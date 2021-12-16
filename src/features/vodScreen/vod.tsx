import React, {useRef} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import LottieView from 'lottie-react-native';
import * as RootNavigation from '../../navigation/RootNavigation';

const VodScreen = () => {
  return (
    <View style={styles.container}>
      <Text>vod</Text>

      <Button
        title="insideScreen"
        onPress={() => RootNavigation.navigate('insideScreen')}
      />

      <LottieView
        source={require('../../../assets/lottie/ball-sport.json')}
        autoPlay
        loop
        style={styles.lottie}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  lottie: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    paddingTop: 40,
  },
});

export default VodScreen;
