import React, {useEffect, useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {scale} from 'react-native-size-matters';
//component
import Header from '../components/Header';
import AuthContext from '../navigations/Provider';
import firestore from '@react-native-firebase/firestore';

const News = ({navigation}) => {
  const {user, setUser} = useContext(AuthContext);
  useEffect(() => {
    const subscriber = firestore()
      .collection('news')
      .onSnapshot(querySnapshot => {
        const news = [];

        querySnapshot.forEach(documentSnapshot => {
          news.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setUsers(users);
        setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

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
