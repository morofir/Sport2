import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import * as RootNavigation from '../navigation/RootNavigation';

const Header = () => {
  return (
    <View style={styles.viewContainer}>
      <TouchableOpacity onPress={() => RootNavigation.navigate('VOD')}>
        <Image
          style={styles.rightImage}
          source={require('../../assets/images/group3.png')}
        />
      </TouchableOpacity>

      <Image
        style={styles.imageContainer}
        source={require('../../assets/images/sport1small.png')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  viewContainer: {
    padding: 30,
    flexDirection: 'row',
    backgroundColor: 'rgb(20,20,20)',
  },
  imageContainer: {
    marginTop: 20,
    marginStart: 100, ///?precentage?
  },
  rightImage: {
    marginRight: 10,
    marginTop: 20,
  },
});

export default Header;
