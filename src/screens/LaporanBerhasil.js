import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Avatar} from 'react-native-paper';
import {Text} from 'react-native-paper';
import HeaderBar2 from '../components/HeaderBar2';

export default function LaporanBerhasil() {
  const [title, setTitle] = useState('LAPOR COVID');
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <HeaderBar2 title={title}></HeaderBar2>
        </View>
        <View style={styles.containerBody}>
          <View style={styles.containerText}>
            <Text style={styles.textInfo} variant="titleLarge">
              Laporan anda sudah diterima, mohon tunggu approve admin
            </Text>
          </View>
          <Avatar.Image
            size={350}
            source={require('../assets/LaporSukses.png')}
          />
          <View style={styles.containerTextbtm}>
            <Text style={styles.textInfo} variant="titleLarge">
              Mohon lakukan isolasi mandiri, untuk sementara anda belum boleh
              masuk perkuliahan luring
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {},
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
