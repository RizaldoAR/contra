import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Appbar} from 'react-native-paper';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

export default function Cardlist3(props) {
  const _handleMore = () => console.log('Shown more');

  const _handleMenu = () => console.log('Menu');
  const navigation = useNavigation();

  return (
    <Card style={styles.box}>
      <Card.Content style={styles.content}>
        <Title>Tanggal : {props.tgl} </Title>
        <Title>Nama : {props.nama} </Title>
        <Title>NIM : {props.nim} </Title>
        <Title>status : {props.status} </Title>
        <Title>Id Lapor : {props.id_lapor} </Title>
        <Title>Id Screening Kesehatan : {props.id_screening} </Title>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'column',
  },

  image: {
    resizeMode: 'stretch',
    borderWidth: 0.5,
  },
  box: {
    marginTop: 10,
    marginHorizontal: 10,
    borderWidth: 1,
  },
});
