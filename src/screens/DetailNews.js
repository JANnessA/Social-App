import React, {useEffect, useContext, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import axios from 'axios';
import {WebView} from 'react-native-webview';

//component
import Header from '../components/Header';
// import AuthContext from '../navigations/Provider';
// import firestore from '@react-native-firebase/firestore';

const NewsDetail = ({navigation, route}) => {
  // const {user, setUser} = useContext(AuthContext);
  const {url, title} = route.params;

  return (
    <View style={styles.container}>
      <WebView source={{uri: url}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default NewsDetail;
