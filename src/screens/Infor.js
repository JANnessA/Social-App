import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {scale} from 'react-native-size-matters';
//component
import Header from '../components/Header';
import {AuthContext} from '../navigations/Provider';

const Infor = ({navigation}) => {
  const {logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Header title={'Infor'} isHome={true} navigation={navigation} />
      <TouchableOpacity onPress={() => logout()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default Infor;
