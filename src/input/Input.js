import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  TextInput,
  Text, TouchableOpacity,
  ViewPropTypes
} from 'react-native';
import COLOR from "../asserts/colorConstant";

class Input extends PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      showClear: false,
      focus: false
    };
    
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.renderClear = this.renderClear.bind(this);
    this.clear = this.clear.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
  }
  
  handleFocus() {
    this.setState({focus: true});
  }
  
  handleBlur() {
    this.setState({focus: false});
  }
  
  
  clear() {
    this.setState({
      showClear: false
    });
    this.props.onChangeText && this.props.onChangeText(null);
  }
  
  renderClear() {
    return (
      <TouchableOpacity
        onPress={this.clear}
      >
        <View style={{width: 24, height: 24, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: COLOR.title66, fontSize: 14}}>X</Text>
        </View>
      </TouchableOpacity>
    );
  }
  
  onChangeText(value) {
    if (value && this.state.showClear === false && this.props.showClear) {
      this.setState({
        showClear: true
      });
    }
    this.props.onChangeText && this.props.onChangeText(value);
  }
  
  render() {
    const {
      showBottom, onChangeText, showFocus,
      label, labelStyle, showClear, style, inputStyle, ...others
    } = this.props;
    
    return (
      <View
        style={[
          styles.root,
          showBottom && styles.bottom,
          {borderBottomColor: this.state.focus && showFocus ? COLOR.redSelect : COLOR.bgb6},
          style
        ]}
      >
        {label ?
          <Text style={[styles.text, labelStyle]}>
            {label}
          </Text> : null
        }
        {label ?
          <Text style={styles.text}>
            :
          </Text> : null
        }
        <TextInput
          onChangeText={this.onChangeText}
          style={[styles.text, styles.input, inputStyle]}
          {...others}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        {showClear && this.state.showClear ?
          this.renderClear() : null
        }
      </View>
    );
  }
}

Input.propTypes = {
  showBottom: PropTypes.bool,
  style: ViewPropTypes.style,
  inputStyle: TextInput.propTypes.style,
  labelStyle: Text.propTypes.style,
  showClear: PropTypes.bool,
  onChangeText: PropTypes.func,
  label: PropTypes.string,
  showFocus: PropTypes.bool
};

Input.defaultProps = {
  showBottom: true,
  style: null,
  inputStyle: null,
  labelStyle: null,
  showClear: false,
  onChangeText: () => {
  
  },
  label: null,
  showFocus: false
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 24
  },
  bottom: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  text: {
    fontSize: 14,
    color: COLOR.title1a
  },
  input: {
    flex: 1,
    marginLeft: 10
  },
});

export default Input;
