import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Status = props => {
  const {userName, userImg, postTime, post, postImg, liked, comments} = props;
  return (
    <View style={styles.containerStatus}>
      <View style={styles.frontView}>
        <View style={styles.contaiAva}>
          <Image source={userImg} style={styles.ava} />
        </View>
        <View style={styles.contaiName}>
          <Text style={styles.name}>{userName}</Text>
          <Text style={styles.time}>{postTime}</Text>
        </View>
      </View>
      <View>
        <Text>{post}</Text>
        {postImg === 'none' ? null : (
          <Image source={postImg} style={styles.img} />
        )}
        <View style={styles.buttonInline}>
          <TouchableOpacity style={styles.button}>
            {liked === true ? (
              <Ionicons
                name={'heart'}
                size={20}
                style={{marginRight: scale(5)}}
              />
            ) : (
              <Ionicons
                name={'heart-outline'}
                size={20}
                style={{marginRight: scale(5)}}
              />
            )}
            <Text>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons
              name={'chatbubble-outline'}
              size={20}
              style={{marginRight: scale(5)}}
            />
            <Text>{`${comments} Bình luận`}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  containerBody: {marginHorizontal: scale(16), marginVertical: scale(12)},
  containerStatus: {
    backgroundColor: '#f6f8fa',
    padding: scale(16),
    borderRadius: 4,
    marginVertical: scale(5),
  },
  frontView: {
    flexDirection: 'row',
    height: scale(40),
    width: '50%',
  },
  contaiAva: {flex: 1, marginRight: scale(10)},
  ava: {
    flex: 1,
    width: scale(40),
    height: scale(40),
    borderRadius: scale(20),
  },
  contaiName: {flex: 3},
  name: {fontWeight: 'bold', fontSize: scale(15)},
  time: {fontSize: scale(10), color: '#aaa'},
  img: {width: '100%', height: scale(200)},
  buttonInline: {
    flexDirection: 'row',
    height: scale(30),
    marginTop: scale(10),
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default Status;
