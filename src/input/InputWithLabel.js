/**
 * Created by youhan on 2017/9/4.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import {COLOR} from "../asserts/colorConstant";

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingTop: 10,
    paddingBottom: 10,
  },
  text: {
    lineHeight: 24,
    fontSize: 14,
    color: COLOR.title1a
  }
});

class InputWithLabel extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      focus: false
    };
    
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  
  handleFocus() {
    this.setState({focus: true});
  }
  
  handleBlur() {
    this.setState({focus: false});
  }
  
  render() {
    const {label, ...others} = this.props;
    
    return (
      <View
        style={[styles.root, {borderBottomColor: this.state.focus ? COLOR.redSelect : COLOR.bgb6}]}
        behavior={'padding'}
      >
        <Text style={[styles.text, {width: 60}]}>{label}</Text>
        <Text style={styles.text}>:</Text>
        <TextInput
          style={[styles.text, {flex: 1, marginLeft: 10}]}
          {...others}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </View>
    );
  }
}

InputWithLabel.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
};

InputWithLabel.defaultProps = {
  label: ''
};

export default InputWithLabel;

