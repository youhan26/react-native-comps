import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from 'react-native';
import COLOR from "../asserts/colorConstant";


const Button = ({title, children, border, titleStyle, borderType, size, style, ...others}) => {
  return (
    <TouchableOpacity
      {...others}
    >
      <View style={[
        styles.root,
        border ? (borderType ? styles[`${borderType}Border`] : styles.solidBorder) : {},
        styles[`${size}Size`],
        style
      ]}>
        {title ? <Text style={[styles.title, styles[`${size}TitleSize`], titleStyle && titleStyle]}>{title}</Text> : null}
        {children}
      </View>
    </TouchableOpacity>
  );
};


Button.propTypes = {
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  title: PropTypes.string,
  border: PropTypes.bool,
  borderType: PropTypes.oneOf(['solid', 'dotted', 'dashed']),
  size: PropTypes.oneOf(['normal', 'fill']),
  titleStyle: Text.propTypes.style,
};

Button.defaultProps = {
  onPress: () => {
  
  },
  disabled: false,
  children: null,
  title: null,
  border: false,
  borderType: 'solid',
  size: 'normal',
};


const styles = StyleSheet.create({
  root: {
    flex: 0,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  normalSize: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 8,
    paddingBottom: 8,
  },
  fillSize: {
    height: 49,
    flex: 1
  },
  title: {
    color: 'white'
  },
  normalTitleSize: {
    fontSize: 13
  },
  fillTitleSize: {
    fontSize: 18
  },
  solidBorder: {
    borderStyle: 'solid',
    borderColor: COLOR.bg25cbaa,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth
  },
  dottedBorder: {
    borderStyle: 'dotted',
    borderColor: COLOR.bg25cbaa,
    borderRadius: 4,
    borderWidth: 1
  },
  dashedBorder: {
    borderStyle: 'dashed',
    borderColor: COLOR.bg25cbaa,
    borderRadius: 4,
    borderWidth: 1
  },
});

export default Button;
