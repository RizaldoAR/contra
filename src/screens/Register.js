import {Formik} from 'formik';
import React, {useState} from 'react';
import {TextInput, HelperText, Button, Text} from 'react-native-paper';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import HeaderBar2 from '../components/HeaderBar2';
import axios from 'axios';
import * as yup from 'yup';

export default function Register() {
  const [title] = useState('FORM SCREENING');
  const handleSubmit = async values => {
    setLoading(true);
    await callGetUsersList();
  };

  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .email('Email must be a valid email')
      .required('Email is a required field'),
    password: yup
      .string()
      .required('Please enter your password')
      .min(8, ({min}) => 'Password must be at least 8 characters'),
  });
  const [loading, setLoading] = useState(false);

  const callGetUsersList = () => {
    axios
      .get('https://www.boredapi.com/api/activity')
      .then(response => {
        console.log('Response', response?.data);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  };
  return (
    <Formik
      validationSchema={loginSchema}
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}>
      {({
        isSubmitting,
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        isValid,
      }) => (
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Text>Email :</Text>
            <TextInput
              label="Email"
              mode="outlined"
              value={values.email}
              onChangeText={handleChange('email')}
              error={touched.email && errors.email}
            />
            <HelperText type="error" visible={touched.email && errors.email}>
              {errors.email}
            </HelperText>
          </View>

          <View style={styles.inputContainer}>
            <Text>Password :</Text>
            <TextInput
              secureTextEntry={true}
              mode="outlined"
              label="Password"
              value={values.password}
              onChangeText={handleChange('password')}
              left={<TextInput.Icon icon="key" />}
              error={touched.password && errors.password}
            />
            <HelperText
              type="error"
              visible={touched.password && errors.password}>
              {errors.password}
            </HelperText>
          </View>
          <View style={styles.inputContainer}>
            {/* <ActivityIndicator animating={loading} size="large" /> */}
            <Button
              buttonColor="#F4D013"
              mode="contained"
              onPress={handleSubmit}
              disabled={!isValid}>
              <Text style={styles.fontButton}>DAFTAR</Text>
            </Button>
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingVertical: 50,
    backgroundColor: '#ffff',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {},
  inputbutton: {},
  fontButton: {
    color: '#F5F5F5',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
});
