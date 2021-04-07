import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {scale} from 'react-native-size-matters';
//component
import Header from '../components/Header';

const Maps = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title={'Maps'} isHome={true} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default Maps;
