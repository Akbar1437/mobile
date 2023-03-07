import {CommonActions} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';

import AppButton from '../../ui-component/button/button.component';
import {Screen} from '../../ui-component/screen/screen.component';

export default function LogOut({navigation}: any) {
  async function logOut() {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'Account'}, {name: 'Welcome'}],
      }),
    );
  }

  return (
    <Screen style={styles.container}>
      <AppButton title="Log out" onPress={logOut} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'light',
  },
  container: {
    marginVertical: 20,
  },
});
