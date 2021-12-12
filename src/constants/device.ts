import {Dimensions, Platform} from 'react-native';
import ExtraDimensions from 'react-native-extra-dimensions-android';

export const SCREEN_HEIGHT: number =
  Platform.OS === 'ios'
    ? Dimensions.get('window').height
    : ExtraDimensions.get('REAL_WINDOW_HEIGHT');
export const SCREEN_WIDTH: number = Dimensions.get('window').width;