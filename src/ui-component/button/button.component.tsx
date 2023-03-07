import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';

export default function AppButton({
  title,
  color = '#FFCC00',
  ...options
}: {
  title: string;
  color?: string;
} & TouchableOpacityProps) {
  return (
    <TouchableOpacity
      {...options}
      style={[styles.button, {backgroundColor: color}]}>
      <>
        <Text style={styles.text}>{title}</Text>
      </>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFCC00',
    borderRadius: 25,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 15,
    width: '100%',
    marginVertical: 25,
  },
  text: {
    color: '#000000',
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
