import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Appbar} from 'react-native-paper';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

export default function Carddetail(props) {
  const _handleMore = () => console.log('Shown more');

  const _handleMenu = () => console.log('Menu');

  onDeclined = sts => {
    if (sts == process) {
      console.log('Berhasil');
    }
  };
  return (
    <Card style={styles.box}>
      <Card.Content style={styles.content}>
        <Title>Tanggal Gejala : {props.tgl} </Title>
        <Title>Nama : {props.nama} </Title>
        <Title>NIM : {props.nim} </Title>
      </Card.Content>
      <Card.Cover style={styles.image} source={{uri: props.gambar}} />
      <Card.Content>
        <Title style={styles.status}>Status : {props.status} </Title>
      </Card.Content>

      <Card.Actions style={styles.action}></Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'column',
  },

  image: {
    height: 400,

    borderWidth: 0.5,
  },
  box: {
    marginTop: 10,
    marginHorizontal: 10,
    borderWidth: 1,
  },
  button: {
    marginHorizontal: 40,
  },
  action: {
    display: 'flex',
    margin: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
