import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppButton from '../../ui-component/button/button.component';
import {Input} from '../../ui-component/input/input.component';
import {RegisterProps} from '../../navigation/type/type';

export function SignUpComponent({navigation}: RegisterProps) {
  const defaultInput = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const [input, setInput] = useState(defaultInput);
  const [errorMessage, setErrorMessage] = useState('');
  const [disabled, setDisabled] = useState(false);

  // =============================

  async function onSave() {
    if (!input.name) return;
    setDisabled(true);
    setErrorMessage('');

    setInput(defaultInput);
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  }

  // ----------------------------------
  return (
    <SafeAreaView style={[styles.container, disabled ? {opacity: 0.6} : {}]}>
      <View style={styles.box}>
        <Text style={styles.title}>REGISTRATION</Text>

        {disabled && (
          <ActivityIndicator
            size={20}
            color="red"
            style={styles.activityIndicator}
          />
        )}
        <Input
          placeholder="FIRST NAME"
          value={input.name}
          onChangeText={value => setInput({...input, name: value})}
          editable={!disabled}
        />
        <Input
          placeholder="LAST NAME"
          value={input.lastName}
          onChangeText={value => setInput({...input, lastName: value})}
          editable={!disabled}
        />
        <Input
          placeholder="EMAIL"
          keyboardType="email-address"
          value={input.email}
          onChangeText={value => setInput({...input, email: value})}
          editable={!disabled}
        />
        <Text>{errorMessage}</Text>

        <Input
          placeholder="PASSWORD"
          value={input.password}
          onChangeText={value => setInput({...input, password: value})}
          editable={!disabled}
        />
        <Input
          placeholder="CONFIRM PASSWORD"
          value={input.confirmPassword}
          onChangeText={value => setInput({...input, confirmPassword: value})}
          editable={!disabled}
        />
        <View style={{marginTop: 40}}>
          <AppButton title="SIGN UP" onPress={onSave} disabled={disabled} />
        </View>
        <View style={styles.textWrap}>
          <Pressable
            disabled={disabled}
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{name: 'Login'}],
              })
            }>
            <Text style={styles.text}>LOGIN</Text>
          </Pressable>
          <Text style={[styles.text, {marginHorizontal: 10}]}>|</Text>
          <Pressable disabled={disabled} onPress={() => {}}>
            <Text style={styles.text}>GOOGLE ACCOUNT</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1717',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    alignItems: 'center',
    justifyContent: 'center',
    // opacity: 0.6,
  },
  box: {
    width: 455,
    height: 762,
    backgroundColor: '#fff',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 27,
    paddingHorizontal: 30,
    paddingVertical: '25%',
    position: 'relative',
  },

  title: {
    fontStyle: 'normal',
    fontSize: 25,
    fontWeight: '600',
    color: '#057DD9',
    textAlign: 'center',
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  textWrap: {flexDirection: 'row', justifyContent: 'center'},
  text: {
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: '700',
    color: '#c5c5c5',
  },
  activityIndicator: {
    position: 'absolute',
    top: '10%',
    right: '55%',
  },
});
