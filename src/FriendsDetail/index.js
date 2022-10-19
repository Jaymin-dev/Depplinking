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

const FriendsDetail = ({navigation, route: {params}}) => {
  const {friendList = []} = useSelector(({friend}) => friend);
  console.log('params',params)
  const filterData = friendList.find(i => i.Id === params.item) || {};
  const onBack = () => navigation.goBack();
  return (
    <View style={{marginHorizontal: 20}}>
      <Button title="Back" onPress={onBack} />
      <Text style={style.text}>First Name:{filterData.First_Name__c}</Text>
      <Text style={style.text}>Last Name:{filterData.Last_Name__c}</Text>
      <Text style={style.text}>Age:{filterData.Age__c}</Text>
    </View>
  );
};

export default FriendsDetail;
