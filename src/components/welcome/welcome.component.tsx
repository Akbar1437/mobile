import {StackActions} from '@react-navigation/native';
import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {WelcomeProps} from '../../navigation/type/type';
import AppButton from '../../ui-component/button/button.component';

export function WelcomeComponent({navigation}: WelcomeProps) {
  return (
    <ImageBackground style={styles.background}>
      <View style={styles.logoContainer}>
        <Text style={styles.tagLine}>WELCOME</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <AppButton
          title="Login"
          onPress={() => navigation.dispatch(StackActions.replace('Login'))}
        />
        <AppButton
          title="Registration"
          color="secondary"
          onPress={() => navigation.dispatch(StackActions.replace('Register'))}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
  },

  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  tagLine: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  },
});
