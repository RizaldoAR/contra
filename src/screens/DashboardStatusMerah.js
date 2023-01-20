import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Text} from 'react-native-paper';
import FormScreeningButton from '../components/FormScreeningButton';
import HeaderBar from '../components/HeaderBar';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <HeaderBar></HeaderBar>
      </View>
      <View style={styles.containerBody}>
        <Image
          style={styles.image}
          source={require('../assets/statusmerah.png')}
        />
        <View style={styles.textContainer}>
          <Text style={styles.textInfo} variant="bodyMedium">
            Anda positif covid-19 anda dilarang mengikuti perkuliahan secara
            luring silahkan lakukan isolasi mandiri dan menghubungi rumah sakit
            sekitar
          </Text>
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.textStatus} variant="headlineSmall">
            STATUS ANDA MERAH
          </Text>
        </View>
        <View style={styles.menuContainer}>
          <View style={styles.FormContainer}>
            <FormScreeningButton></FormScreeningButton>
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
  },
  textStatus: {
    color: 'white',
    fontWeight: 'bold',
  },
  textInfo: {
    fontWeight: '300',
    fontStyle: 'normal',
  },
  scanContainer: {},
  laporContainer: {},
  FormContainer: {},
});
