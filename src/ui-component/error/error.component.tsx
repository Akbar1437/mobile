import React from 'react';
import {StyleSheet, Text, Platform} from 'react-native';

export default function ErrorMessage({
  error,
  visible,
}: {
  error: string | undefined;
  visible?: boolean;
}) {
  if (!visible || !error) return null;
  return <Text style={styles.text}>{error}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});
