import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    height: 90,
    shadowColor: '#88530d',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1
  }
});

const Card = ({style, ...others}) => {
  return (<View {...others} style={[styles.card, style]} />);
};

export default Card;
