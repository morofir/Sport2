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
import * as RootNavigation from '../../navigation/RootNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';

const CarouselCards = () => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  const isPressedEntrance = async () => {
    try {
      await AsyncStorage.setItem('@viewdOnboarding', 'true');
      RootNavigation.navigate('AppNavigation');
    } catch (error) {
      console.log(error);
    }
  };

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

      <Animatable.View animation="slideInUp">
        <View
          style={index === 2 ? styles.RectangleShapeView : {display: 'none'}}>
          <TouchableOpacity
            onPress={isPressedEntrance} //clear async storage
          >
            <Text style={styles.letMeIn}>קח אותי פנימה!</Text>
          </TouchableOpacity>
          <Text style={styles.alreadyHave}>כבר יש לי משתמש</Text>
        </View>
      </Animatable.View>
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
    backgroundColor: 'rgb(2,247,13)',
    marginBottom: 50,
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
