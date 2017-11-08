import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet
} from 'react-native';
import Image from "./Image";


const styles = StyleSheet.create({
  avatar: {},
  small_card: {
    width: 32,
    height: 32,
    borderRadius: 16
  },
  normal_card: {
    width: 48,
    height: 48,
    borderRadius: 24
  },
  large_card: {
    width: 70,
    height: 70,
    borderRadius: 35
  }
});

const Avatar = ({size, source, style, ...others}) => {
  if (source) {
    return (
      <Image style={[styles[`${size}_card`], styles.avatar, style]} {...others} />
    );
  }
  return (
    <View style={[styles[`${size}_card`], styles.avatar, style]} {...others} />
  );
};


Avatar.propTypes = {
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  source: PropTypes.any,
};

Avatar.defaultProps = {
  size: 'normal',
  source: undefined,
};

export default Avatar;
