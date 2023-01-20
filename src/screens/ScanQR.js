import React, {useState} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import HeaderBar2 from '../components/HeaderBar2';
import ScanMasuk from '../components/ScanMasuk';
import ScanKeluar from '../components/ScanKeluar';

export default function ScanQR() {
  const [title, setTitle] = useState('SCAN QR');
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <HeaderBar2 title={title}></HeaderBar2>
      </View>
      <View style={styles.containerBody}>
        <Image style={styles.image} source={require('../assets/SCAN.png')} />
        <View style={styles.textContainer}>
          <Text style={styles.textInfo} variant="bodyMedium">
            Lakukan Scan QR-Code sebelum masuk dan keluar ruangan kelas
          </Text>
        </View>
        <View style={styles.menuContainer}>
          <View style={styles.FormContainer}>
            <ScanMasuk></ScanMasuk>
          </View>
          <View style={styles.FormContainer}>
            <ScanKeluar></ScanKeluar>
          </View>
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
  textInfo: {
    fontWeight: '300',
    fontStyle: 'normal',
  },
  FormContainer: {},
});
