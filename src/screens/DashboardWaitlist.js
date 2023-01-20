import {StyleSheet, View, Image} from 'react-native';
import {Text} from 'react-native-paper';
import HeaderBar from '../components/HeaderBar';

export default function DashboardWaitlist() {
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
