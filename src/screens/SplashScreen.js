import {StackActions, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Avatar} from 'react-native-paper';
import {Text} from 'react-native-paper';
import HeaderBar2 from '../components/HeaderBar2';

export default function SplashScreen() {
  const [title, setTitle] = useState('LAPOR COVID');
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerBody}>
        <Image
          style={styles.stretch}
          source={require('../assets/SplashScreen.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  stretch: {
    width: 200,
    height: 40,
    resizeMode: 'stretch',
  },
  appbarHeader: {
    flex: 1,
    flexDirection: 'row',
  },
  appbarMenu: {
    flex: 1,
    justifyContent: 'center',
  },
  appbarLogo: {
    flex: 2,
    justifyContent: 'center',
  },
  appbarNotif: {
    flex: 6,
    flexDirection: 'row-reverse',
  },
  logo: {
    width: 100,
    height: 100,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  containerBody: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  image: {
    height: 100,
    width: 100,
  },
  statusContainer: {
    height: 83,
    backgroundColor: 'F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuContainer: {
    paddingTop: 25,
    flex: 2,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textStatus: {
    color: 'white',
    fontWeight: 'bold',
  },
  textInfo: {
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: 'white',
    fontSize: 24,
  },
  scanContainer: {},
  laporContainer: {},
  FormContainer: {},
  button: {
    width: 80,
    height: 80,
    borderRadius: 5,
    borderWidth: 0.5,
  },
  textButton: {
    fontSize: 10,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  berhasil: {
    color: 'green',
    fontWeight: 'bold',
  },
  containerText: {
    paddingBottom: 50,
  },
  containerTextbtm: {
    paddingTop: 50,
  },
});
