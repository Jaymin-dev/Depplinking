import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, View, Image, Linking} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const Setting = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Setting</Text>
    </View>
  );
};

export default Setting;
