import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {brandColors} from './Core/basicStyles';
import Home from './Home';
import Setting from './Setting';
import Friends from './Friends';
import FriendsDetail from './FriendsDetail';

const Stack = createStackNavigator();
const AppBottomTab = createBottomTabNavigator();
const AppTabScreen = () => {
  return (
    <AppBottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: brandColors.buttonColor,
        gestureEnabled: false,
        style: {
          backgroundColor: brandColors.appBackgroundColor,
        },
      }}>
      <AppBottomTab.Screen name="Home" component={Home} />
      <AppBottomTab.Screen name="Friends" component={Friends} />
      <AppBottomTab.Screen name="Settings" component={Setting} />
    </AppBottomTab.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <React.Fragment>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="TabScreen"
            screenOptions={{
              headerShown: false,
              gestureEnabled: false,
            }}>
            <Stack.Screen name="TabScreen" component={AppTabScreen} />
            <Stack.Screen name="FriendsDetail" component={FriendsDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </React.Fragment>
  );
};

export default RootNavigator;
