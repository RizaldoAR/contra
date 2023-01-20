import * as React from 'react';

import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';
import {Appbar, Text, Button} from 'react-native-paper';
import FormScreeningButton from './components/FormScreeningButton';
import HeaderBar2 from './components/HeaderBar2';
import ScanMasuk from './components/ScanMasuk';
import ScanKeluar from './components/ScanKeluar';
import AuthNavigator from './navigations/AuthNavigator';
import LoginScreen from './screens/LoginScreen';
import DashBoardStatusHijau from './screens/DashboardStatusHijau';
import ScanQR from './screens/ScanQR';
import Lapor from './screens/LaporCovid';
import SplashScreen from './screens/SplashScreen';
import LaporanBerhasil from './screens/LaporanBerhasil';
import FormScreening from './screens/FormScreening';
import Register from './screens/Register';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Group>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}></Stack.Screen>
          <Stack.Screen
            name="DasboardStatusHijau"
            component={DashBoardStatusHijau}
            options={{
              headerShown: false,
            }}></Stack.Screen>
          <Stack.Screen
            name="ScanQR"
            component={ScanQR}
            options={{
              headerShown: false,
            }}></Stack.Screen>
          <Stack.Screen
            name="Lapor"
            component={Lapor}
            options={{
              headerShown: false,
            }}></Stack.Screen>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{
              headerShown: false,
            }}></Stack.Screen>
          <Stack.Screen
            name="LaporanBerhasil"
            component={LaporanBerhasil}
            options={{
              headerShown: false,
            }}></Stack.Screen>
          <Stack.Screen
            name="FormScreening"
            component={FormScreening}
            options={{
              headerShown: false,
            }}></Stack.Screen>
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerShown: false,
            }}></Stack.Screen>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: '#FD0F0F',
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
    backgroundColor: '#FF0000',
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
