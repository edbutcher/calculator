export const calc = (firstNum, secondNum, signString, isHex) => {
  if (signString === '+') {
    return (
      isHex
        ? (parseInt(firstNum, 16) + parseInt(secondNum, 16)).toString(16)
        : parseInt(firstNum) + parseInt(secondNum)
    );
  }
  if (signString === '-') {
    return (
      isHex
        ? (parseInt(firstNum, 16) - parseInt(secondNum, 16)).toString(16)
        : parseInt(firstNum) - parseInt(secondNum)
    );
  }
  if (signString === '*') {
    return (
      isHex
        ? (parseInt(firstNum, 16) * parseInt(secondNum, 16)).toString(16)
        : parseInt(firstNum) * parseInt(secondNum)
    );
  }
  if (signString === '/') {
    return (
      isHex
        ? (parseInt(firstNum, 16) / parseInt(secondNum, 16)).toString(16)
        : parseInt(firstNum) / parseInt(secondNum)
    );
  }
};
