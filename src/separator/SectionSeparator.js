/**
 * Created by youhan on 2017/10/13.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

const SectionSeparator = ({color, style, height}) => {
  return <View style={[{height, backgroundColor: color}, style]} />;
};

SectionSeparator.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number
};

SectionSeparator.defaultProps = {
  color: '#ececec',
  height: 10
};

export default SectionSeparator;
