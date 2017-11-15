import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';

export const Row = ({style, position, ...others}) => {
  return (
    <View style={[styles.row, position ? styles[position] : {}, style]} {...others} />
  );
};

Row.propTypes = {
  position: PropTypes.oneOf(['center', 'left', 'right'])
};

Row.defaultProps = {
  position: null
};

export const Col = ({style, position, ...others}) => {
  return (
    <View style={[styles.col, position ? styles[position] : {}, style]} {...others} />
  );
};

Col.propTypes = {
  position: PropTypes.oneOf(['center', 'left', 'right'])
};

Col.defaultProps = {
  position: null
};


const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  col: {
    flexDirection: 'column',
    flex: 1
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
  
  },
  right: {
  
  }
});