import {
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Input} from '../../ui-component/input/input.component';
import AppButton from '../../ui-component/button/button.component';
import {LoginProps} from '../../navigation/type/type';
import {Screen} from '../../ui-component/screen/screen.component';
import * as Yup from 'yup';
import {Formik} from 'formik';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

export default function SignInComponent({navigation}: LoginProps) {
  async function onSave(values: any, onSubmitProps: any) {
    onSubmitProps.resetForm();
    navigation.push('AppNavigator');
  }
  return (
    <Screen>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={onSave}
        validationSchema={validationSchema}>
        {({
          values,
          handleChange,
          handleSubmit,
          errors,
          setFieldTouched,
          touched,
        }) => (
          <View style={styles.box}>
            <Input
              placeholder="EMAIL or USERNAME"
              keyboardType="email-address"
              onBlur={() => setFieldTouched('email')}
              value={values.email}
              onChangeText={handleChange('email')}
            />
            {touched.email && (
              <Text style={{color: 'red'}}>{errors.email}</Text>
            )}

            <Input
              placeholder="PASSWORD"
              secureTextEntry
              onBlur={() => setFieldTouched('password')}
              value={values.password}
              onChangeText={handleChange('password')}
              textContentType="password"
            />
            {touched.password && (
              <Text style={{color: 'red'}}>{errors.password}</Text>
            )}

            <AppButton title="SIGN IN" onPress={() => handleSubmit()} />

            <View style={styles.textWrap}>
              <Pressable
                onPress={() =>
                  navigation.reset({
                    index: 0,
                    routes: [{name: 'Register'}],
                  })
                }>
                <Text style={styles.text}>REGISTER</Text>
              </Pressable>
              <Text style={[styles.text, {marginHorizontal: 10}]}>|</Text>
              <Pressable>
                <Text style={styles.text}>FORGOT PASSWORD</Text>
              </Pressable>
            </View>
          </View>
        )}
      </Formik>
    </Screen>
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
    width: 397,
    height: 530,
    backgroundColor: '#fff',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 27,
    paddingHorizontal: 30,
    paddingVertical: '25%',
  },
  switchesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textWrap: {flexDirection: 'row', justifyContent: 'center'},
  text: {
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: '700',
    color: '#c5c5c5',
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
});
