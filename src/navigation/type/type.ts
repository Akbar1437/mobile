import {DrawerNavigationProp} from '@react-navigation/drawer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type StackNavigationParams = {
  Login: undefined;
  Welcome: undefined;
  Register: undefined;
  Main: undefined;
  AccountNavigator: undefined;
  MainScreen: undefined;
  LogOut: undefined;
  AppNavigator: undefined;
};

export type LoginProps = NativeStackScreenProps<StackNavigationParams, 'Login'>;
export type RegisterProps = NativeStackScreenProps<
  StackNavigationParams,
  'Register'
>;
export type WelcomeProps = NativeStackScreenProps<
  StackNavigationParams,
  'Welcome'
>;

// ------------------------drawerNavigation-----------
export type MainProps = NativeStackScreenProps<StackNavigationParams, 'Main'>;
export type LogOutProps = DrawerNavigationProp<StackNavigationParams, 'LogOut'>;
