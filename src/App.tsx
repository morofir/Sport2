import React from 'react';
import {Platform, StatusBar, StyleSheet} from 'react-native';
import Header from './components/Header';
import {Provider} from 'react-redux';
import {Store} from './store/Store';
import FlashMessage from 'react-native-flash-message';
import AppNavigation from './navigation/AppNavigation';
import {NavigationContainer} from '@react-navigation/native';
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
    const route = navigationRef.current?.getRootState()
      ? navigationRef.getCurrentRoute()?.name
      : 'no';

    //safearea view?
    return (
      <NavigationContainer onReady={onNavigationReady} ref={navigationRef}>
        <Provider store={Store}>
          <FlashMessage position="top" />
          {/* <Header canGoBack={true} /> */}
          <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{
              headerShown: true,
              title: '?',
              header: () => (
                <Header
                  canGoBack={
                    //check if the navigator is rendered
                    navigationRef.current?.getRootState()
                      ? navigationRef.canGoBack()
                      : false
                  }
                />
              ),
            }}>
            <Stack.Screen
              component={welcomeScreen}
              name="welcomeScreen"
              options={{headerShown: false}}
            />
            <Stack.Screen
              component={AppNavigation}
              name="AppNavigation"
              options={{headerShown: true}}
            />
            <Stack.Screen
              component={insideScreen}
              name="insideScreen"
              options={{headerShown: true}}
            />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
