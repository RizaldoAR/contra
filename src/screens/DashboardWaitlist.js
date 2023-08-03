import {StyleSheet, View, Image} from 'react-native';
import {Text} from 'react-native-paper';
import HeaderBar from '../components/HeaderBar';
import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';

export default function DashboardWaitlist() {
  const navigation = useNavigation();

  const [status, setStatus] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 30000);
  });
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <HeaderBar></HeaderBar>
      </View>
      <View style={styles.containerBody}>
        <Image
          style={styles.image}
          source={require('../assets/checking.png')}
        />
        <View style={styles.textContainer}>
          <Text variant="headlineSmall">Silahkan tunggu hasil screening</Text>
          <Text variant="headlineSmall"> kesehatan dari admin</Text>
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
    flex: 1,
    alignItems: 'center',
  },
  image: {
    height: 300,
    width: null,
  },
});
