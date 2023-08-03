import React from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import {Text} from 'react-native-paper';
import FormScreeningButton from '../components/FormScreeningButton';
import HeaderBar2 from '../components/HeaderBar2';
import {LineChart} from 'react-native-chart-kit';
import LaporanButton from '../components/LaporanButton';
import FormListButton from '../components/FormListButton';

export default function FormScreeningList() {
  const _handleMore = () => console.log('Shown more');

  const _handleMenu = () => console.log('Menu');

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <HeaderBar2 title={'Form Screening List'}></HeaderBar2>
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
  statuswarna: {
    paddingTop: 25,
    padding: 20,
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  menuContainer: {
    flex: 3,
    paddingTop: 25,
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
  scanContainer: {
    flex: 1,
    backgroundColor: '#F44336',
    justifyContent: 'space-evenly',
  },
  laporContainer: {
    flex: 1,
    backgroundColor: '#FFC700',
    marginHorizontal: 10,
    justifyContent: 'space-around',
  },
  FormContainer: {
    flex: 1,
    backgroundColor: '#008000',
    justifyContent: 'space-around',
  },
  chart: {
    flex: 8,
  },
  nomor: {
    fontFamily: 'Poppins',
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 36,
  },
  status: {
    fontFamily: 'Poppins',
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 12,
  },
});
