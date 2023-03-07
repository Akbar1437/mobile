import {DrawerNavigationProp} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {StackNavigationParams} from '../../navigation/type/type';
import AppButton from '../../ui-component/button/button.component';
import {Input} from '../../ui-component/input/input.component';

export function MainScreen() {
  const navigation =
    useNavigation<DrawerNavigationProp<StackNavigationParams>>();

  const defaultInput = {
    serialnumber: '',
    login: '',
    done_dateTime: '',
    set_production_process_id: '',
    process_done: '',
    note: '',
  };
  const [input, setInput] = useState(defaultInput);

  function onSave() {
    console.log('results', input);
  }

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.box}>
        <Text style={styles.title}>Production Processes</Text>

        <ScrollView>
          <Input
            placeholder="Serial Number"
            value={input.serialnumber}
            onChangeText={value => setInput({...input, serialnumber: value})}
          />
          <Input
            placeholder="Login"
            value={input.login}
            onChangeText={value => setInput({...input, login: value})}
          />
          <Input
            placeholder="Done Date time"
            value={input.done_dateTime}
            onChangeText={value => setInput({...input, done_dateTime: value})}
          />

          <Input
            placeholder="Set Production"
            value={input.set_production_process_id}
            onChangeText={value =>
              setInput({...input, set_production_process_id: value})
            }
          />
          <Input
            placeholder="Process done"
            value={input.process_done}
            onChangeText={value => setInput({...input, process_done: value})}
          />
          <Input
            placeholder="Note"
            value={input.note}
            onChangeText={value => setInput({...input, note: value})}
          />
          <View style={{marginTop: 40}}>
            <AppButton title="Confirm" onPress={onSave} />
          </View>
        </ScrollView>
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
