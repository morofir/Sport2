import React from 'react';
import {
  createNavigationContainerRef,
  StackActions,
  StackActionType,
} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';
import {BackHandler} from 'react-native';

export const navigationRef = createNavigationContainerRef();

export function navigate(
  name: string | JSX.Element,
  params: any | undefined = undefined,
) {
  if (navigationRef.isReady()) {
    navigationRef.current?.navigate(name, params);
  }
}

export function goBack() {
  try {
    if (navigationRef.canGoBack()) {
      navigationRef.current?.dispatch(CommonActions.goBack());
    } else {
      BackHandler.exitApp(); //for android
      console.log('exit');
    }
  } catch (error) {
    console.error(error); //check root screen and handle TODO
  }
}
// export function pop(){
// try{
//   navigationRef.current?.isReady
// }catch (error) {
//   console.error(error);
// }
