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
import {Text} from 'react-native-paper';
import FormScreeningButton from '../components/FormScreeningButton';
import HeaderBar2 from '../components/HeaderBar2';
import {LineChart} from 'react-native-chart-kit';
import LaporanButton from '../components/LaporanButton';
import FormListButton from '../components/FormListButton';
import Cardlist2 from '../components/Cardlist2';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

export default function FormScreeningAdmin() {
  const _handleMore = () => console.log('Shown more');
  const navigation = useNavigation();
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
      url: 'http://aldo.sutralian.online/api/laporan/all_screening',
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

  const onPress = async ids => {
    console.log(ids);
    await AsyncStorage.setItem('id', JSON.stringify(ids));
    navigation.navigate('DetailFormKesehatanAdmin');
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <HeaderBar2 title={'Form Screening Kesehatan'}></HeaderBar2>
      </View>
      <ScrollView>
        <View style={styles.containerBody}>{getLoader()}</View>
        <View style={styles.containerBody}>
          {data &&
            data.map((item, i) => {
              return (
                <>
                  {console.log(item.sertifikat_vaksin)}
                  <TouchableOpacity
                    key={item.id_screening}
                    onPress={() => onPress(item.id_screening)}>
                    <Cardlist2
                      tgl={item.tanggal}
                      nama={item.nama_lengkap}
                      nim={item.nim}
                      status={item.status}
                      gambar={
                        'http://aldo.sutralian.online/api' +
                        item.hasil_test_rapid
                      }
                      gambar2={
                        'http://aldo.sutralian.online/api' +
                        item.sertifikat_vaksin
                      }></Cardlist2>
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
});
