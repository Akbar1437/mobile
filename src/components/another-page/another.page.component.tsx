import React from 'react';
import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import {AnotherPageProps} from '../../navigation/type/type';

export function AnotherPageComponent({navigation}: AnotherPageProps) {
  return (
    <ImageBackground style={styles.background}>
      <View style={styles.logoContainer}>
        <Text style={styles.tagLine}>WELCOME to AnotherPageComponent</Text>
        <Pressable onPress={() => navigation.navigate('MainScreen')}>
          <Text> go back</Text>
        </Pressable>
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
