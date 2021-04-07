import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

//screens
import BottomTabNav from './BottomTabNav';

const Drawer = createDrawerNavigator();
export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MenuTab" component={BottomTabNav} />
    </Drawer.Navigator>
  );
}
