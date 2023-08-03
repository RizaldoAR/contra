import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {TextInput, Button, HelperText} from 'react-native-paper';
import {Formik} from 'formik';
import * as yup from 'yup';
import DashBoardStatusKuning from './DashboardStatusKuning';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {
  const handleSubmit = async values => {
    setLoading(true);
    await callGetUsersList(values);
  };

  const login = async value => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify({value}));
      // const tempToken = JSON.parse(await AsyncStorage.getItem('user'));
      // const tokentoken = tempToken.value.data.token;
      // console.log(tokentoken);
      if (value.data.email == 'admin1@gmail.com') {
        navigation.replace('AdminDashboard');
      } else {
        if (value.data.warna == 'HIJAU') {
          navigation.replace('DasboardStatusHijau');
        } else if (value.data.warna == 'MERAH') {
          navigation.replace('DashboardStatusMerah');
        } else if (value.data.warna == 'KUNING') {
          navigation.replace('DashboardStatusKuning');
        } else {
          navigation.replace('DashboardWaitlist');
        }
      }
    } catch (error) {
      Alert.alert('Error', 'Something Went Wrong');
    }
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
  const [showpesan, setShowpesan] = useState(false);
  const [pesanerror, setPesanerror] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowpesan(false);
    }, 1000);
  }, [showpesan]);

  const callGetUsersList = values => {
    axios
      .post('http://aldo.sutralian.online/api/auth/login', {
        email: values.email,
        password: values.password,
      })
      .then(response => {
        console.log('response', response.data);
        if (response.data) {
          let user = {};
          user = response.data;
          login(user);
        }
        return response;
      })
      .catch(error => {
        console.log('error ', error);
        if (error == 'AxiosError: Request failed with status code 401') {
          setPesanerror('Password atau email salah');
          setShowpesan(true);
          setLoading(false);
        }
      });
    // .then(response => {
    //   console.log(response.data);
    //   // navigation.replace('DasboardStatusHijau');
    // })
    // .catch(error => {

    //   console.log('Error:', error);
    // });
  };

  const navigation = useNavigation();

  const getLoader = () => {
    if (loading) {
      return <ActivityIndicator size="large"></ActivityIndicator>;
    }
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
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../assets/Logo_ITERA.png')}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              label="Email"
              value={values.email}
              onChangeText={handleChange('email')}
              style={styles.inputbutton}
              left={<TextInput.Icon icon="account" />}
              error={touched.email && errors.email}
            />
            <HelperText type="error" visible={touched.email && errors.email}>
              {errors.email}
            </HelperText>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              secureTextEntry={true}
              label="Password"
              value={values.password}
              onChangeText={handleChange('password')}
              style={styles.inputbutton}
              left={<TextInput.Icon icon="key" />}
              error={touched.password && errors.password}
            />
            <HelperText
              type="error"
              visible={touched.password && errors.password}>
              {errors.password}
            </HelperText>
          </View>
          <View style={styles.errorContainer}>
            <HelperText type="error" visible={showpesan}>
              {pesanerror}
            </HelperText>
          </View>
          <View style={styles.inputContainer}>{getLoader()}</View>
          <View style={styles.inputContainer}>
            <Button
              buttonColor="#F4D013"
              mode="contained"
              testID="loginButton"
              onPress={handleSubmit}
              disabled={!isValid}>
              <Text style={styles.fontButton}>Login</Text>
            </Button>
          </View>

          <View style={styles.inputContainer}>
            <Button
              buttonColor="#FF0000"
              testID="registerButton"
              mode="contained"
              onPress={() => navigation.navigate('Register')}>
              <Text style={styles.fontButton}>Daftar</Text>
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
  image: {
    marginBottom: 40,
    width: 100,
    height: 100,
  },
  inputContainer: {
    padding: 20,
    paddingBottom: 0,
  },
  inputbutton: {
    backgroundColor: '#fff',
    type: 'flat',
    borderBottomWidth: 1,
    textAlignVertical: 'top',
  },
  fontButton: {
    color: '#F5F5F5',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
  errorContainer: {
    alignItems: 'center',
  },
});
