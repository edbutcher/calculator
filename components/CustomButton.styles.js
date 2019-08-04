import { StyleSheet } from 'react-native';
import { colors } from '../constants';

const base = {
  width: '23%',
  height: '15%',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 8,
};

export const buttonBaseArea = StyleSheet.create({ base: base });

export default StyleSheet.create({
  button: {
    ...base,
    borderColor: colors.BLACK,
    borderWidth: 1,
  },
  primary: {
    backgroundColor: colors.PRIMARY,
  },
  secondary: {
    backgroundColor: colors.SECONDARY,
  },
  normal: {
    backgroundColor: colors.NORMAL,
  },
  true: {
    backgroundColor: colors.GREY,
  }
});