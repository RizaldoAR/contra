import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {Button, Text} from 'react-native-paper';
import HeaderBar2 from '../components/HeaderBar2';
import ScanMasuk from '../components/ScanMasuk';
import ScanKeluar from '../components/ScanKeluar';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function LaporCovid() {
  const [title] = useState('FORM SCREENING');

  //Date Picker
  //   const [date, setDate] = useState(new Date());
  //   const [mode, setMode] = useState('date');
  //   const [show, setShow] = useState(false);
  //   const [text, setText] = useState('');
  //   const [text2, setText2] = useState('');

  //   const onChange = (event, selectedDate) => {
  //     const currentDate = selectedDate || date;
  //     setDate(currentDate);
  //     setShow(Platform.OS === 'ios');
  //     setDate(currentDate);

  //     let tempDate = new Date(currentDate);
  //     let fDate =
  //       tempDate.getDate() +
  //       '/' +
  //       (tempDate.getMonth() + 1) +
  //       '/' +
  //       tempDate.getFullYear();
  //     setText(fDate);

  //     console.log(fDate);
  //   };

  //   const showMode = currentMode => {
  //     setShow(true);
  //     setMode(currentMode);
  //   };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <HeaderBar2 title={title}></HeaderBar2>
      </View>
      <View style={styles.containerBody}>
        <View style={styles.textContainer}>
          <Text style={styles.textInfo} variant="bodyMedium">
            Mohon lampirkan bukti hasil test Rapid Antigen / PCR Swab Tes yang
            masih berlaku
          </Text>
        </View>
        <View style={styles.Button}>
          <Button
            icon="upload"
            mode="contained"
            onPress={() => console.log('pressed')}>
            Upload File
          </Button>
        </View>
        <View style={styles.Button}>
          <Button
            style={styles.Lapor}
            mode="contained"
            onPress={() => console.log('pressed')}>
            <Text style={styles.LaporText}>SUBMIT</Text>
          </Button>
        </View>
      </View>
      {/* {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}></DateTimePicker>
      )} */}
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
    backgroundColor: '#008000',
  },
  LaporText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
