import * as React from 'react';
import {TextInput} from 'react-native-paper';
import {StyleSheet} from 'react-native';

const InputEmail = () => {
  const [text, setText] = React.useState('');

  return (
    <TextInput
      label="Email"
      value={text}
      onChangeText={text => setText(text)}
      style={styles.inputContainer}
    />
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    paddingBottom: 20,
  },
});

export default InputEmail;
