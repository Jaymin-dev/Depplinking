import React, {useEffect, useState} from 'react';
import {Image, Linking, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const Home = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    Linking.getInitialURL().then(url => {
      const data = url.split('/');
      if (data.length) navigation.navigate('FriendsDetail', {item: data[3]});
    });
  }, []);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
