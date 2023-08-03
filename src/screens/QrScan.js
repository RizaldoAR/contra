import {useState, useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import {useCameraDevices} from 'react-native-vision-camera';
import {Camera} from 'react-native-vision-camera';
import {useScanBarcodes, BarcodeFormat} from 'vision-camera-code-scanner';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function QrScan() {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(false);
  const devices = useCameraDevices();
  const device = devices.back;

  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
    checkInverted: true,
  });
  const [barcode, setBarcode] = useState('');
  const [isScanned, setIscanned] = useState(false);
  const [isCameraActive, setCameraActive] = useState(true);
  const [idruang, setIdruang] = useState('');

  const onScanned = barcode => {
    // axios
    //   .get(barcode)
    //   .then(response => {
    //     console.log('Response', response?.data);
    //     navigation.replace('ScanBerhasil');
    //   })
    //   .catch(error => {
    //     console.log('Error:', error);
    //   });
  };

  // Alternatively you can use the underlying function:
  //
  // const frameProcessor = useFrameProcessor((frame) => {
  //   'worklet';
  //   const detectedBarcodes = scanBarcodes(frame, [BarcodeFormat.QR_CODE], { checkInverted: true });
  //   runOnJS(setBarcodes)(detectedBarcodes);
  // }, []);

  const masuk = value => {
    if (isScanned == false) {
      setIscanned(true);
      setCameraActive(false);
      // getUsertoken();
      scanQRcode(value);
    }
  };

  const [token, setToken] = useState('');
  const [jam, setJam] = useState('');
  const getUsertoken = async () => {
    const user = JSON.parse(await AsyncStorage.getItem('user'));
    if (user) {
      setToken(user.value.data.token);
      console.log(token);
    }
  };

  const scanQRcode = value => {
    console.log(value);
    const id = value;
    const param = {
      ruang_id: id,
      waktu: jam,
    };

    const config = {
      method: 'post',
      url: 'http://aldo.sutralian.online/api/laporan/tracing',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
        Cookie: 'ci_session=l7oe8j8o3rgotu0r5j1d3pqai3suerlr',
      },
      data: param,
    };

    axios(config)
      .then(response => {
        console.log(response);
        console.log('berhasil');
        navigation.replace('ScanBerhasil');
      })
      .catch(error => {
        console.log(error.response.data);
        setCameraActive(true);
        setIscanned(false);
      });

    // axios
    //   .post(
    //     'https://1411-2001-448a-1150-32de-65d1-161-3da6-300a.ap.ngrok.io/api/laporan/tracing',
    //     {
    //       headers: {
    //         Authorization:
    //           'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODEvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2Nzc3NDE1MTksImV4cCI6MTY3Nzk1NzUxOSwibmJmIjoxNjc3NzQxNTE5LCJqdGkiOjE2Nzc3NDE1MTksInVzZXIiOnsiZW1haWwiOiJyaXphbGRvMS4xNDExNzE1MkBzdHVkZW50Lml0ZXJhLmFjLmlkIiwibmltIjoiMjQyMyJ9fQ.If6FjrNscsmfTCVjQGaYQAZWVh6y0KRqjHfeQuROj5o',
    //         'Content-Type': 'application/json',
    //         Cookie: 'ci_session=hm7n8a74nmusemg4jtpqtokrdqtbeacq',
    //       },

    //       params: {
    //         ruang_id: values,
    //         waktu: '08:00:00',
    //       },
    //     },
    //   )
    //   .then(response => {
    //     console.log('response', response.data);
    //     if (response.data) {
    //       console.log('berhasil');
    //     }
    //     return response;
    //   })
    //   .catch(error => {
    //     console.log('error ', error);
    //   });
  };

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
      var Jam = await AsyncStorage.getItem('Jam');
      Jam = Jam.replaceAll('"', '');
      setJam(Jam);
      getUsertoken();
    })();
  }, []);

  return (
    device != null &&
    hasPermission && (
      <>
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={isCameraActive}
          frameProcessor={frameProcessor}
          frameProcessorFps={5}
        />
        {barcodes.map((barcode, idx) => masuk(barcode.displayValue))}
      </>
    )
  );
}

const styles = StyleSheet.create({
  barcodeTextURL: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
