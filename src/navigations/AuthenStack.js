import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//screens
import Login from '../screens/Login';
import Register from '../screens/Register';
import BottomTabNav from './BottomTabNav';

const Stack = createStackNavigator();
export default function AuthenStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="News" component={BottomTabNav} />
    </Stack.Navigator>
  );
}
