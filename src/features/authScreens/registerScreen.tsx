import * as React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {useState} from 'react';
import FirebaseUtil from '../../utils/FirebaseUtil';
import * as RootNavigation from '../../navigation/RootNavigation';
import auth from '@react-native-firebase/auth';

const registerScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async () => {
    if (email && password) {
      let response = await FirebaseUtil.signUp(email, password).catch(error => {
        showAlert(error.message);
      });
      console.log('response: ', response);

      if (response) RootNavigation.navigate('loginScreen');
    }
  };
  const showAlert = (e: string) => {
    Alert.alert('Sign In Failed!', e, [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>הרשמה</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Email"
          placeholderTextColor="#003f5c"
          onChangeText={email => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>
      <View style={styles.btnsView}>
        <TouchableOpacity onPress={signUp}>
          <View style={styles.register}>
            <Text style={styles.regiText}>Sign Up!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  regText: {
    fontSize: 18,
    fontFamily: 'NarkissBlock-Regular',
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'NarkissBlock-Regular',
    marginBottom: 20,
  },
  checkbox: {
    fontSize: 14,
  },
  inputView: {
    backgroundColor: 'rgb(223,223,223)',
    width: '50%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  register: {
    width: 250,
    height: 56,
    margin: 5,
    borderRadius: 5,
    backgroundColor: 'rgb(2,247,132)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  regiText: {
    fontSize: 25,
    fontFamily: 'NarkissBlock-Regular',
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  btnsView: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default registerScreen;
