import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Text} from 'react-native-paper';
import LaporButton from '../components/LaporButton';
import FormScreeningButton from '../components/FormScreeningButton';
import HeaderBar from '../components/HeaderBar';

export default function DashBoardStatusKuning() {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <HeaderBar></HeaderBar>
      </View>
      <View style={styles.containerBody}>
        <Image
          style={styles.image}
          source={require('../assets/statuskuning.png')}
        />
        <View style={styles.textContainer}>
          <Text style={styles.textInfo} variant="bodyMedium">
            Anda terindikasi covid-19 (kontak erat) silahkan lakukan test
            PCR/Antigen dan laporkan hasilnya pada aplikasi
          </Text>
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.textStatus} variant="headlineSmall">
            STATUS ANDA KUNING
          </Text>
        </View>
        <View style={styles.menuContainer}>
          <View style={styles.laporContainer}>
            <LaporButton></LaporButton>
          </View>
          <View style={styles.FormContainer}>
            <FormScreeningButton></FormScreeningButton>
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
    backgroundColor: '#D8D80E',
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
    fontWeight: '300',
    fontStyle: 'normal',
  },
  scanContainer: {},
  laporContainer: {},
  FormContainer: {},
});
