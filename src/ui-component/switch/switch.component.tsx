import {StyleSheet, Switch, SwitchProps, Text, View} from 'react-native';
import React from 'react';

export function AppSwitch({title, ...options}: {title: string} & SwitchProps) {
  return (
    <View style={styles.switchContainer}>
      <Text>
        <Switch
          {...options}
          trackColor={{false: 'silver', true: '#057DD9'}}
          thumbColor={'#fff'}
          ios_backgroundColor="#fff"
        />
      </Text>
      <Text style={styles.switchTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  switchTitle: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    color: '#c5c5c5',
    marginLeft: 5,
    paddingTop: 5,
  },
});
