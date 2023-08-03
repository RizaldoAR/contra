import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';
import {Button, Text} from 'react-native-paper';
import HeaderBar2 from '../components/HeaderBar2';
import ScanMasuk from '../components/ScanMasuk';
import ScanKeluar from '../components/ScanKeluar';
import DateTimePicker from '@react-native-community/datetimepicker';
import {launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LaporCovid() {
  const navigation = useNavigation();
  const [title] = useState('LAPOR COVID');
  const [imagepath, setImagepath] = useState('');
  const [token, setToken] = useState('');
  const [image, setImage] = useState('');

  // TOKEN CALL
  useEffect(() => {
    (async () => {
      await getUsertoken();
      console.log(token);
    })();
  }, []);

  const getUsertoken = async () => {
    const user = JSON.parse(await AsyncStorage.getItem('user'));
    if (user) {
      setToken(user.value.data.token);
      console.log(token);
    }
  };

  //Upload Image
  const [text2, setText2] = useState('');
  const options = {
    title: 'Select Image',
    type: 'library',
    options: {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    },
  };
  const openGallery = async () => {
    const images = await launchImageLibrary(options);
    setImage(images);
    var namafile = images.assets[0].fileName;
    var new_namafile = namafile.replace('rn_image_picker_lib_temp_', '');
    setText2(new_namafile);
    // console.log(images.assets[0].fileName);
  };

  //Date Picker
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');
  const [status, setStatus] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getFullYear() +
      '-' +
      (tempDate.getMonth() + 1) +
      '-' +
      tempDate.getDate();
    setText(fDate);

    console.log(fDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  // Lapor

  const upLaporan = async path => {
    const param = {
      tanggal_gejala: text,
      hasil_test_rapid: path,
    };
    console.log(param);
    const config = {
      method: 'post',
      url: 'http://aldo.sutralian.online/api/laporan/lapor',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
        Cookie: 'ci_session=4m45tnudn920v8e85qdqhj6h12pa2f0o',
      },
      data: param,
    };

    console.log(param);
    console.log(token);

    axios(config)
      .then(response => {
        console.log(response);
        console.log('berhasil');
        navigation.replace('LaporanBerhasil');
      })
      .catch(error => {
        console.log(error.response.data);
        // Alert.alert('Error', error);
        // navigation.replace('Lapor');
      });
  };

  const Lapor = async () => {
    getUsertoken;
    const formdata = new FormData();
    formdata.append('image', {
      uri: image.assets[0].uri,
      type: image.assets[0].type,
      name: image.assets[0].fileName,
    });

    await axios
      .post('http://aldo.sutralian.online/api/upload', formdata, {
        headers: {'Content-Type': 'multipart/form-data'},
      })
      .then(res => {
        console.log(res.data.data.file_path);

        getUsertoken();

        if (res.status == 201) {
          upLaporan(res.data.data.file_path);
        }
      })
      .catch(err => {
        console.log(err.response);
      });
    console.log(status);
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <HeaderBar2 title={title}></HeaderBar2>
      </View>
      <View style={styles.containerBody}>
        <View style={styles.textContainer}>
          <Text style={styles.textInfo} variant="bodyMedium">
            Tanggal Muncul Gejala :
          </Text>
          <Text>{text}</Text>
        </View>
        <View style={styles.Button}>
          <Button
            icon="calendar"
            mode="contained"
            onPress={() => showMode('date')}>
            Press me
          </Button>
        </View>
        <View style={styles.textContainer2}>
          <Text style={styles.textInfo} variant="bodyMedium">
            Mohon lampirkan bukti hasil test Rapid Antigen / PCR swab tes
            POSITIF Covid-19 :
          </Text>
          <Text>{text2}</Text>
        </View>
        <View style={styles.Button}>
          <Button icon="upload" mode="contained" onPress={openGallery}>
            Upload File
          </Button>
        </View>
        <View style={styles.Button}>
          <Button style={styles.Lapor} mode="contained" onPress={Lapor}>
            <Text style={styles.LaporText}>LAPOR</Text>
          </Button>
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
    paddingTop: 20,
  },
  textContainer: {
    flexDirection: 'row',
    paddingBottom: 20,
    paddingLeft: 10,
  },
  textContainer2: {
    flexDirection: 'column',
    paddingBottom: 20,
    paddingLeft: 10,
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
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textInfo: {
    fontWeight: '300',
    fontStyle: 'normal',
  },
  FormContainer: {},
  Button: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  Lapor: {
    backgroundColor: 'red',
  },
  LaporText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
