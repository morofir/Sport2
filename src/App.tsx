import React from 'react';
import {Platform, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Header from './components/Header';
import {Provider} from 'react-redux';
import {Store} from './store/Store';
import FlashMessage from 'react-native-flash-message';
import AppNavigation from './navigation/AppNavigation';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {navigationRef} from './navigation/RootNavigation';
import welcomeScreen from './features/welcome/welcomeScreen';

import {createNativeStackNavigator as navigatorStack} from '@react-navigation/native-stack';
import loginScreen from './features/login/loginScreen';
import insideScreen from './features/insideScreen/insideScreen';

const Stack = navigatorStack();

export default class App extends React.Component {
  static navigationOptions: {};
  render() {
    if (Platform.OS) {
      StatusBar.setBarStyle('light-content');
    }
    const onNavigationReady = () => {
      SplashScreen.hide(); // just hide the splash screen after nasvigation ready
    };

    // SplashScreen.hide();
    //safearea view?
    return (
      <NavigationContainer onReady={onNavigationReady} ref={navigationRef}>
        <Provider store={Store}>
          <Header />
          <FlashMessage position="top" />
          <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{headerShown: false}}>
            <Stack.Screen component={welcomeScreen} name="welcomeScreen" />
            <Stack.Screen component={AppNavigation} name="AppNavigation" />
            <Stack.Screen
              component={insideScreen}
              options={{
                headerShown: true,
                headerStyle: {
                  backgroundColor: 'rgb(20,20,20)',
                },
                headerTitleStyle: {
                  color: 'white',
                },
              }}
              name="insideScreen"
            />
          </Stack.Navigator>

          {/* <AppNavigation /> */}
        </Provider>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
function createNativeStackNavigator() {
  throw new Error('Function not implemented.');
}
