import React, {useContext, useState} from 'react';
import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
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
import loginScreen from './features/authScreens/loginScreen';
import LoginProvider, {LoginContext} from './utils/LoginProvider';
import registerScreen from './features/authScreens/registerScreen';
import auth from '@react-native-firebase/auth';
import loadingScreen from './features/authScreens/loadingScreen';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

const Stack = navigatorStack();

export default function App(this: any, props: any) {
  if (Platform.OS) {
    StatusBar.setBarStyle('light-content');
  }
  const onNavigationReady = () => {
    SplashScreen.hide(); // hide the splash screen after navigation ready
  };
  const {user, isLoading} = useContext(LoginContext);
  console.log('user: ', user);
  console.log('isLoading: ', isLoading);
  const [loggedIn, setLoggedIn] = useState(false);
  //TODO usestate to check if user is logged on
  const auth1 = auth().onAuthStateChanged(
    (user: FirebaseAuthTypes.User | null) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log('uid: ', uid);
        setLoggedIn(true);

        // ...
      } else {
        setLoggedIn(false);

        // User is signed out
        // ...
      }
    },
  );

  return (
    //safearea view?

    <NavigationContainer onReady={onNavigationReady} ref={navigationRef}>
      <Provider store={Store}>
        <FlashMessage position="top" />
        <LoginProvider>
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
            {/* <Stack.Screen
              component={welcomeScreen}
              name="welcomeScreen"
              options={{headerShown: true}}
            /> */}

            {isLoading ? (
              <Stack.Screen component={loadingScreen} name="loadingScreen" />
            ) : loggedIn ? (
              <Stack.Screen component={AppNavigation} name="AppNavigation" />
            ) : (
              <Stack.Screen component={loginScreen} name="loginScreen" />
            )}

            {/* <Stack.Screen
              component={AppNavigation}
              name="AppNavigation"
              options={{headerShown: true}}
            /> */}
            <Stack.Screen
              component={insideScreen}
              name="insideScreen"
              options={{headerShown: true}}
            />

            <Stack.Screen
              component={registerScreen}
              name="registerScreen"
              options={{headerShown: true}}
            />
          </Stack.Navigator>
        </LoginProvider>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
