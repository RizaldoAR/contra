import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Appbar} from 'react-native-paper';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

export default function Cardlist4(props) {
  const _handleMore = () => console.log('Shown more');

  const _handleMenu = () => console.log('Menu');
  const navigation = useNavigation();

  return (
    <Card style={styles.box}>
      <Card.Content style={styles.content}>
        <Title>Nama Lengkap : {props.nama} </Title>
        <Title>NIM : {props.nim} </Title>
        <Title>Program Studi : {props.prodi} </Title>
        <Title>NIK : {props.nik} </Title>
        <Title>Jurusan : {props.jurusan} </Title>
        <Title>Jenis Kelamin : {props.jeniskelamin} </Title>
        <Title>TTL : {props.ttl} </Title>
        <Title>Orang Tua : {props.ortu} </Title>
        <Title>No HP Darurat Daerah : {props.nohp1} </Title>
        <Title>No HP Darurat Lpg : {props.nohp2} </Title>
        <Title>Alamat Asal : {props.asal} </Title>
        <Title>Alamat Lampung : {props.alamat} </Title>
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
