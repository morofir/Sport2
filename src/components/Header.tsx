import React, {useReducer, useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import ArrowRight from '../../assets/svg/ArrowRight';
import * as RootNavigation from '../navigation/RootNavigation';

const Header = (props: {canGoBack: boolean; name: string}) => {
  const [rerender, setRerender] = useState(false);

  const handleGoBack = () => {
    try {
      setRerender(!rerender); //TODO delete
      RootNavigation.goBack();
      setRerender(!rerender); //TODO delete
    } catch (error) {
      console.log('error: ', error);
    }
  };
  console.log(props.name);

  return (
    <View style={styles.viewContainer}>
      <TouchableOpacity onPress={() => RootNavigation.navigate('VOD')}>
        <Image
          style={styles.rightImage}
          source={require('../../assets/images/group3.png')}
        />
      </TouchableOpacity>

      <Image
        style={styles.imageContainer}
        source={require('../../assets/images/sport1small.png')}
      />
      <TouchableOpacity
        onPress={handleGoBack}
        style={props.canGoBack ? styles.arrowRight : {display: 'none'}}>
        <ArrowRight width={25} height={25} color={'white'} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  viewContainer: {
    padding: 28,
    flexDirection: 'row',
    backgroundColor: 'rgb(20,20,20)',
  },
  imageContainer: {
    marginTop: 20,
    marginStart: 90,
  },
  rightImage: {
    marginRight: 10,
    marginTop: 20,
  },
  arrowRight: {
    marginTop: 20,
    marginStart: 100,
  },
});

export default Header;
