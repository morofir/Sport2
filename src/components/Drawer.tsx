import React from 'react';
import {useState, useEffect, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  ActivityIndicator,
  FlatList,
  View,
  RefreshControl,
  Image,
} from 'react-native';
import {List} from 'react-native-paper';
import Arrowleft from '../../assets/svg/Arrowleft';
import {
  fetchCategoryData,
  selectAllCategories,
} from '../features/more/state/moreSlice';
import {RootState} from '../store/Store';
import {useDispatch, useSelector} from 'react-redux';
import {childData, categoryData} from '../models/moreModel';

const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const Drawer = () => {
  const dispatch = useDispatch();
  const {loading} = useSelector((state: RootState) => state.category);
  const categories = useSelector(selectAllCategories);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(fetchCategoryData());
  }, []); //only get user list once!

  const list2 = ['צור קשר', 'תנאי שימוש', 'הגדרות פרטיות', 'גרסה נוכחית']; //local data

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(fetchCategoryData()); //this is what "update the list"
    wait(1500).then(() => setRefreshing(false));
  }, []); //memoized list, if didnt change wont update again

  const renderItem = ({item}: {item: categoryData}) => (
    <List.Accordion
      style={
        item.title === 'ליגת החלומות'
          ? {backgroundColor: 'rgb(2,247,132)'}
          : styles.drawer
      }
      title={''}
      right={() => <Text style={styles.titles}>{item.title}</Text>}
      id={item.id}
      key={item.id}
      //IF child exist have an arrow
      left={() =>
        item.children.length > 0 ? (
          <Arrowleft height={15} width={20} />
        ) : (
          <></> //no arrow
        )
      }>
      {item.children?.map((child: childData) => {
        return (
          <List.Item
            style={styles.listItem}
            title={''}
            key={item.id + '-' + child.id}
            right={() => <Text style={styles.subTitles}>{child.title}</Text>}
          />
        );
      })}
    </List.Accordion>
  );

  return (
    <View>
      <FlatList
        style={styles.list}
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />

      <View style={styles.logo}>
        <Image
          style={styles.byMoveo}
          source={require('../../assets/images/bymoveo.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {height: '90%'},
  drawer: {
    borderBottomWidth: 0.9,
    borderBottomColor: '#DCDCDC',
    height: 55,
    backgroundColor: '#F5F5F5',
  },
  titles: {
    fontFamily: 'NarkissBlock-Regular',
    fontSize: 18,
    fontWeight: 'bold', //bolder
    marginEnd: 10,
  },
  subTitles: {
    fontFamily: 'NarkissBlock-Regular',
    fontSize: 16,
    borderBottomWidth: 0.4,
    borderBottomColor: '#DCDCDC',
    marginEnd: 15,
  },
  loader: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  listItem: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: 'rgb(230, 230, 230)',
  },
  logo: {
    flex: 1,
    backgroundColor: 'rgb(230, 230, 230)',

    alignItems: 'center',
    marginTop: -10,
    padding: 5,
    justifyContent: 'center',
  },
  byMoveo: {
    backgroundColor: '#F0F0F0',
    margin: 5,
    justifyContent: 'center',
    opacity: 0.45,
  },
});
export default Drawer;
