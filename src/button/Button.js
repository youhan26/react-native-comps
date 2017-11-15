import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from 'react-native';
import COLOR from "../asserts/colorConstant";
import {Col, Row} from "../view/Layout";


const Button = ({title, children, border, titleColor, borderType, size, style, ...others}) => {
  if (size === 'fill') {
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
          {title ? <Text style={[styles.title, {color: titleColor}, styles[`${size}TitleSize`]]}>{title}</Text> : null}
          {children}
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <Row>
      <Col />
      <TouchableOpacity
        {...others}
      >
        <View style={[
          styles.root,
          border ? (borderType ? styles[`${borderType}Border`] : styles.solidBorder) : {},
          styles[`${size}Size`],
          style
        ]}>
          {title ? <Text style={[styles.title, {color: titleColor}, styles[`${size}TitleSize`]]}>{title}</Text> : null}
          {children}
        </View>
      </TouchableOpacity>
      <Col />
    </Row>
  );
};


Button.propTypes = {
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  title: PropTypes.string,
  border: PropTypes.bool,
  titleColor: PropTypes.string,
  borderType: PropTypes.oneOf(['solid', 'dotted', 'dashed']),
  size: PropTypes.oneOf(['normal', 'fill']),
};

Button.defaultProps = {
  onPress: () => {
  
  },
  disabled: false,
  children: null,
  title: null,
  border: false,
  titleColor: null,
  borderType: 'solid',
  size: 'normal'
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
    color: 'white',
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
    borderWidth: 1
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
