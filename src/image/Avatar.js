import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  TouchableOpacity,
  View
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
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 2,
  }
});

const Avatar = ({size, style, onPress, shadow, ...others}) => {
  let Comp = () => {
    return <Image style={[styles[`${size}_card`], styles.avatar, style]} {...others} />;
  };
  if (shadow) {
    Comp = () => {
      return (
        <View style={[styles[`${size}_card`], styles.avatar, styles.shadow, style]}>
          <Image style={[styles[`${size}_card`], styles.avatar, style]} {...others} />
        </View>
      );
    };
  }
  
  
  if (onPress && typeof onPress === 'function') {
    return (
      <TouchableOpacity
        onPress={onPress}
      >
        <Comp />
      </TouchableOpacity>
    );
  }
  return (
    <Comp />
  );
};


Avatar.propTypes = {
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  onPress: PropTypes.func,
  source: PropTypes.any,
  shadow: PropTypes.bool
};

Avatar.defaultProps = {
  size: 'normal',
  onPress: undefined,
  source: undefined,
  shadow: false
};

export default Avatar;
