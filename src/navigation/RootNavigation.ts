import React from 'react';
import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';

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
    navigationRef.dispatch(CommonActions.goBack());
  } catch (error) {
    console.error(error); //check root screen and handle TODO
  }
}
