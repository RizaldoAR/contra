import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Appbar, Text} from 'react-native-paper';
import HeaderBar from '../components/HeaderBar';
import {useNavigation} from '@react-navigation/native';

export default function DashboardWaitLaporan() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 10000);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <HeaderBar></HeaderBar>
      </View>
      <View style={styles.containerBody}>
        <Image
          style={styles.image}
          source={require('../assets/checking.png')}
        />
        <View style={styles.textContainer}>
          <Text variant="headlineSmall">Laporan anda sedang kami proses</Text>
          <Text variant="headlineSmall">status anda akan berubah setelah</Text>
          <Text variant="headlineSmall">approve admin</Text>
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
    flex: 1,
    alignItems: 'center',
  },
  image: {
    height: 300,
    width: null,
  },
  inputContainer: {
    padding: 20,
    paddingBottom: 0,
  },
  inputbutton: {
    backgroundColor: '#fff',
    type: 'flat',
  },
});
