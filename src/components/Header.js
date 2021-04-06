import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Header(props) {
  const {title, isHome, navigation} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {isHome ? (
          <TouchableOpacity
            onPress={() => {
              navigation.openDrawer();
            }}>
            <Ionicons name={'menu'} size={30} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Ionicons name={'chevron-back'} size={30} />
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
        }}>
        <Text style={{textAlign: 'center', fontSize: 20}}>{title}</Text>
      </View>
      <View style={{flex: 1}} />
    </View>
  );
}
