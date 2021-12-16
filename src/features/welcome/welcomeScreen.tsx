import React, {useState, useEffect} from 'react';
import {ActivityIndicator, Button, StyleSheet, Text, View} from 'react-native';
import CarouselCards from '../Carousel/CarouselCards';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppNavigation from '../../navigation/AppNavigation';
import * as RootNavigation from '../../navigation/RootNavigation';
import HomeScreen from '../homeScreen/Home';
import App from '../../App';
import Header from '../../components/Header';

const welcomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [viewdOnBoarding, setviewdOnboarding] = useState(false); // user first install the app

  const checkOnBoarding = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewdOnboarding');
      if (value !== null) {
        setviewdOnboarding(true);
        navigateHome();
      }
    } catch (error) {
      console.log('error on boarding', error);
    } finally {
      setLoading(false); // finish indicator any way
    }
  };
  const navigateHome = () => {
    RootNavigation.navigate('AppNavigation');
  };

  useEffect(() => {
    checkOnBoarding();
  }, []); //check one time

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size={'large'} />
      ) : viewdOnBoarding ? ( //if user allready saw the onboarding go to home, else Onboarding Carousel
        <AppNavigation />
      ) : (
        <CarouselCards />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'rgb(237,238,240)'},
});
export default welcomeScreen;
