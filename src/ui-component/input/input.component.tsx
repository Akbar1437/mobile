import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import React from 'react';

export function Input({...options}: {} & TextInputProps) {
  return (
    <View style={styles.inputContainer}>
      <TextInput placeholderTextColor="#C5C5C5" {...options} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 15,
    borderBottomWidth: 0.2,
    borderBottomColor: '#C5C5C5;',
    paddingTop: 10,
    paddingBottom: 5,
    width: '100%',
  },
});
