import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from './Provider';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//lib
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
//screens
import News from '../screens/News';
import NewsDetail from '../screens/DetailNews';
import Chat from '../screens/Chat';
import Infor from '../screens/Infor';
import Home from '../screens/Home';

//stack childs
const StackNews = createStackNavigator();
function SNews() {
  return (
    <StackNews.Navigator headerMode="none">
      <StackNews.Screen name="News" component={News} />
      <StackNews.Screen name="NewsDetail" component={NewsDetail} />
    </StackNews.Navigator>
  );
}

const StackChat = createStackNavigator();
function SChat() {
  return (
    <StackChat.Navigator headerMode="none">
      <StackChat.Screen name="Chat" component={Chat} />
    </StackChat.Navigator>
  );
}

const StackInfor = createStackNavigator();
function SInfor() {
  return (
    <StackInfor.Navigator headerMode="none">
      <StackInfor.Screen name="Infor" component={Infor} />
    </StackInfor.Navigator>
  );
}

const StackHome = createStackNavigator();
function SHome() {
  return (
    <StackHome.Navigator headerMode="none">
      <StackHome.Screen name="Home" component={Home} />
    </StackHome.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const BottomTabNav = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initializing) {
    return null;
  }

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'News') {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          } else if (route.name === 'Chat') {
            iconName = focused
              ? 'chatbox-ellipses'
              : 'chatbox-ellipses-outline';
          } else if (route.name === 'Infor') {
            iconName = focused ? 'person' : 'person-outline';
          } else {
            iconName = focused ? 'home' : 'home-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="News" component={SNews} />
      <Tab.Screen name="Chat" component={SChat} />
      <Tab.Screen name="Infor" component={SInfor} />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
