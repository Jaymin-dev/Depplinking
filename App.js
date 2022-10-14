/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Image,
} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [image, setIamge] = useState();
  const pickSingleWithCamera = (mediaType = 'photo') => {
    ImagePicker.openCamera({
      cropping: true,
      width: 500,
      height: 500,
      includeExif: true,
      mediaType,
    })
      .then(image => {
        console.log('received image', image);
        setIamge({
          image: {
            uri: image.path,
            width: image.width,
            height: image.height,
            mime: image.mime,
          },
          images: null,
        });
      })
      .catch(e => alert(e));
  };

  const pickSingleBase64 = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    })
      .then(image => {
        console.log('received base64 image', image);
        setIamge(image.sourceURL);
      })
      .catch(e => alert(e));
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <TouchableOpacity
        onPress={pickSingleBase64}
        style={styles.sectionContainer}>
        <Text style={styles.text}>Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={pickSingleWithCamera}
        style={styles.sectionContainer}>
        <Text style={styles.text}>Capture</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  sectionContainer: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
});

export default App;
