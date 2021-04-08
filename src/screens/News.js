//CÓ THỂ CẢI TIẾN: QUERY SEARCH-------------------------------------
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

const News = ({navigation}) => {
  // const {user, setUser} = useContext(AuthContext);
  const [data, setData] = useState([]);

  function renderItem({item}) {
    let img = item.urlToImage;
    let url = item.url;
    return (
      <View style={{width: '100%', height: scale(100)}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('NewsDetail', {url: url, title: item.content});
          }}
          style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderColor: '#ddd',
            marginVertical: scale(10),
            marginHorizontal: scale(10),
          }}>
          <View style={{flex: 1, marginRight: scale(10)}}>
            <Image
              source={{uri: img}}
              resizeMode="contain"
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View style={{flex: 2}}>
            <Text
              numberOfLines={1}
              style={{fontSize: 15, fontWeight: 'bold', width: scale(200)}}>
              {item.content}
            </Text>
            {item.description.startsWith('<') ? (
              <WebView source={{uri: item.description}} />
            ) : (
              <Text numberOfLines={3} style={{fontSize: 12, width: scale(200)}}>
                {item.description}
              </Text>
            )}
            <Text style={{fontSize: 11, color: '#000'}}>{item.author}</Text>
            <Text style={{fontSize: 11, color: '#bbb'}}>
              {item.publishedAt}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  function getNews() {
    axios
      .get(
        'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=ac5de0ff1b8e4f908d1cc489ad05578a',
      )
      .then(res => {
        // console.log(res.data.articles);
        setData(res.data.articles);
      })
      .catch(err => {
        console.log('getting err when get news : ' + err);
      });
  }

  useEffect(() => {
    getNews();
  }, []);

  return (
    <View style={styles.container}>
      <Header title={'News'} isHome={true} navigation={navigation} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default News;
