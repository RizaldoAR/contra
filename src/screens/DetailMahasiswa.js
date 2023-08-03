import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {Text, Button, Appbar} from 'react-native-paper';
import FormScreeningButton from '../components/FormScreeningButton';
import HeaderBar2 from '../components/HeaderBar2';
import {LineChart} from 'react-native-chart-kit';
import LaporanButton from '../components/LaporanButton';
import FormListButton from '../components/FormListButton';
import Carddetail from '../components/Cardlist4';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function DetailMahasiswa() {
  const [loading, setLoading] = useState(true);

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
    }
  };

  const getLaporan = async () => {
    var config = {
      method: 'get',
      url: 'http://aldo.sutralian.online/api/mahasiswa/by_nim/' + id,
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    };

    axios(config)
      .then(function (response) {
        setData(response.data);

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

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <HeaderBar2 title={'Detail Mahasiswa'}></HeaderBar2>
      </View>
      <ScrollView>
        <View style={styles.containerBody}>
          {getLoader()}
          <Carddetail
            nama={data.nama_lengkap}
            nim={data.nim}
            prodi={data.program_studi}
            nik={data.nik}
            jurusan={data.jurusan}
            jeniskelamin={data.jenis_kelamin}
            ttl={data.tempat_tanggal_lahir}
            ortu={data.nama_orangtua}
            nohp1={data.no_hp_darurat_daerah}
            nohp2={data.no_hp_darurat_lampung}
            asal={data.alamat_asal}
            alamat={data.alamat_lampung}></Carddetail>
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
