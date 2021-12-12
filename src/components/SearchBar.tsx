import * as React from 'react';
import {View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import SearchIcon from '../../assets/svg/SearchIcon';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) =>
    setSearchQuery(query);

  return (
    <View style={{padding: 10}}>
      <Searchbar
        textAlign="right"
        placeholder="חפש קבוצות, ליגות, שחקנים..."
        placeholderTextColor="#C0C0C0"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{borderColor: 'white', borderWidth: 1, borderRadius: 10}}
        icon={() => <SearchIcon />}
      />
    </View>
  );
};

export default SearchBar;
