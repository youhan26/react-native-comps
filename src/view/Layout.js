import React from 'react';
import {View, StyleSheet} from 'react-native';

export const Row = ({style, ...others}) => {
  return (
    <View style={[styles.row, style]} {...others} />
  );
};


export const Col = ({style, ...others}) => {
  return (
    <View style={[styles.col, style]} {...others} />
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  col: {
    flexDirection: 'column',
    justifyContent: 'center'
  }
});