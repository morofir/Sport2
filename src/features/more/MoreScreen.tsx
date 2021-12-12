import React from 'react';
import {View, StyleSheet} from 'react-native';
import Drawer from '../../components/Drawer';
import {Provider as PaperProvider} from 'react-native-paper';
import SearchBar from '../../components/SearchBar';

const More = () => {
  return (
    <PaperProvider>
      <View>
        <SearchBar />

        <Drawer />
      </View>
    </PaperProvider>
  );
};
const styles = StyleSheet.create({});

export default More;
