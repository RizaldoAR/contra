import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {Text, Button} from 'react-native-paper';
import FormScreeningButton from '../components/FormScreeningButton';
import HeaderBar2 from '../components/HeaderBar2';
import {LineChart} from 'react-native-chart-kit';
import LaporanButton from '../components/LaporanButton';
import FormListButton from '../components/FormListButton';
import Carddetail from '../components/Carddetail';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function DetailLaporanAdmin() {
  const [loading, setLoading] = useState(true);
  const [buttn, setButtn] = useState(true);
  const [data, setData] = useState([]);
  const [id, setId] = useState([]);
  const [token, setToken] = useState('');
  const getLoader = () => {
    if (loading) {
      return <ActivityIndicator size="large"></ActivityIndicator>;
    }
  };
  const _handleMore = () => console.log('Shown more');
  const navigation = useNavigation();
  const _handleMenu = () => console.log('Menu');
  const getUsertoken = async () => {
    const user = JSON.parse(await AsyncStorage.getItem('user'));
    const mhs = JSON.parse(await AsyncStorage.getItem('id'));
    if (user) {
      setToken(user.value.data.token);
      setId(mhs);
      if (data.status == 'process') {
        setButtn(false);
      }
    }
  };

  const getLaporan = async () => {
    var config = {
      method: 'get',
      url: 'http://aldo.sutralian.online/api/laporan/laporan_by_id/' + id,
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    };

    axios(config)
      .then(function (response) {
        setData(response.data.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getUsertoken();
    getLaporan();
  });

  onDeclined = sts => {
    if (sts == 'process') {
      setLoading(true);
      var data = JSON.stringify({
        status: 'declined',
      });

      var config = {
        method: 'post',
        url: 'http://aldo.sutralian.online/api/laporan/update_laporan/' + id,
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          Alert.alert('Berhasil', 'Laporan telah terdeclined', [
            {text: 'OK', onPress: () => navigation.replace('LaporanAdmin')},
          ]);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    if (sts == 'approved') {
      console.log('Error');
    }
    if (sts == 'declined') {
      console.log('Already Declined');
    }
  };
  onApprove = sts => {
    if (sts == 'process') {
      setLoading(true);
      var data = JSON.stringify({
        status: 'approved',
      });

      var config = {
        method: 'post',
        url: 'http://aldo.sutralian.online/api/laporan/update_laporan/' + id,
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          Alert.alert('Berhasil', 'Laporan telah terapprove', [
            {text: 'OK', onPress: () => navigation.replace('LaporanAdmin')},
          ]);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    if (sts == 'approved') {
      console.log('Already Declined');
    }
    if (sts == 'declined') {
      console.log('Error');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <HeaderBar2 title={'Detail Laporan Covid'}></HeaderBar2>
      </View>
      <ScrollView>
        <View style={styles.containerBody}>
          {getLoader()}
          <Carddetail
            tgl={data.tanggal_gejala}
            nama={data.nama_lengkap}
            nim={data.nim}
            status={data.status}
            gambar={
              'http://aldo.sutralian.online/api' + data.hasil_test_rapid
            }></Carddetail>
          <View style={styles.button}>
            <Button
              disabled={buttn}
              buttonColor="green"
              icon="check-circle"
              mode="contained"
              onPress={() => onApprove(data.status)}>
              Approve
            </Button>
          </View>
          <View style={styles.button}>
            <Button
              disabled={buttn}
              buttonColor="red"
              icon="close-circle-outline"
              mode="contained"
              onPress={() => onDeclined(data.status)}>
              Declined
            </Button>
          </View>
        </View>
      </ScrollView>
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
  button: {
    padding: 10,
  },
});
