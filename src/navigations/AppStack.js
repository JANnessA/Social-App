import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//icon
import Ionicons from 'react-native-vector-icons/Ionicons';
//screens
import News from '../screens/News';
import Maps from '../screens/Maps';
import Chat from '../screens/Chat';
import Infor from '../screens/Infor';

const StackNews = createStackNavigator();
function SNews() {
  return (
    <StackNews.Navigator>
      <StackNews.Screen name="News" component={News} />
    </StackNews.Navigator>
  );
}

const StackChat = createStackNavigator();
function SChat() {
  return (
    <StackChat.Navigator>
      <StackChat.Screen name="Chat" component={Chat} />
    </StackChat.Navigator>
  );
}

const StackInfor = createStackNavigator();
function SInfor() {
  return (
    <StackInfor.Navigator>
      <StackInfor.Screen name="Infor" component={Infor} />
    </StackInfor.Navigator>
  );
}

const StackMaps = createStackNavigator();
function SMaps() {
  return (
    <StackMaps.Navigator>
      <StackMaps.Screen name="Maps" component={Maps} />
    </StackMaps.Navigator>
  );
}

const Stack = createStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="News" component={SNews} />
      <Stack.Screen name="Chat" component={SChat} />
      <Stack.Screen name="Maps" component={SMaps} />
      <Stack.Screen name="Infor" component={SInfor} />
    </Stack.Navigator>
  );
};

export default AppStack;
