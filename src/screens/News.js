import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {scale} from 'react-native-size-matters';
//component
import Header from '../components/Header';

const News = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title={'News'} isHome={true} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default News;
