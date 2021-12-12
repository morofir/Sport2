import axios from 'axios';
import {API} from '../constants/api';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {Linking} from 'react-native';

const axiosInstance = axios.create({baseURL: API});

axiosInstance.interceptors.response.use(
  response => {
    console.log('response good!');

    return response;
  },
  error => {
    console.log('response error: ', error);
    showMessage({
      message: 'No Internet Connection!',
      description: 'check Wi-Fi / Mobile connection',
      type: 'danger',
      duration: 5000,
      floating: true,
      onPress: () => {
        Linking.openSettings(); //todo- ios not possible?
      },
    });
  },
);

axiosInstance.interceptors.request.use(
  request => {
    console.log('request good!');

    return request;
  },
  error => {
    console.log('request error: ', error);
  },
);
export default axiosInstance;
