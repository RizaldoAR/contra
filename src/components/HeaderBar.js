import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Appbar} from 'react-native-paper';

export default function HeaderBar() {
  const _handleMore = () => console.log('Shown more');

  const _handleMenu = () => console.log('Menu');

  return (
    <View style={styles.containerHeader}>
      <Appbar.Header>
        <View style={styles.appbarHeader}>
          <View style={styles.appbarMenu}>
            <Appbar.Action icon="menu" onPress={_handleMenu} />
          </View>
          <View style={styles.appbarLogo}>
            <TouchableOpacity>
              <Image source={require('../assets/CONTRA.png')}></Image>
            </TouchableOpacity>
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
});
