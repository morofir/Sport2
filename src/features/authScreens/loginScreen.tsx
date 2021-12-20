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
import * as RootNavigation from '../../navigation/RootNavigation';
import FirebaseUtil from '../../utils/FirebaseUtil';

const loginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [register, setRegister] = useState(false);
  const registerPage = () => {
    RootNavigation.navigate('registerScreen');
  };
  const signIn = async () => {
    if (email && password) {
      let response = await FirebaseUtil.signIn(email, password).catch(e =>
        showAlert(e.message),
      );

      if (response) RootNavigation.navigate('AppNavigation');
    }
  };

  const showAlert = (e: string) => {
    Alert.alert('Sign In Failed!', e, [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };
  const forgotPass = () => {};
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>התחברות</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter Email"
            placeholderTextColor="#003f5c"
            maxLength={25}
            onChangeText={email => setEmail(email)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            maxLength={15}
            onChangeText={password => setPassword(password)}
          />
        </View>
        <View style={styles.btnsView}>
          <TouchableOpacity onPress={signIn}>
            <View style={styles.register}>
              <Text style={styles.regiText}>Sign In</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={registerPage}>
            <View style={styles.register}>
              <Text style={styles.regiText}>Register</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={forgotPass}>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
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
    marginBottom: 30,
  },
  checkbox: {
    fontSize: 14,
  },
  inputView: {
    backgroundColor: 'rgb(223,223,223)',
    width: '60%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },

  TextInput: {
    height: 40,
    flex: 1,
    padding: 2,
    marginLeft: 15,
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
  },
  register: {
    width: 220,
    height: 50,
    margin: 5,
    borderRadius: 10,
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
export default loginScreen;
function alert(arg0: string) {
  throw new Error('Function not implemented.');
}
