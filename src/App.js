import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './redux/store';
import {Linking, StatusBar} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigator from './SwitchNavigator';

const App = ({navigation}) => {
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar
          hidden
          translucent
          backgroundColor={'#FFF'}
          bar={'light-content'}
        />
        <SafeAreaProvider>
          <RootNavigator />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
