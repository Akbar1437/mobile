import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {
  Platform,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';

export default function AppTextInput({
  icon,
  onIconPress,
  width = '100%',
  ...otherProps
}: {
  icon?: any;
  width?: number | string;
  onIconPress?: () => void;
} & TextInputProps) {
  return (
    <View style={[styles.container, {width: width}]}>
      {icon && (
        <View style={styles.icon}>
          <Icon
            name={icon}
            size={25}
            // color="#C5C5C5"
            onPress={onIconPress}
          />
        </View>
      )}
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} {...otherProps} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    height: 45,
    width: '100%',
    backgroundColor: '#fff',
  },
  inputContainer: {
    width: '90%',
    height: '100%',
  },
  textInput: {
    width: '100%',
    height: '100%',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    fontSize: 18,
  },
  icon: {
    // marginHorizontal: 10,
    color: 'black',
    width: '10%',
    alignItems: 'center',
  },
});
