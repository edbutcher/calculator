import React from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import { colors } from '../constants';

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 25
  },
  inputStyle: {
    backgroundColor: colors.INPUT_BACKGROUND,
    fontSize: 16,
    height: 40,
    width: '100%',
  },
});

export default ({ label, value }) => (
  <>
    <Text style={styles.textStyle}>{label}</Text>
    <TextInput
      style={styles.inputStyle}
      value={value}
      editable={false}
    />
  </>
);
``