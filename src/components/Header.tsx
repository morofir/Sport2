import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import ArrowRight from '../../assets/svg/ArrowRight';
import * as RootNavigation from '../navigation/RootNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {navigationRef} from '../navigation/RootNavigation';

const Header = (props: {canGoBack: boolean}) => {
  const clearOnBoarding = async () => {
    try {
      await AsyncStorage.removeItem('@viewdOnboarding');
    } catch (error) {
      console.log(error);
    }
    RootNavigation.navigate('loginScreen');
  };
  const handleGoBack = () => {
    try {
      //TODO POP CHECK LAST ITEM IS NOT WELCOME SCREEN!!
      navigationRef.current?.isReady() ? navigationRef.goBack() : false;
    } catch (error) {
      console.log('error: ', error);
    }
  };

  return (
    <View style={styles.viewContainer}>
      <TouchableOpacity onPress={clearOnBoarding}>
        <Image
          style={styles.rightImage}
          source={require('../../assets/images/group3.png')}
        />
      </TouchableOpacity>

      <Image
        style={styles.imageContainer}
        source={require('../../assets/images/sport1small.png')}
      />
      <TouchableOpacity
        onPress={handleGoBack}
        style={props.canGoBack ? styles.arrowRight : {display: 'none'}}>
        <ArrowRight width={25} height={25} color={'white'} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  viewContainer: {
    padding: Platform.OS === 'ios' ? 28 : 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#141414',
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
  },
  imageContainer: {
    marginTop: 25,
    marginStart: Platform.OS === 'ios' ? 100 : 120,
  },
  rightImage: {
    marginRight: 10,
    marginTop: 25,
    width: 21,
    height: 19,
  },
  arrowRight: {
    marginTop: 25,
    marginStart: 110,
  },
});

export default Header;
