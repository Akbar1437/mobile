import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {Dimensions} from 'react-native';
import LogOut from '../components/logout/log-out.component';
import {MainScreen} from '../components/main/main-screen';
import {StackNavigationParams} from './type/type';

const Drawer = createDrawerNavigator<StackNavigationParams>();

export const AppNavigator = () => (
  <Drawer.Navigator
    initialRouteName="MainScreen"
    screenOptions={{
      drawerStyle: {
        width: Dimensions.get('window').width / 1.25,
      },
    }}>
    <Drawer.Screen
      name="MainScreen"
      component={MainScreen}
      // options={{headerShown: false}}
    />

    <Drawer.Screen name="LogOut" component={LogOut} />
  </Drawer.Navigator>
);
