import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import firestore from '@react-native-firebase/firestore';
import AuthContext from '../navigations/Provider';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const {login} = useContext(AuthContext);

  function HandlePressLogin() {
    login(email, pass);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        value={email}
        onChangeText={t => {
          setEmail(t);
        }}
        placeholder={'Email'}
        keyboardType={'email-address'}
        style={styles.textInput}
        numberOfLines={1}
      />
      <TextInput
        value={pass}
        onChangeText={t => {
          setPass(t);
        }}
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.textInput}
        numberOfLines={1}
      />
      <View style={styles.inline}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            HandlePressLogin();
          }}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Register');
          }}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginHorizontal: 10,
    width: 100,
    height: 40,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {fontSize: 30, textAlign: 'center'},
  textInput: {
    width: scale(300),
    height: scale(40),
    borderWidth: 1,
    borderColor: '#ddd',
    paddingLeft: scale(10),
    marginVertical: scale(8),
  },
  inline: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: scale(10),
  },
});

export default Login;
