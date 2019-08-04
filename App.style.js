import { StyleSheet } from 'react-native';
import { colors } from './constants';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    backgroundColor: colors.CONTAINER_MAIN,
    padding: 8,
    paddingTop: 25,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    backgroundColor: colors.CONTAINER_MAIN,
  },
  buttonsContainer: {
    flex: 2,
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    // justifyContent: 'flex-start'
  },
});

export default style;
