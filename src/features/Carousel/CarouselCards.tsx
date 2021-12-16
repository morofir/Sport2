import React from 'react';
import {
  Button,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CarouselCardItem, {SLIDER_WIDTH, ITEM_WIDTH} from './CarouselCardItem';
import cdata from './cdata';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RootNavigation from '../../navigation/RootNavigation';

const CarouselCards = () => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <TouchableOpacity
        style={{padding: Platform.OS === 'ios' ? 15 : 5}}
        onPress={() => RootNavigation.navigate('AppNavigation')}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'NarkissBlock-Regular',
          }}>
          דלג
        </Text>
      </TouchableOpacity>
      <Carousel
        layout="default"
        contentContainerCustomStyle={{direction: 'ltr'}}
        ref={isCarousel}
        data={cdata}
        onSnapToItem={index => setIndex(index)}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
        autoplay={true}
        autoplayDelay={3000}
        autoplayInterval={3000}
      />
      <Pagination
        dotsLength={cdata.length}
        activeDotIndex={index}
        carouselRef={isCarousel} //for tappable dots
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: 'rgb(2,247,132)',
        }}
        inactiveDotStyle={{backgroundColor: 'gray'}}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  RectangleShapeView: {
    width: 180,
    height: 45,
    backgroundColor: 'rgb(2,227,113)',
    marginBottom: 30,
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

export default CarouselCards;
