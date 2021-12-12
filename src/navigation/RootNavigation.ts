import React from 'react';
import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(
  name: string | JSX.Element,
  params: any | undefined = undefined,
) {
  if (navigationRef.isReady()) {
    navigationRef.current?.navigate(name, params);
  }
}
