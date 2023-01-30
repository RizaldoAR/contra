import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import HeaderBar2 from '../components/HeaderBar2';

export default function ScanBerhasil() {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('DasboardStatusHijau');
    }, 2000);
  }, []);
  const [title, setTitle] = useState('SCAN QR');
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <HeaderBar2 title={title}></HeaderBar2>
      </View>
      <View style={styles.containerBody}>
        <Image
          style={styles.image}
          source={require('../assets/berhasil.png')}
        />
        <View style={styles.textContainer}>
          <Text style={styles.textInfo} variant="bodyMedium">
            Anda <Text style={styles.berhasil}>berhasil</Text> melakukan scan
            masuk, jangan lupa melakukan scan keluar saat selesai perkuliahan
          </Text>
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
});
