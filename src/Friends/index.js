import React, {useState, useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  Linking,
  TextInput,
  Button,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {addFriend, getFriendList} from '../redux/actions/action';
import style from './style';

const Friends = ({navigation}) => {
  const dispatch = useDispatch();
  const {friendList = []} = useSelector(({friend}) => friend);
  const [isAdd, setIsAdd] = useState(false);
  const [data, setData] = useState(friendList);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [age, setAge] = useState();
  const [searchADD, setSearchADD] = useState();
  useEffect(() => {
    dispatch(getFriendList());
  }, []);
  useEffect(() => {
    setData(friendList);
  }, [friendList]);

  const onADD = () => setIsAdd(!isAdd);
  const onSubmit = () => {
    dispatch(
      addFriend([
        {
          attributes: {type: 'Friend__c'},
          Name: 'FR-00002',
          First_Name__c: firstName,
          Last_Name__c: lastName,
          Age__c: age,
        },
      ]),
    );
    setFirstName('');
    setLastName('');
    setAge('');
    onADD();
  };
  const search = (text = '') => {
    const searchText = text?.toLowerCase();
    setSearchADD(text);
    const filterArray = friendList.filter(
      i =>
        i.First_Name__c?.toLowerCase().includes(searchText) ||
        i.Last_Name__c?.toLowerCase().includes(searchText),
    );
    setData(filterArray);
  };
  const navigateHandler = (item = {}) => {
    navigation.navigate('FriendsDetail', {item: item.Id});
  };
  return (
    <View style={{marginHorizontal: 20}}>
      <Button title="ADD" onPress={onADD} />
      {isAdd && (
        <View style={{marginVertical: 20}}>
          <TextInput
            placeholder="First Name"
            onChangeText={setFirstName}
            value={firstName}
            style={style.textStyle}
          />

          <TextInput
            placeholder="Last Name"
            onChangeText={setLastName}
            value={lastName}
            style={style.textStyle}
          />
          <TextInput
            placeholder="Age"
            onChangeText={setAge}
            value={age}
            style={style.textStyle}
          />
          <Button title="Submit" onPress={onSubmit} />
        </View>
      )}
      <TextInput
        placeholder="search"
        onChangeText={search}
        value={searchADD}
        style={style.textStyle}
      />
      <FlatList
        data={data}
        keyExtractor={(d, i) => i}
        renderItem={({item, i}) => {
          return (
            <TouchableOpacity
              onPress={() => navigateHandler(item)}
              key={i}
              style={style.wrapper}>
              <Text style={style.text}>First Name:{item.First_Name__c}</Text>
              <Text style={style.text}>Last Name:{item.Last_Name__c}</Text>
              <Text style={style.text}>Age:{item.Age__c}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Friends;
