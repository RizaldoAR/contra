import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Text} from 'react-native-paper';
import ScanButton from '../components/ScanButton';
import LaporButton from '../components/LaporButton';
import FormScreeningButton from '../components/FormScreeningButton';
import HeaderBar from '../components/HeaderBar';

export default function DashboardStatusHijau() {
  const _handleMore = () => console.log('Shown more');

  const _handleMenu = () => console.log('Menu');

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <HeaderBar></HeaderBar>
      </View>
      <View style={styles.containerBody}>
        <Image style={styles.image} source={require('../assets/SCAN.png')} />
        <View style={styles.textContainer}>
          <Text style={styles.textInfo} variant="bodyMedium">
            Lakukan Scan QR-Code sebelum masuk dan keluar ruangan kelas
          </Text>
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.textStatus} variant="headlineSmall">
            STATUS ANDA HIJAU
          </Text>
        </View>
        <View style={styles.menuContainer}>
          <View style={styles.scanContainer}>
            <ScanButton></ScanButton>
          </View>
          <View style={styles.laporContainer}>
            <LaporButton></LaporButton>
          </View>
          {/* <View style={styles.FormContainer}>
            <FormScreeningButton></FormScreeningButton>
          </View> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  containerBody: {
    flex: 2,
  },
  textContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  image: {
    height: 300,
    width: null,
  },
  statusContainer: {
    height: 83,
    backgroundColor: '#008000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuContainer: {
    flex: 2,
  },
  menuContainer: {
    paddingTop: 25,
    padding: 20,
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textStatus: {
    color: 'white',
    fontWeight: 'bold',
  },
  textInfo: {
    fontWeight: '300',
    fontStyle: 'normal',
  },
  scanContainer: {},
  laporContainer: {},
  FormContainer: {},
});
