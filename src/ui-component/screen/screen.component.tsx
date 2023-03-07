import React, {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextStyle,
  Platform,
  StatusBar,
} from 'react-native';

export function Screen({
  children,
  style,
}: PropsWithChildren<{style?: TextStyle}>) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
