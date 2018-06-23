/**
 * Created by youhan on 2017/10/13.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, ViewPropTypes} from 'react-native';

const LineSeparator = ({style, color}) => {
  return <View style={[{borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: color}, style]} />;
};

LineSeparator.propTypes = {
  color: PropTypes.string,
  style: ViewPropTypes.style,
};

LineSeparator.defaultProps = {
  color: '#b6b6b6'
};

export default LineSeparator;
