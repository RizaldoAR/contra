import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import {Text} from 'react-native-paper';
import FormScreeningButton from '../components/FormScreeningButton';
import HeaderBar from '../components/HeaderBar';
import {LineChart} from 'react-native-chart-kit';
import LaporanButton from '../components/LaporanButton';
import FormListButton from '../components/FormListButton';
import MonitoringButton from '../components/MonitoringButton';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function AdminDashboard() {
  const _handleMore = () => console.log('Shown more');

  const _handleMenu = () => console.log('Menu');

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  const [token, setToken] = useState('');
  const [hijau, setHijau] = useState('');
  const [merah, setMerah] = useState('');
  const [kuning, setKuning] = useState('');

  const getHijau = async () => {
    var config = {
      method: 'get',
      url: 'http://aldo.sutralian.online/api/laporan/count_by_warna/HIJAU',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    };

    axios(config)
      .then(function (response) {
        setHijau(JSON.stringify(response.data.data.total).replace(/"/g, ''));
        console.log(hijau);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getMerah = async () => {
    var config = {
      method: 'get',
      url: 'http://aldo.sutralian.online/api/laporan/count_by_warna/MERAH',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    };

    axios(config)
      .then(function (response) {
        setMerah(JSON.stringify(response.data.data.total).replace(/"/g, ''));
        console.log(merah);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getKuning = async () => {
    var config = {
      method: 'get',
      url: 'http://aldo.sutralian.online/api/laporan/count_by_warna/KUNING',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    };

    axios(config)
      .then(function (response) {
        setKuning(JSON.stringify(response.data.data.total).replace(/"/g, ''));

        console.log(kuning);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getUsertoken = async () => {
    const user = JSON.parse(await AsyncStorage.getItem('user'));
    if (user) {
      setToken(user.value.data.token);
      console.log(token);
    }
  };

  useEffect(() => {
    getUsertoken();
    getHijau();
    getMerah();
    getKuning();
  });
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <HeaderBar></HeaderBar>
      </View>
      <View style={styles.containerBody}>
        <View style={styles.statuswarna}>
          <View style={styles.scanContainer}>
            <Text style={styles.nomor}>{merah}</Text>
            <Text style={styles.status}>Status Merah</Text>
          </View>
          <View style={styles.laporContainer}>
            <Text style={styles.nomor}>{kuning}</Text>
            <Text style={styles.status}>Status Kuning</Text>
          </View>
          <View style={styles.FormContainer}>
            <Text style={styles.nomor}>{hijau}</Text>
            <Text style={styles.status}>Status Hijau</Text>
          </View>
        </View>
        <View style={styles.chart}>
          <Image
            style={styles.image}
            source={require('../assets/checking.png')}
          />
          <View style={styles.textContainer}>
            <Text variant="headlineMedium">
              Selamat Datang Di Dashboard Admin
            </Text>
          </View>
          <View style={styles.menuContainer}>
            <LaporanButton></LaporanButton>
            <FormListButton></FormListButton>
            <MonitoringButton></MonitoringButton>
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
  textContainer: {
    alignItems: 'center',
  },
  image: {
    paddingHorizontal: 20,
    height: 250,
    width: null,
  },
});
