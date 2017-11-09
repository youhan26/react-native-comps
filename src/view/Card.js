import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    height: 90,
    margin: 6,
    shadowColor: '#88530d',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.3
  }
});

const Card = ({style, ...others}) => {
  return (<View {...others} style={[styles.card, style]} />);
};

export default Card;
