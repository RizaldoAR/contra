import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Alert} from 'react-native';
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HeaderBar2 from '../components/HeaderBar2';

export default function ScanBerhasil() {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(async () => {
      const user = JSON.parse(await AsyncStorage.getItem('user'));
      // console.log(user.value.data.warna);
      if (user) {
        if (user.value.data.warna == 'HIJAU') {
          navigation.replace('DasboardStatusHijau');
        } else if (user.value.data.warna == 'MERAH') {
          navigation.replace('DashboardStatusMerah');
        } else if (user.value.data.warna == 'KUNING') {
          navigation.replace('DashboardStatusKuning');
        } else {
          navigation.replace('DashboardStatusWaitlist');
        }
      } else {
        Alert.alert('Silahkan login kembali');
        navigation.replace('LoginScreen');
      }
    }, 2000);
  }, []);
  const [title, setTitle] = useState('SCAN QR');
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <HeaderBar2 title={title}></HeaderBar2>
      </View>
      <View style={styles.containerBody}>
        <Image
          style={styles.image}
          source={require('../assets/berhasil.png')}
        />
        <View style={styles.textContainer}>
          <Text style={styles.textInfo} variant="bodyMedium">
            Anda <Text style={styles.berhasil}>berhasil</Text> melakukan scan
            masuk, jangan lupa melakukan scan keluar saat selesai perkuliahan
          </Text>
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
});
