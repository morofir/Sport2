import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  TouchableOpacity,
  Animated,
  TouchableWithoutFeedbackBase,
  TouchableWithoutFeedback,
} from 'react-native';
import FastImage from 'react-native-fast-image';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
export const windowHeight = Dimensions.get('window').height;

const CarouselCardItem = ({item, index}: any) => {
  return (
    <View style={styles.container} key={index}>
      <FastImage
        style={styles.images}
        source={{
          uri: item.imgUrl,
          //   headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.center}
      />
      <Text style={styles.header}>{item.title}</Text>
      <View style={index === 2 ? styles.lineStyle : {}} />

      <Text style={styles.body}>{item.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(237,238,240)',
    marginTop: 10,
    paddingBottom: 70,
    paddingLeft: 40,
  },

  header: {
    color: 'black',
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 20,
    fontFamily: 'NarkissBlock-Regular',
    marginBottom: Platform.OS === 'ios' ? 20 : 10,
  },
  body: {
    color: 'black',
    fontFamily: 'NarkissBlock-Regular',
    alignItems: 'center',
    fontSize: 16,
    marginBottom: 5,
  },
  images: {
    width: 200,
    height: windowHeight / 2.3,
    margin: 10,
    backgroundColor: 'rgb(237,238,240)',
    marginBottom: Platform.OS === 'ios' ? 20 : 5,
  },
  lineStyle: {
    borderWidth: 1.5,
    borderColor: 'mediumspringgreen',
    margin: 5,
    marginLeft: 75,
    marginRight: 90,
  },
  RectangleShapeView: {
    width: 180,
    height: 45,
    backgroundColor: 'rgb(2,227,113)',
  },
  letMeIn: {
    fontFamily: 'NarkissBlock-Regular',
    fontSize: 22,
    alignSelf: 'center',
    padding: 10,
    fontWeight: 'bold',
  },
  alreadyHave: {
    fontFamily: 'NarkissBlock-Regular',
    fontSize: 16,
    alignSelf: 'center',
    padding: 10,
    fontWeight: 'bold',
  },
});

export default CarouselCardItem;
