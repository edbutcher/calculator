import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './CustomButton.styles';

const ACCENT = ['primary', 'secondary', 'normal'];

export default ({ title, onPress, disabled, accent }) => (
  <TouchableOpacity
    onPress={disabled ? () => {} : () => onPress(title)}
    style={{
      ...styles.button,
      ...styles[ACCENT.includes(accent) ? accent : 'normal'],
      ...styles[disabled]
    }}
    activeOpacity={disabled ? 1 : 0.5}
  >
    <Text>{title}</Text>
  </TouchableOpacity>
);
