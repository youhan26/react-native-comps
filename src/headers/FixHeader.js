/**
 * Created by youhan on 2017/8/5.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import LineSeparator from "../separator/LineSeparator";
import IMAGE from "../asserts/imageConstant";
import Image from "../image/Image";

const styles = StyleSheet.create({
  root: {
    height: 64,
    paddingTop: 20,
    backgroundColor: 'white'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  title: {
    fontSize: 16,
    color: 'rgb(102,102,102)'
  },
  left: {
    position: 'absolute',
    left: 14,
    top: 25,
  },
  leftWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
  },
  right: {
    position: 'absolute',
    right: 14,
    top: 25,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  float: {
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0
  }
});

const FixHeader = (props) => {
  const {title, float, showSeparator, leftPress} = props;
  
  return (
    <View style={[styles.root, float ? styles.float : {}, props.style]}>
      <View style={styles.container}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
      </View>
      
      <View style={styles.left}>
        <TouchableOpacity
          onPress={() => {
            leftPress && leftPress();
          }}
        >
          <View style={styles.leftWrap}>
            <Image source={IMAGE.left} />
          </View>
        </TouchableOpacity>
      </View>
      
      {props.right ?
        <View style={styles.right}>
          {props.right}
        </View> : null
      }
      {showSeparator ? <LineSeparator /> : null}
    </View>
  );
};

FixHeader.propTypes = {
  title: PropTypes.string,
  float: PropTypes.bool,
  showSeparator: PropTypes.bool,
  leftPress: PropTypes.func,
  right: PropTypes.node,
};

FixHeader.defaultProps = {
  title: ' ',
  float: false,
  showSeparator: false,
  leftPress: undefined,
  right: undefined
};

export default FixHeader;
