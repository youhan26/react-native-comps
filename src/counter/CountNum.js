/**
 * Created by youhan on 2017/9/4.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  text: {
    width: 40,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    color: '#1a1a1a',
    fontSize: 16,
    height: 32,
    lineHeight: 32,
    textAlign: 'center'
  },
  btn: {
    backgroundColor: '#e6e6e6',
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

/**
 * @param text
 * @param onPress
 * @param disabled
 * @returns {XML}
 * @constructor
 */
const CountBtn = ({text, onPress, disabled, style}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
    >
      <View style={[styles.btn, style]}>
        <Text style={{color: disabled ? '#acacac' : 'black', fontSize: 16}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

CountBtn.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  disabled: PropTypes.bool
};

CountBtn.defaultProps = {
  onPress: () => {},
  disabled: false
};


/**
 * CountNum
 */
const CountNum = ({value, min, max, onChange, style, buttonStyle}) => {
  const minus = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };
  
  const add = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };
  
  return (
    <View style={[{flexDirection: 'row', alignItems: 'center'}, style]}>
      <CountBtn
        text={'-'}
        onPress={minus}
        disabled={value <= min}
        style={buttonStyle}
      />
      <Text style={styles.text}>{value}</Text>
      <CountBtn
        text={'+'}
        onPress={add}
        disabled={value >= max}
        style={buttonStyle}
      />
    </View>
  );
};

CountNum.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
};

CountNum.defaultProps = {
  value: 1,
  onChange: () => {
    
  },
  min: 1,
  max: 100000
};

export default CountNum;
