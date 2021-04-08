import React, {useState, useContext} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {scale} from 'react-native-size-matters';

import {AuthContext} from '../navigations/Provider';

const Register = ({navigation}) => {
  const {register} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [rePass, setRePass] = useState('');

  function HandlerPressRegister() {
    if (pass === '' || rePass === '' || email === '') {
      Alert.alert('Bạn cần nhập tất cả các nội dung');
    } else if (pass !== rePass) {
      Alert.alert('Hai mật khẩu bạn nhập chưa trùng khớp');
    } else if (pass.length < 6 || rePass.length < 6) {
      Alert.alert('Mât khẩu phải có tối thiểu 6 kí tự');
    } else {
      // console.log('email: ' + email);
      // console.log('password: ' + pass);
      register(email, pass);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
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
      <TextInput
        value={rePass}
        onChangeText={t => {
          setRePass(t);
        }}
        placeholder={'Re-Password'}
        secureTextEntry={true}
        style={styles.textInput}
        numberOfLines={1}
      />
      <View style={styles.inline}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            HandlerPressRegister();
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

export default Register;
