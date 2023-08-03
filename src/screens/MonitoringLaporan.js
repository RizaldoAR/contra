import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
  Touchable,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Text, Button} from 'react-native-paper';
import FormScreeningButton from '../components/FormScreeningButton';
import HeaderBar2 from '../components/HeaderBar2';
import {LineChart} from 'react-native-chart-kit';
import LaporanButton from '../components/LaporanButton';
import FormListButton from '../components/FormListButton';
import Cardlist from '../components/Cardlist3';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

export default function MonitoringLaporan() {
  const _handleMore = () => console.log('Shown more');
  const navigation = useNavigation();
  const [buttn, setButtn] = useState(false);
  const _handleMenu = () => console.log('Menu');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [token, setToken] = useState('');
  const getLoader = () => {
    if (loading) {
      return <ActivityIndicator size="large"></ActivityIndicator>;
    }
  };
  const getUsertoken = async () => {
    const user = JSON.parse(await AsyncStorage.getItem('user'));
    if (user) {
      setToken(user.value.data.token);
    }
  };
  const getLaporan = async () => {
    var config = {
      method: 'get',
      url: 'http://aldo.sutralian.online/api/laporan/monitor',
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
        if (error.response.status == 404) {
          console.log(error.response.data.messages);
          Alert.alert('Error', 'Maaf Laporan tidak ditemukan', [
            {text: 'OK', onPress: () => navigation.replace('AdminDashboard')},
          ]);
        }
      });
  };

  useEffect(() => {
    getUsertoken();
    getLaporan();
  });

  const onLaporan = async id => {
    if (id) {
      console.log(id);
      await AsyncStorage.setItem('id', JSON.stringify(id));
      navigation.navigate('DetailLaporanAdmin');
    } else {
      Alert.alert('Gagal', 'Maaf Laporan tidak tersedia', [{text: 'OK'}]);
    }
  };
  const onScreening = async id => {
    if (id) {
      console.log(id);
      await AsyncStorage.setItem('id', JSON.stringify(id));
      navigation.navigate('DetailFormKesehatanAdmin');
    } else {
      Alert.alert('Gagal', 'Maaf Laporan tidak tersedia', [{text: 'OK'}]);
    }
  };
  const onPress = async ids => {
    await AsyncStorage.setItem('id', JSON.stringify(ids));

    navigation.navigate('DetailMahasiswa');
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <HeaderBar2 title={'Monitoring'}></HeaderBar2>
      </View>
      <ScrollView>
        <View style={styles.containerBody}>{getLoader()}</View>
        <View style={styles.containerBody}>
          {data &&
            data.map(item => {
              return (
                <>
                  <TouchableOpacity
                    key={item.nim}
                    onPress={() => onPress(item.nim)}>
                    <Cardlist
                      tgl={item.tanggal_gejala}
                      nama={item.nama_lengkap}
                      nim={item.nim}
                      status={item.warna}
                      id_lapor={item.id_laporan}
                      id_screening={item.id_screening}></Cardlist>
                    <View style={styles.button}>
                      <Button
                        disabled={buttn}
                        buttonColor="red"
                        icon="clipboard-list-outline"
                        mode="contained"
                        onPress={() => onLaporan(item.id_laporan)}>
                        Laporan
                      </Button>
                    </View>
                    <View style={styles.button}>
                      <Button
                        disabled={buttn}
                        buttonColor="green"
                        icon="medical-bag"
                        mode="contained"
                        onPress={() => onScreening(item.id_screening)}>
                        Screening Kesehatan
                      </Button>
                    </View>
                  </TouchableOpacity>
                </>
              );
            })}
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
