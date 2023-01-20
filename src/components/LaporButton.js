import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function LaporButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Lapor')}>
      <View style={styles.buttonContainer}>
        <Icon name="bullhorn" size={30} color="#000000" />
        <Text style={styles.textButton}>Lapor</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 80,
    borderRadius: 5,
    borderWidth: 0.5,
  },
  textButton: {
    fontSize: 10,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
