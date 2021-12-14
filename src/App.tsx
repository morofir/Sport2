import React, {useRef} from 'react';
import {Platform, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Header from './components/Header';
import {Provider} from 'react-redux';
import {Store} from './store/Store';
import FlashMessage from 'react-native-flash-message';
import AppNavigation from './navigation/AppNavigation';
import {CommonActions, NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {navigationRef, goBack} from './navigation/RootNavigation';
import welcomeScreen from './features/welcome/welcomeScreen';
import {createNativeStackNavigator as navigatorStack} from '@react-navigation/native-stack';
import insideScreen from './features/insideScreen/insideScreen';

const Stack = navigatorStack();

export default class App extends React.Component {
  render() {
    if (Platform.OS) {
      StatusBar.setBarStyle('light-content');
    }
    const onNavigationReady = () => {
      SplashScreen.hide(); // hide the splash screen after navigation ready
    };

    //safearea view?
    return (
      <NavigationContainer onReady={onNavigationReady} ref={navigationRef}>
        <Provider store={Store}>
          <FlashMessage position="top" />

          <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{
              headerShown: true,
              title: 'mor',
              header: () => (
                <Header canGoBack={true} /> //navigationRef.current?.getRootState.name
              ),
            }}>
            <Stack.Screen component={welcomeScreen} name="welcomeScreen" />
            <Stack.Screen component={AppNavigation} name="AppNavigation" />
            <Stack.Screen component={insideScreen} name="insideScreen" />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
