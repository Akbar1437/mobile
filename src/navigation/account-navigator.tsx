import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AnotherPageComponent} from '../components/another-page/another.page.component';
import SignInComponent from '../components/sign-in/sign-in.component';
import {SignUpComponent} from '../components/sign-up/sign-up.component';
import {WelcomeComponent} from '../components/welcome/welcome.component';
import {AppNavigator} from './app-navigator';
import {StackNavigationParams} from './type/type';

const Stack = createNativeStackNavigator<StackNavigationParams>();

export function AccountNavigator() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Login"
        component={SignInComponent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={SignUpComponent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Welcome"
        component={WelcomeComponent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AnotherPage"
        component={AnotherPageComponent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AppNavigator"
        component={AppNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
