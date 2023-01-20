import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Appbar, Text} from 'react-native-paper';

export default function HeaderBar2({title}) {
  const _handleMore = () => console.log('Shown more');

  const _handleMenu = () => console.log('Menu');
  const navigation = useNavigation();

  return (
    <View style={styles.containerHeader}>
      <Appbar.Header>
        <View style={styles.appbarHeader}>
          <View style={styles.appbarMenu}>
            <Appbar.BackAction onPress={() => navigation.goBack()} />
          </View>
          <View style={styles.textTitle}>
            <Text style={styles.titleFont} variant="headlineMedium">
              {title}
            </Text>
          </View>
          <View style={styles.appbarNotif}>
            <Appbar.Action icon="bell" onPress={_handleMore} />
          </View>
        </View>
      </Appbar.Header>
    </View>
  );
}

const styles = StyleSheet.create({
  appbarHeader: {
    flex: 1,
    flexDirection: 'row',
  },
  appbarMenu: {
    flex: 1,
    justifyContent: 'center',
  },
  appbarLogo: {
    flex: 2,
    justifyContent: 'center',
  },
  appbarNotif: {
    flex: 6,
    flexDirection: 'row-reverse',
  },
  textTitle: {
    paddingLeft: 10,
    justifyContent: 'center',
  },
  titleFont: {
    fontWeight: 'bold',
  },
});
