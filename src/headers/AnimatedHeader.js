/**
 * Created by youhan on 2017/8/4.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Animated,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text
} from 'react-native';
import UTILS from '../../utils/index';
import IMAGE from '../../constants/images';
import Separator from '../public/Separator';

const {width} = Dimensions.get('window');


const styles = StyleSheet.create({
  root: {
    height: 64,
    width,
    paddingTop: 20
  },
  container: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  title: {
    fontSize: 16,
    backgroundColor: '#666666'
  },
  left: {
    position: 'absolute',
    left: 14,
    top: 25,
  },
  right: {
    position: 'absolute',
    right: 14,
    top: 25,
  },
  leftBg: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: 16,
  }
});

const AnimatedHeader = (props) => {
  const {title, scrollY, scrollHeight} = props;
  
  this.rootBg = scrollY.interpolate({
    inputRange: [0, scrollHeight],
    outputRange: ['transparent', 'white'],
    extrapolate: 'clamp'
  });
  
  this.up = scrollY.interpolate({
    inputRange: [0, scrollHeight],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  });
  this.down = scrollY.interpolate({
    inputRange: [0, scrollHeight],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  });
  
  this.leftBg = scrollY.interpolate({
    inputRange: [0, scrollHeight],
    outputRange: ['rgba(26,26,26,0.6)', 'white'],
    extrapolate: 'clamp'
  });
  
  return (
    <Animated.View
      style={[styles.root, {backgroundColor: this.rootBg}, props.style]}
    >
      <View style={styles.container}>
        <Animated.Text style={{opacity: this.up, fontSize: 18, color: '#666'}}>{title}</Animated.Text>
      </View>
      
      <Animated.View style={[styles.left]}>
        <TouchableOpacity
          onPress={() => {
            UTILS.navigator.goBack();
          }}
        >
          <Animated.View
            style={[styles.leftBg, {backgroundColor: this.leftBg}]}
          >
            <Animated.Image source={IMAGE.basic.leftWhite} style={{opacity: this.down}} />
            <Animated.Image source={IMAGE.basic.left} style={{opacity: this.up, position: 'absolute'}} />
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>
      
      <Animated.View
        style={[styles.right]}
      >
      </Animated.View>
      
      <Animated.View style={{opacity: this.up}}>
        <Separator />
      </Animated.View>
    </Animated.View>
  );
};

AnimatedHeader.propTypes = {
  scrollHeight: PropTypes.number,
  title: PropTypes.string
};

AnimatedHeader.defaultProps = {
  scrollHeight: 250,
  title: ' '
};

export default AnimatedHeader;
