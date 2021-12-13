import React from 'react';
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CarouselCardItem, {SLIDER_WIDTH, ITEM_WIDTH} from './CarouselCardItem';
import cdata from './cdata';
import * as RootNavigation from '../../navigation/RootNavigation';

const CarouselCards = () => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  return (
    <View style={{flex: 1}}>
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
        ref={isCarousel}
        data={cdata}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={index => setIndex(index)}
        useScrollView={true}
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
      <TouchableOpacity
        style={index === 2 ? styles.getMeIn : {display: 'none'}}
        // onPress={onPress}
      >
        <Text style={{fontSize: 22}}>קח אותי פנימה</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  getMeIn: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'rgb (2,247,132)',
    borderWidth: 1,
    bordercolor: 'rgb (2,247,132)',
  },
});

export default CarouselCards;
