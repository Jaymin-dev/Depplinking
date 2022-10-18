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
import {getFriendList} from '../redux/actions/action';
import style from './style';

const Friends = ({navigation}) => {
  const dispatch = useDispatch();
  const {friendList = []} = useSelector(({friend}) => friend);
  const [isAdd, setIsAdd] = useState(false);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [age, setAge] = useState();
  useEffect(() => {
    dispatch(getFriendList());
  }, []);
  const onADD = () => setIsAdd(!isAdd);
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
        </View>
      )}
      <FlatList
        data={friendList}
        keyExtractor={(d, i) => i}
        renderItem={({item, i}) => {
          return (
            <View key={i} style={style.wrapper}>
              <Text style={style.text}>First Name:{item.First_Name__c}</Text>
              <Text style={style.text}>Last Name:{item.Last_Name__c}</Text>
              <Text style={style.text}>Age:{item.Age__c}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Friends;
