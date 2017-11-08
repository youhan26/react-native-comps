/**
 * Created by youhan on 2017/9/4.
 */
import React from 'react';
import ReactNative from 'react-native';

const {
  Keyboard,
  TextInput,
  ScrollView,
  findNodeHandle,
} = ReactNative;

// tab height + listitem bottom padding + textinput height
const ADDITIONAL_OFFSET = 35 + 50;

class KeyboardAvoidingScrollView extends React.Component {
  componentWillMount() {
    this.subscriptions = [
      Keyboard.addListener('keyboardDidShow', this.keyboardDidShow),
    ];
  }
  
  componentWillUnmount() {
    this.subscriptions.forEach((sub) => sub.remove());
  }
  
  keyboardDidShow = () => {
    const currentlyFocusedField = TextInput.State.currentlyFocusedField();
    const scrollResponder = this.refs.keyboardAvoidingScrollView.getScrollResponder();
    scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
      findNodeHandle(currentlyFocusedField),
      ADDITIONAL_OFFSET,
      true
    );
  };
  
  render() {
    const {children, ...props} = this.props;
    
    return (
      <ScrollView
        {...props}
        ref="keyboardAvoidingScrollView"
        keyboardDismissMode="on-drag"
      >
        {children}
      </ScrollView>
    );
  }
}

KeyboardAvoidingScrollView.propTypes = {
  ...ScrollView.propTypes,
};

export default KeyboardAvoidingScrollView;