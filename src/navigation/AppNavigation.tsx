import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import More from '../features/more/MoreScreen';
import HomeScreen from '../features/homeScreen/Home';
import HamMenu from '../../assets/svg/HamMenu';
import Live from '../../assets/svg/Live';
import Vod from '../../assets/svg/Vod';
import Scores from '../../assets/svg/Scores';
import Home from '../../assets/svg/Home';
import LiveScreen from '../features/liveScreen/live';
import VodScreen from '../features/vodScreen/vod';
import scoreScreen from '../features/scoreScreen/score';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={'בית'}
      screenOptions={() => ({
        tabBarStyle: {
          backgroundColor: 'rgb(20,20,20)',
        },
        tabBarActiveTintColor: 'rgb(2,247,132)',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="עוד"
        component={More}
        options={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <HamMenu width={30} height={30} color={'rgb(2,247,132)'} />
            ) : (
              <HamMenu width={23} height={23} color={'gray'} />
            ),
        }}
      />
      <Tab.Screen
        name="שידורים"
        component={LiveScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Live width={30} height={30} color={'rgb(2,247,132)'} />
            ) : (
              <Live width={23} height={23} color={'gray'} />
            ),
        }}
      />
      <Tab.Screen
        name="VOD"
        component={VodScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Vod width={40} height={40} color={'rgb(2,247,132)'} />
            ) : (
              <Vod width={30} height={30} color={'gray'} />
            ),
        }}
      />
      <Tab.Screen
        name="תוצאות"
        component={scoreScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Scores width={45} height={45} color={'rgb(2,247,132)'} />
            ) : (
              <Scores width={35} height={35} color={'gray'} />
            ),
        }}
      />
      <Tab.Screen
        name="בית"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Home width={25} height={25} color={'rgb(2,247,132)'} />
            ) : (
              <Home width={20} height={20} color={'gray'} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({});

export default AppNavigation;
