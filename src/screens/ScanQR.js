import React, {useState} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Text, Button} from 'react-native-paper';
import HeaderBar2 from '../components/HeaderBar2';
import ScanMasuk from '../components/ScanMasuk';
import ScanKeluar from '../components/ScanKeluar';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

export default function ScanQR() {
  const [title, setTitle] = useState('SCAN QR');
  const navigation = useNavigation();

  //Date Picker
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('time');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');
  const [isValid, setIsvalid] = useState(true);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let ftime =
      tempDate.getHours() +
      ':' +
      (tempDate.getMinutes() < 10 ? '0' : '') +
      tempDate.getMinutes();
    setText(ftime);
    setIsvalid(false);
  };

  const scan = async value => {
    AsyncStorage.setItem('Jam', JSON.stringify(value));

    const waktu = await AsyncStorage.getItem('Jam');
    navigation.replace('QrScan');
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <HeaderBar2 title={title}></HeaderBar2>
      </View>
      <View style={styles.containerBody}>
        <Image style={styles.image} source={require('../assets/SCAN.png')} />
        <View style={styles.textContainer}>
          <Text style={styles.textInfo} variant="bodyMedium">
            Pilih jam kelas lalu lakukan lah scan QR sebelum memasuki ruang
            kelas
          </Text>
        </View>
        <View style={styles.menuContainer}>
          <View style={styles.FormContainer}>
            <Button
              icon="alarm"
              mode="contained"
              onPress={() => showMode('time')}>
              Pilih jam kelas dimulai
            </Button>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textInfo2}>{text}</Text>
          </View>
          <View style={styles.FormContainer}>
            <Button
              icon="qrcode-scan"
              mode="contained"
              disabled={isValid}
              onPress={() => scan(text)}>
              Scan
            </Button>
          </View>
        </View>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}></DateTimePicker>
      )}
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
    backgroundColor: '#FF0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuContainer: {
    paddingTop: 25,
    flex: 2,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  textInfo: {
    fontWeight: '300',
    fontStyle: 'normal',
  },
  textInfo2: {
    fontSize: 20,
    fontWeight: '300',
    fontStyle: 'normal',
  },
  FormContainer: {},
});
