/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useMemo } from 'react';
import { View, Text, Switch, Alert } from 'react-native';

import CustomInput from './components/CustomInput';
import CustomButton from './components/CustomButton';

import { INPUT_LABELS, SIGN_BUTTON_TITLES, DIGITS_BUTTON_TITLES, HEX_BUTTON_TITLES } from './constants';
import { calc } from './utils';

import styles from './App.style';
import { buttonBaseArea } from './components/CustomButton.styles';

const ButtonsGroup = ({ titles, onPress, isHex, accent }) => (titles.map((title) => (
  <CustomButton
    key={title}
    title={title}
    onPress={() => onPress(title)}
    disabled={HEX_BUTTON_TITLES.includes(title) && !isHex}
    accent={accent}
  />
)));

const App = () => {
  const [result, setResult] = useState('0');
  const [allOperations, setAllOperations] = useState([]);
  const [currentNumber, setCurrentNumber] = useState('0');
  const [isHex, setIsHex] = useState(false);

  const resultString = useMemo(() => result.toString(), [result]);
  const allOperationsString = () => (
    allOperations.length > 0
      ? allOperations.map(({ value }) => value).join('')
      : ''
  );

  const onHexChange = (val) => {
    if(val) {
      setResult(result.toString(16));
    } else {
      setResult(parseInt(result, 16));
    };
  
    setIsHex(val);
    setAllOperations([]);
    setCurrentNumber('');
  }

  const onPressClear = () => {
    setResult(0);
    setAllOperations([]);
    setCurrentNumber('0');
  };

  const onPressDigit = value => {
    if (currentNumber === '0') {
      setCurrentNumber(value);
    } else {
      setCurrentNumber(currentNumber + value);
    }
  };

  const onPressSign = value => {
    if (currentNumber === '0') {
      return;
    };

    setAllOperations([
      ...allOperations,
      { value: currentNumber, type: 'number' },
      { value: value, type: 'sign' },
    ]);

    setCurrentNumber('0');

    if (result === '0' || allOperations.length < 2) {
      setResult(currentNumber);
    } else {
      const sign = allOperations[allOperations.length - 1].value;

      setResult(calc(result, currentNumber, sign, isHex));
    }
  };

  const onPressEquals = () => {
    if (allOperations.length > 1 && currentNumber) {
      const sign = allOperations[allOperations.length - 1].value;

      setResult(calc(result, currentNumber, sign, isHex));
      setAllOperations([]);
      setCurrentNumber('0');
    };
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <CustomInput label={INPUT_LABELS.RESULTS} value={resultString} />
        <CustomInput label={INPUT_LABELS.ALL_OPERATION} value={allOperationsString()} />
        <CustomInput label={INPUT_LABELS.CURRENT_NUMBER} value={currentNumber === '0' ? '' : currentNumber} />
      </View>

      <View style={styles.buttonsContainer}>
        <CustomButton
          title="AC"
          onPress={onPressClear}
          accent="primary"
        />
        <View style={buttonBaseArea.base}>
          <Text>dec/hex</Text>
          <Switch value={isHex} onValueChange={val => onHexChange(val)} />
        </View>
        <View style={buttonBaseArea.base} />
        <CustomButton
          title="="
          onPress={onPressEquals}
          accent="secondary"
        />
        <ButtonsGroup
          titles={SIGN_BUTTON_TITLES}
          onPress={onPressSign}
          isHex={isHex}
          accent="secondary"
        />
        <ButtonsGroup
          titles={DIGITS_BUTTON_TITLES}
          onPress={onPressDigit}
          isHex={isHex}
          accent="normal"
        />
      </View>
    </View>
  )
};

export default App;
