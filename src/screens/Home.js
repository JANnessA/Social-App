import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
import {scale} from 'react-native-size-matters';
//component
import Header from '../components/Header';
import Status from '../components/Status';

const Posts = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../assets/img/ava1.jpg'),
    postTime: '4 mins ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../assets/img/ava1.jpg'),
    liked: true,
    likes: '14',
    comments: '5',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../assets/img/ava1.jpg'),
    postTime: '2 hours ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: 'none',
    liked: false,
    likes: '8',
    comments: '0',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../assets/img/ava1.jpg'),
    postTime: '1 hours ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../assets/img/ava1.jpg'),
    liked: true,
    likes: '1',
    comments: '0',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../assets/img/ava1.jpg'),
    postTime: '1 day ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../assets/img/ava1.jpg'),
    liked: true,
    likes: '22',
    comments: '4',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../assets/img/ava1.jpg'),
    postTime: '2 days ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: 'none',
    liked: false,
    likes: '0',
    comments: '0',
  },
];

const Home = ({navigation}) => {
  function renderItem({item}) {
    return (
      <Status
        userName={item.userName}
        userImg={item.userImg}
        postTime={item.postTime}
        post={item.post}
        postImg={item.postImg}
        liked={item.liked}
        comments={item.comments}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Header title={'Home'} isHome={true} navigation={navigation} />
      <View style={styles.containerBody}>
        <FlatList
          data={Posts}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={{marginBottom: scale(50)}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  containerBody: {marginHorizontal: scale(16), marginVertical: scale(12)},
});

export default Home;
