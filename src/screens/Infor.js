import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {scale} from 'react-native-size-matters';
//component
import Header from '../components/Header';

const Infor = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title={'Infor'} isHome={true} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default Infor;
