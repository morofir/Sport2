import React from 'react';
import {View, Text, StyleSheet, Dimensions, Platform} from 'react-native';
import FastImage from 'react-native-fast-image';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
export const windowHeight = Dimensions.get('window').height;

const checkFinalSlide = async (index: number) => {
  try {
    if (index === 2) {
      await AsyncStorage.setItem('@viewdOnboarding', 'true');
    }
  } catch (error) {
    console.log(error);
  }
};
const CarouselCardItem = ({item, index}: any) => {
  checkFinalSlide(index);

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
    marginBottom: 20,
  },
  body: {
    color: 'black',
    fontFamily: 'NarkissBlock-Regular',
    alignItems: 'center',
    fontSize: 16,
  },
  images: {
    width: 200,
    height: Platform.OS === 'ios' ? windowHeight / 2 : windowHeight / 2.5,
    margin: 10,
    backgroundColor: 'rgb(237,238,240)',
    marginBottom: Platform.OS === 'ios' ? 20 : 5,
  },
  lineStyle: {
    borderWidth: 1.5,
    borderColor: 'mediumspringgreen',
    margin: 10,
    marginLeft: 75,
    marginRight: 90,
  },
});

export default CarouselCardItem;
